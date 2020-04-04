import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { searchPhoto } from '../../actions/photoActions';

const SearchBar = ({ searchPhoto }) => {
  const text = useRef();

  const onSubmit = e => {
    e.preventDefault();
    searchPhoto(text.current.value, 1);
  };
  return (
    <form className='searchBar' onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search Photos...'
        className='searchBar-input'
        ref={text}
        required
      />
      <button className='btn btn-primary' type='submit'>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  searchPhoto: PropTypes.func.isRequired
};

export default connect(null, { searchPhoto })(SearchBar);
