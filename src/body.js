import React from 'react'
import "./body.css"

const Body = () => {
    const events = [
    { id: 1, name: "Spring Break Rave", date: "April 15, 2025", location: "Miami Beach" },
    { id: 2, name: "Neon Lights Festival", date: "May 10, 2025", location: "Los Angeles" },
  ];
  return (
    <div>
      <div className="event-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2 className="event-name">{event.name}</h2>
            <p className="event-info">📅 {event.date}</p>
            <p className="event-info">📍 {event.location}</p>
            <button className="buy-button">Buy Tickets</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Body
