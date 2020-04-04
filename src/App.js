import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import SearchBar from './components/layout/SearchBar';
import Photo from './components/photos/Photo';
import PhotoModal from './components/photos/PhotoModal';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className='container'>
          <SearchBar />
          <Photo />
        </div>
        <PhotoModal />
      </Fragment>
    </Provider>
  );
}

export default App;
