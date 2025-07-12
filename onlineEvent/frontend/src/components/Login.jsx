// Login.jsx: Form for user login
function Login({ setIsLoggedIn, setCurrentPage }) {
  return (
    <div>
      <h2 className="display-6 mb-4">Login</h2>
      <div className="card p-4" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <label htmlFor="userid" className="form-label">User ID</label>
          <input type="text" className="form-control" id="userid" placeholder="Enter User ID" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter Password" />
        </div>
        <button
          className="btn btn-primary mb-2"
          onClick={() => {
            setIsLoggedIn(true);
            setCurrentPage('Home');
            alert('Logged in successfully!');
          }}
        >
          Login
        </button>
        <a href="#" className="d-block mb-2">Forgot Password?</a>
        <a href="#" className="d-block">Sign Up Here</a>
      </div>
    </div>
  );
}
export default Login;