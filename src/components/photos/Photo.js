import React, { useEffect } from 'react';
import Proptypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as uuidv4 } from 'uuid';

// Components
import PhotoItem from './PhotoItem';
import Preloader from '../layout/Preloader';

// Redux
import { connect } from 'react-redux';
import {
  getPhotos,
  searchPhoto,
  searchMorePhoto
} from '../../actions/photoActions';

const Photo = ({
  photo: { photos, search, page },
  getPhotos,
  searchMorePhoto
}) => {
  useEffect(() => {
    getPhotos();
  }, []);

  if (search !== null && photos.length === 0) {
    return (
      <div className='text-center' style={{ marginTop: '15px' }}>
        <h2>Oops!</h2>
        <p style={{ marginTop: '5px' }} className='thin'>
          No photos found
        </p>
      </div>
    );
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={photos.length}
        next={
          search === null
            ? getPhotos
            : () => {
                searchMorePhoto(search, page);
              }
        }
        hasMore={true}
        loader={<Preloader />}
      >
        <div className='gallery-container'>
          {photos.map(photo => (
            <PhotoItem key={uuidv4()} item={photo} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

Photo.propTypes = {
  getPhotos: Proptypes.func.isRequired,
  searchPhoto: Proptypes.func.isRequired,
  searchMorePhoto: Proptypes.func.isRequired,
  photo: Proptypes.object.isRequired
};

const mapStateToProps = state => ({
  photo: state.photo
});
export default connect(mapStateToProps, {
  getPhotos,
  searchPhoto,
  searchMorePhoto
})(Photo);
