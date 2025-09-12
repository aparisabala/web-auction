"use client";
import remote from '@servces/Singletons/axiosSetup';
import { live } from '@servces/Singletons/SocketIO';
import React, { useEffect, useState } from 'react'
export default function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
     const fetchBiddingItems = async () => {
        try {
          const response = await remote.get("api/public/current-bidding");
          setItems(response?.data?.data ?? []); 
        } catch (error) {
          console.error("Failed to fetch bidding items:", error);
        } finally {
          setLoading(false);
        }
      };

    fetchBiddingItems();
  }, [])
  if (loading) {
    return <p>Loading items...</p>;
  }
  return (
    <div>
      <div className="auction-card">
        <div className="auction-header">
          <h1>Live Auction</h1>
          <p>Create an account and bid on the items to win</p>
        </div>
        <div className="auction-items container">
          <div className="row">
            {
              items?.map((item)=>{
                return (
                  <div className="col-md-3" key={item?.id} onClick={()=>{live.emit('chat',{paris: 'ok'})}}>
                    <div className="auction-item">
                      <img src="https://placehold.co/600x400" alt="Item 1" />
                      <h4>{item?.name}</h4>
                      <p>Starting Bid: $100</p>
                      <a href="#" className="bid-btn">
                        Place Bid
                      </a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
