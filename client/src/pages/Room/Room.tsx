import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import io from 'socket.io-client'
import Peer, { SignalData } from 'simple-peer'

import Video from 'components/Video'

import { StyledContainer } from './RoomStyles'
import Join from './Join'

const videoConstraints = {
  height: 400,
  width: 700
}

const Room = () => {
  const [peers, setPeers] = useState<Peer.Instance[]>([])
  const [joined, setJoined] = useState(false)
  const [currUserStream, setCurrUserStream] = useState<MediaStream>()
  
  const params = useParams<{ roomId: string }>()
  const socketRef = useRef<SocketIOClient.Socket | null>(null)
  const peersRef = useRef<{ peerId: string, peer: Peer.Instance }[]>([])

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
      setCurrUserStream(stream)
    })
  }, [])

  useEffect(() => {
    if (!currUserStream || !joined) return
    socketRef.current = io.connect("http://34.76.39.20/websocket")
    socketRef.current!.emit("join-room", params.roomId!)
    socketRef.current!.on("users", (users: string[]) => {
      const peers: Peer.Instance[] = []
      users.forEach((userId: string) => {
        const peer = createPeer(userId, socketRef.current!.id, currUserStream)

        peersRef.current.push({
          peerId: userId,
          peer,
        })

        peers.push(peer)
      })
      setPeers(peers)
    })

    socketRef.current!.on("user-joined", (payload: { signal: any, callerId: string }) => {
      const peer = addPeer(payload.signal, payload.callerId, currUserStream)

      peersRef.current.push({
        peerId: payload.callerId,
        peer,
      })

      setPeers(users => [...users, peer])
    })

    socketRef.current!.on("returned-signal", (payload: { id: string, signal: any }) => {
      const item = peersRef.current.find(p => p.peerId === payload.id)
      item!.peer.signal(payload.signal)
    })
  }, [params.roomId, currUserStream, joined])

  const createPeer = (userToSignal: string, callerId: string, stream: MediaStream) => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    })

    peer.on("signal", signal => {
      socketRef.current!.emit("signal", { userToSignal, callerId, signal })
    })

    return peer
  }

  function addPeer(incomingSignal: SignalData, callerId: string, stream: MediaStream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    })

    peer.on("signal", signal => {
      socketRef.current!.emit("return-signal", { signal, callerId })
    })

    peer.signal(incomingSignal)

    return peer
  }
  
  return (
    <>
      {!joined && <Join handleJoin={() => setJoined(true)} stream={currUserStream} />}
      {joined && (
        <StyledContainer>
          {currUserStream && <Video muted currentUser stream={currUserStream} />}
          {peers.map((peer, index) => <Video key={index} peer={peer} />)}
        </StyledContainer>
      )}
    </>
  )
}

export default Room
