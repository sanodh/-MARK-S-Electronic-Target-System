import React from "react";
import img1 from '../Images/Shoot1.jpg';
import img2 from '../Images/Shoot2.jpg';
import img3 from '../Images/Shoot3.jpg';
import img4 from '../Images/Shoot4.jpg';
import img5 from '../Images/Shoot5.jpg';
import img6 from '../Images/Shoot6.jpg';

function News() {

  return (
    <div className="container" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <div className="card-deck">
        <div className="card">
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">News</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src={img2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">News</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src={img3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">News</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>

      <div className="card-deck" style={{ marginTop: '50px' }}>
        <div className="card">
          <img src={img4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">News</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src={img5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">News</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img src={img6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">News</h5>
            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;