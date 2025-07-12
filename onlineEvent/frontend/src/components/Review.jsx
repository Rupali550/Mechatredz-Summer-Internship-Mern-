// Review.jsx: Form for submitting event reviews
function Review() {
  return (
    <div>
      <h2 className="display-6 mb-4">Submit a Review</h2>
      <form className="card p-4" style={{ maxWidth: '500px' }}>
        <div className="mb-3">
          <label htmlFor="event" className="form-label">Event Name</label>
          <input type="text" className="form-control" id="event" placeholder="Event Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating (1-5)</label>
          <input type="number" className="form-control" id="rating" min="1" max="5" />
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Review</label>
          <textarea className="form-control" id="review" rows="4" placeholder="Your Review"></textarea>
        </div>
        <button type="button" className="btn btn-primary"
          onClick={() => alert('Review submitted!')}>Submit Review</button>
      </form>
    </div>
  );
}
export default Review;