import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BookEvents from './components/BookEvents';
import ContactUs from './components/ContactUs';
import PictureGallery from './components/PictureGallery';
import VideoGallery from './components/VideoGallery';
import Login from './components/Login';
import Review from './components/Review';


// Main App component: Controls navigation and renders the active page
function App() {
  // State to track the current page (e.g., Home, Book Events)
  const [currentPage, setCurrentPage] = useState('Home');
  // State to track login status (for demo, toggles Admin Zone access)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to render the selected page based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Book Events':
        return <BookEvents />;
      case 'Contact Us':
        return <ContactUs />;
      case 'Picture Gallery':
        return <PictureGallery />;
      case 'Video Gallery':
        return <VideoGallery />;
      case 'Login':
        return <Login setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
      case 'Review':
        return <Review />;
      case 'Admin Dashboard':
        return isLoggedIn ? <AdminDashboard /> : <Login setIsLoggedIn={setIsLoggedIn} setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-vh-100">
      {/* Bootstrap Navbar for navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Online Events Booking</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentPage('Home')}>Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentPage('Book Events')}>Book Events</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentPage('Contact Us')}>Contact Us</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentPage('Picture Gallery')}>Picture Gallery</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentPage('Video Gallery')}>Video Gallery</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentPage('Login')}>Login</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={() => setCurrentPage('Review')}>Review</button>
              </li>
              {isLoggedIn && (
                <li className="nav-item">
                  <button className="nav-link btn" onClick={() => setCurrentPage('Admin Dashboard')}>Admin Dashboard</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* Render the current page */}
      <div className="container py-4">{renderPage()}</div>
    </div>
  );
}

export default App;