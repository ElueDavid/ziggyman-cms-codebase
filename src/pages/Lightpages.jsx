import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import biyidp from "../images/biyid.png";
import pcimage from "../images/Component 40.png";

export default function Lightpages() {
  const navigate = useNavigate(); 

  const handleNavigate = (page) => navigate(`/${page}`);

  const [modalActive, setModalActive] = useState(false);
  const [modal2Active, setModal2Active] = useState(false);

  const handleAddContentClick = () => {
    setModalActive(true);
    setModal2Active(false); // Deactivate modal2 if active
  };

  const handlePCNameClick = () => {
    setModal2Active(true);
    setModalActive(false); // Deactivate modal if active
  };

  const handleModalClick = (e) => {
    if (
      e.target.classList.contains('modal-bg') || 
      e.target.classList.contains('close-btn-modal')
    ) {
      setModalActive(false);
    }
  };

  const handleModal2Click = (e) => {
    if (
      e.target.classList.contains('modal2-bg') || 
      e.target.classList.contains('close-btn-modal')
    ) {
      setModal2Active(false);
    }
  };

  const [isActivedel, setIsActivedel] = useState(false);

  return (
    <div className='portfolio-page'>
      <div className="side-bar">
        <div className="dp-space" onClick={() => handleNavigate('Portfoliopage')}>
          <figure>
            <img src={biyidp} alt="" />
          </figure>
          <h3>Hello 'Biyi</h3>
        </div>
        <section>
          <div onClick={() => handleNavigate('Portfoliopage')}>
            Portfolio
          </div>
          <div className='sidebar-indicator' onClick={() => handleNavigate('Lightpages')}>Light Pages</div>
          <div onClick={() => handleNavigate('Products')}>Products</div>
          <div onClick={() => handleNavigate('Clients')}>Clients</div>
        </section>
      </div>
      <main>
        <div className="add-content-btn" onClick={handleAddContentClick}>
          + Add content
        </div>
        <input type="search" placeholder='search content' className='search-input' />
        <div className="portfolio-contents">
          <div className="portfolio-content">
            <figure className='pc-image'>
              <img src={pcimage} alt="" />
            </figure>
            <h4 className="pc-text-name" onClick={handlePCNameClick}>Ignormania</h4>
            <span className="cancel-pc-item" onClick={() => setIsActivedel(true)}>X</span>
          </div>
          {/* Add more portfolio content */}
        </div>
      </main>
      {modalActive && (
        <div className="modal-bg">
          <div className="portfoliopage-modal">
            <div className="close-btn-modal" onClick={handleModalClick}>
              x
            </div>
            <form action="" className='ppm-form'>
              <div className="form-subheading">
                <h2>Content</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Title'/>
                <div className='file-section'>
                  <p>Upload image/gif/video</p>
                  <input type="file" />
                </div>
                <textarea name="" placeholder='Add Text Content'  id=""></textarea>
                <input type="text" placeholder='Alt text'/>
              </section>
              <div className="form-btns">
                <button type="reset"  onClick={() => setIsActivedel(true)}>Delete</button>
                <button type="submit">Publish</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {modal2Active && (
        <div className="modal2-bg" >
          <div className="portfoliopage-modal2">
            <div className="close-btn-modal" onClick={handleModal2Click}>
              x
            </div>
            <form action="" className="ppm-form2">
              <div className="form-subheading">
                <h2>Edit content</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Edit Title'/>
                <div className='file-section'>
                  <p>Upload image/gif/video</p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Edit Alt text'/>
              </section>
              <textarea name="" placeholder='Edit content'  id=""></textarea>
              <div className='file-section'>
                  <p>Upload Content File</p>
                  <input type="file" />
                </div>
              <div className="form-btns">
                <button type="reset"  onClick={() => setIsActivedel(true)}>Delete</button>
                <button type="submit">Edit</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={`delete-modal-bg ${isActivedel ? 'active' : ''}`}>
        <h1>
          Sure you want to delete content? 
        </h1>
        <div className="dm-btns">
          <span className='dm-btn1'  onClick={() => setIsActivedel(false)}>Yes</span>
          <span className='dm-btn2' onClick={() => setIsActivedel(false)}>No</span>
        </div>
      </div>
    </div>
  );
}
