// PictureGallery.jsx: Displays a grid of images
function PictureGallery() {
  const images = [
    'https://via.placeholder.com/300x200?text=Event+1',
    'https://via.placeholder.com/300x200?text=Event+2',
    'https://via.placeholder.com/300x200?text=Event+3',
  ];
  return (
    <div>
      <h2 className="display-6 mb-4">Picture Gallery</h2>
      <div className="row">
        {images.map((img, index) => (
          <div key={index} className="col-md-4 mb-3">
            <img src={img} className="img-fluid rounded" alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default PictureGallery;