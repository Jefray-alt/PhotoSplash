import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { clearCurrent } from '../../actions/photoActions';

const PhotoModal = ({ current, clearCurrent }) => {
  const focusOut = e => {
    if (
      e.target.className === 'modal' ||
      e.target.className === 'fas fa-times'
    ) {
      document.body.style.overflow = 'auto';
      clearCurrent();
    }
  };
  if (current !== null) {
    return (
      <div onClick={focusOut} className='modal'>
        <div className='modal-content'>
          <img src={current.urls.regular} alt='' className='photo-container' />
          <div className='img-info'>
            <div className='user'>
              <img
                src={current.user.profile_image.small}
                alt='user_image'
                className='profile-image'
              />
              <div className='info'>
                <p>{current.user.name}</p>
                <i>{current.user.username}</i>
              </div>
            </div>
            <div className='description'></div>
          </div>
          <div className='close' onClick={focusOut}>
            <i className='fas fa-times'></i>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

PhotoModal.propTypes = {
  clearCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.photo.current
});

export default connect(mapStateToProps, { clearCurrent })(PhotoModal);
