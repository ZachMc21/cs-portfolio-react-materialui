import { RowsPhotoAlbum, type Photo } from "react-photo-album";
import "react-photo-album/rows.css";


interface photoGalleryList {
	photos: Photo[];
}

const PhotoGallery = ({ photos } : photoGalleryList) => {
  return <RowsPhotoAlbum photos={photos} />;
};

export default PhotoGallery;