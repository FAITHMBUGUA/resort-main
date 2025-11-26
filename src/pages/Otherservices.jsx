import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';

export default function Rooms({ setPage }) {
  const rooms = [
    {
      id: 'room-standard',
      name: "Standard Room",
      desc: "Affordable comfort with modern essentials.",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      price: "3,500 / night"
    },
    {
      id: 'room-deluxe',
      name: "Deluxe Room",
      desc: "Premium comfort with extra luxury.",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      price: "5,500 / night"
    },
    {
      id: 'room-family',
      name: "Family Suite",
      desc: "Spacious room perfect for families.",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
      price: "8,000 / night"
    },
    {
      id: 'room-executive',
      name: "Executive Suite",
      desc: "Elegant space with panoramic views.",
      image: "https://images.pexels.com/photos/271640/pexels-photo-271640.jpeg",
      price: "10,000 / night"
    },
    {
      id: 'room-presidential',
      name: "Presidential Suite",
      desc: "Ultimate luxury with private lounge.",
      image: "https://images.pexels.com/photos/271641/pexels-photo-271641.jpeg",
      price: "15,000 / night"
    },
    {
      id: 'room-honeymoon',
      name: "Honeymoon Suite",
      desc: "Romantic getaway with premium amenities.",
      image: "https://images.pexels.com/photos/271642/pexels-photo-271642.jpeg",
      price: "12,000 / night"
    }
  ];

  const handleBookNow = (room) => {
    alert(`${room.name} selected for booking!`);
  };

  const renderRooms = (items) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
      {items.map(room => (
        <Card key={room.id} style={{ overflow: 'hidden', transition: 'transform 0.3s', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
            <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />
          </div>
          <CardHeader>
            <CardTitle style={{ fontSize: '1.25rem' }}>{room.name}</CardTitle>
            <CardDescription>{room.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#0ea5e9' }}>{room.price}</div>
          </CardContent>
          <CardFooter>
            <Button style={{ width: '100%' }} onClick={() => handleBookNow(room)}>Book Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', padding: '40px 20px', backgroundColor: '#111', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Button style={{ marginBottom: '20px', background: 'rgba(255,255,255,0.2)', color: 'white' }} onClick={() => setPage('dashboard')}>← Back</Button>
          <h1 style={{ fontSize: '3rem', marginBottom: '12px', textShadow: '0 3px 8px rgba(0,0,0,0.5)' }}>Available Rooms</h1>
          <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>Select your preferred room from our curated options for a comfortable and luxurious stay.</p>
        </div>
        {renderRooms(rooms)}
      </div>
    </div>
  );
}
