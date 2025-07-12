// VideoGallery.jsx: Displays a grid of videos
function VideoGallery() {
  const videos = [
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
  ];
  return (
    <div>
      <h2 className="display-6 mb-4">Video Gallery</h2>
      <div className="row">
        {videos.map((video, index) => (
          <div key={index} className="col-md-6 mb-3">
            <video className="img-fluid rounded" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
export default VideoGallery;