import { default as React, useState } from 'react';
import { Link } from 'react-router-dom';
import Add from '../components/Add';
import Category from '../components/Category';
import View from '../components/View';
function Home() {

  const [uploadVideoResponse,setUploadVideoResponse]=useState({})
  const [dropVideoResponse,setdropVideoResponse]=useState({})

  return (
    <>
      <div className="container mb-5 mt-5 d-flex justify-content-between">
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>
        <Link
          to={'/watch-history'}
          style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }} 
        >
          Watch-History<i className="fa-solid fa-rotate-left mx-2"></i>
        </Link>
      </div>
      
      <div className="container-fluid w-100 mt-5 mb-5 row">
        <div className="all-videos col-lg-9">
          <h2>All Videos</h2>
          <View uploadVideoResponse={uploadVideoResponse} setdropVideoResponse={setdropVideoResponse}/>
        </div>
        <div className="all-videos col-lg-3">
          <Category dropVideoResponse={dropVideoResponse} />
        </div>
      </div>
    </>
  );
}

export default Home;
