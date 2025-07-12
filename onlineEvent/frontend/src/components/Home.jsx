// Home.jsx: Displays the homepage with logo, slider, user list, and login form
function Home() {
  // Sample registered users (in a real app, fetch from a backend)
  const users = ['Alice', 'Bob', 'Charlie'];
  return (
    <div>
      <h2 className="display-6 mb-4">Welcome to Online Events Booking</h2>
      {/* Slider: Placeholder for featured events */}
     <div className="bg-light p-5 mb-4 text-center">
  <p className="fs-4">
    <img
      src="https://cdn.prod.website-files.com/5fd2ba969b6ce08fc68b0904/64f7abc4498b85260aca7c20_cover.webp"
      alt="no"
      className="img-fluid"
      style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
    />
  </p>
</div>

      {/* Dynamic User List */}
      <h3 className="fs-4 mb-2">Registered Users</h3>
      <ul className="list-group mb-4">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">{user}</li>
        ))}
      </ul>
      {/* Login Form (simplified, links to Login page) */}
      <div className="card p-4" style={{ maxWidth: '300px' }}>
        <h4 className="mb-3">Quick Login</h4>
        <button className="btn btn-primary" onClick={() => window.location.href = '#login'}>Go to Login</button>
      </div>
    </div>
  );
}
export default Home;