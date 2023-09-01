import './PhotoListItem.css';

function PhotoListItem({photo}) {
  return (
    <img className='photo-list__img' src={photo.sizes[10].url} alt={photo.name} />
  );
}

export default PhotoListItem;
