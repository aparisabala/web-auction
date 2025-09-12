"use client";
import { live } from '@servces/Singletons/SocketIO';
import React, { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    live.on('chat',(data)=>{ console.log(data)});
  }, [])
  return (
    <div>
       <button onClick={()=>{live.emit('chat',{paris: "ok"});}}> Click me </button>
    </div>
  )
}
