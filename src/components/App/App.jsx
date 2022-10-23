import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
//import { response } from 'express';

function App() {
  const [imageList, setImageList] = useState([])
  const [likes, setLikes] = useState(0)

  useEffect(() => {

    getImages();

  }, []);

  const getImages = () => {
    axios({

      method: 'GET',
      url: '/gallery'

    }).then((response) => {
      setImageList(response.data);

    }).catch((err) => {
      console.log('ERROR in GET', err);

    })
  }

  const putLikes = (id) => {

    console.log('ID', id)

    axios({

      method: 'PUT',
      url: `/gallery/like/${id}`,

    }).then((response) => {
      console.log('RESPONSE', response)

      getImages(response.data)

    }).catch((err) => {
      console.log('ERROR in PUT', err);

    })
  }

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <table>
        <GalleryList imageList={imageList} putLikes={putLikes} />
      </table>


    </div>
  );
}

export default App;
