// BookEvents.jsx: Lists events with booking options
function BookEvents() {
  // Sample events (replace with backend data)
  const events = [
    { id: 1, name: 'Music Concert', date: '2025-08-01', price: '$20' },
    { id: 2, name: 'Tech Workshop', date: '2025-08-15', price: '$50' },
  ];
  return (
    <div>
      <h2 className="display-6 mb-4">Book Events</h2>
      <div className="row">
        {events.map(event => (
          <div key={event.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">Date: {event.date}</p>
                <p className="card-text">Price: {event.price}</p>
                <button className="btn btn-success"
                  onClick={() => alert('Booking confirmed! Notification sent.')}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BookEvents;