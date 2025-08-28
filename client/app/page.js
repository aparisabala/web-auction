'use client'; 
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect,useState } from 'react';
import { io } from 'socket.io-client';
let socket;
export default function Home() {
  const [connected, setConnected] = useState(false);
  const [currentbid, setCurrentBid] = useState(0);
  const [myBid, setMyBid] = useState(0);
  useEffect(() => {
    // Connect to Socket.IO server
    socket = io("http://localhost:5000");
    console.log(socket);
    socket.on("connect", () => {
      setConnected(true)
    });

    socket.on("chat", (data) => {
        setCurrentBid((myBid+(data?.myBid)))
    });

    // Clean up on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && connected) {
      socket.emit("chat", {myBid: parseFloat(myBid)});
    }
  };

  return (
    <div className={styles.page}>
        <h1> Current Bid: {currentbid.toLocaleString()}</h1>
        <input type="number" value={myBid} onChange={(e)=>{setMyBid(e.target.value )}} />
       <button onClick={sendMessage}> Send Server </button>
    </div>
  );
}
