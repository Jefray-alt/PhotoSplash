import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { setCurrent } from '../../actions/photoActions';

const PhotoItem = ({ item, setCurrent }) => {
  const onOpen = item => {
    document.body.style.overflow = 'hidden';
    setCurrent(item);
  };
  return (
    <div style={photoItem(item.urls.small)}>
      <div onClick={() => onOpen(item)} className='thumbnail-content'>
        <div className='all-info'>
          <div className='user-info'>
            <img
              src={item.user.profile_image.small}
              alt='user_profile_image'
              className='profile-image'
            />
            <span className='info'>{item.user.username}</span>
          </div>
          <span className='stat'>
            <i className='fas fa-heart'></i>
            {item.likes}
            <i className='fas fa-eye'></i>
            {item.views}
          </span>
        </div>
      </div>
    </div>
  );
};

const photoItem = url => ({
  height: '300px',
  width: '100%',
  backgroundImage: `url(${url})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  cursor: 'pointer'
});

PhotoItem.propTypes = {
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { setCurrent })(PhotoItem);
