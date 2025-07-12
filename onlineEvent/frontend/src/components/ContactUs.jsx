// ContactUs.jsx: Form for user inquiries
function ContactUs() {
  return (
    <div>
      <h2 className="display-6 mb-4">Contact Us</h2>
      <form className="card p-4" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="button" className="btn btn-primary"
          onClick={() => alert('Message sent!')}>Send</button>
      </form>
    </div>
  );
}
export default ContactUs;