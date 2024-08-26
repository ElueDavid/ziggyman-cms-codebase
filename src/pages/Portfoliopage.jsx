import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import biyidp from "../images/biyid.png";
import pcimage from "../images/Component 40.png";

export default function Portfoliopage() {
  const navigate = useNavigate();

  const handleNavigate = (page) => navigate(`/${page}`);

  const [modalActive, setModalActive] = useState(false);
  const [modal2Active, setModal2Active] = useState(false);
  const [isActivedel, setIsActivedel] = useState(false);
  const [fileSections, setFileSections] = useState([{ id: Date.now() }]);

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
      e.target.classList.contains('ppm-form') || 
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

  const addFileSection = () => {
    setFileSections([...fileSections, { id: Date.now() }]);
  };

  const removeFileSection = (idToRemove) => {
    setFileSections((prevFileSections) =>
      prevFileSections.filter((section) => section.id !== idToRemove)
    );
  };

  const [mediaPreview, setMediaPreview] = useState(null);
  const [mediaType, setMediaType] = useState(null);

  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type.split('/')[0];
      setMediaType(fileType);
      const fileURL = URL.createObjectURL(file);
      setMediaPreview(fileURL);
    }
  };

  const handleDeleteClick = () => {
    // Open delete confirmation modal without closing other modals
    setIsActivedel(true);
  };

  const handleYesClick = () => {
    // Close all modals
    setModalActive(false);
    setModal2Active(false);
    setIsActivedel(false);
  };

  const handleNoClick = () => {
    // Close only delete confirmation modal
    setIsActivedel(false);
  };

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
          <div className='sidebar-indicator' onClick={() => handleNavigate('Portfoliopage')}>
            Portfolio
          </div>
          <div onClick={() => handleNavigate('Lightpages')}>Light Pages</div>
          <div onClick={() => handleNavigate('Products')}>Products</div>
          <div onClick={() => handleNavigate('Clients')}>Clients</div>
        </section>
      </div>
      <main>
        <div className="add-content-btn" onClick={handleAddContentClick}>
          + Add content
        </div>

        <div className="upload-banner-pic-space">
          <input 
            type="file" 
            accept="image/*,video/*"
            onChange={handleMediaChange}
            style={{ display: 'block', margin: '20px 0' }}
          />
          <div className="media-upload-box">
            {mediaPreview ? (
              mediaType === 'image' ? (
                <img 
                  src={mediaPreview} 
                  alt="Uploaded Preview" 
                  className="media-preview" 
                />
              ) : (
                <video 
                  src={mediaPreview} 
                  controls 
                  className="media-preview"
                />
              )
            ) : (
              <p className="media-placeholder">No media selected</p>
            )}
          </div>
        </div>

        <input type="search" placeholder='search content' className='search-input' />
        <div className="portfolio-contents">
          <div className="portfolio-content">
            <figure className='pc-image'>
              <img src={pcimage} alt="" />
            </figure>
            <h4 className="pc-text-name" onClick={handlePCNameClick}>Ignormania</h4>
            <span className="cancel-pc-item" onClick={handleDeleteClick}>X</span>
          </div>
          {/* Add more portfolio content */}
        </div>
      </main>
      {modalActive && (
        <div className="modal-bg" >
          <div className="portfoliopage-modal">
            <div className="close-btn-modal" onClick={handleModalClick}>
              x
            </div>
            <form action="" className='ppm-form'>
              <div className="form-subheading">
                <h2>Outer Page</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Title'/>
                <div className='file-section'>
                  <p>Upload Desktop Cover visual</p>
                  <input type="file" />
                </div>
                <div className='file-section'>
                  <p>Upload Mobile  Cover visual</p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Alt text'/>
              </section>
              <select name="" id="" className='portfolio-select'>
                <option value="" disabled selected hidden>Portfolio type</option>
                <option value="">Product Design</option>
                <option value="">Brand identitity & strategy</option>
              </select>
              <div className="form-subheading">
                <h2>Inner Page</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <div className='file-section'>
                  <p>Upload Headline  Cover Visual </p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Enter Headline text'/>
                <textarea name="" placeholder='Enter content' id=""></textarea>
                <section className='section-container'>
                  {fileSections.map((section) => (
                    <div key={section.id} className='file-section'>
                      <p>Upload image/gif/video</p>
                      <input type="file" />
                      <input type="text" placeholder='alt text' />
                      <div className="dlt-single-file-section" onClick={() => removeFileSection(section.id)}>
                        X
                      </div>
                    </div>
                  ))}
                  <div className="manipulation-btns">
                    <span className="mb-1" onClick={addFileSection}>add</span>
                  </div>
                </section>
                <input type="text" placeholder='button title'/>
                <input type="text" placeholder='button link'/>
              </section>
              <div className="form-btns">
                <button type="reset" onClick={handleDeleteClick}>Delete</button>
                <button type="submit">Publish</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {modal2Active && (
        <div className="modal2-bg">
          <div className="portfoliopage-modal2">
            <div className="close-btn-modal" onClick={handleModal2Click}>
              x
            </div>
            <form action="" className="ppm-form2">
              <div className="form-subheading">
                <h2>Outer Page</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Edit Title'/>
                <div className='file-section'>
                  <p>Edit Desktop visual banner</p>
                  <input type="file" />
                </div>
                <div className='file-section'>
                  <p>Edit Desktop visual Cover</p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Edit Alt text'/>
              </section><br /><br />
              <div className="form-subheading">
                <h2>Inner Page</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <div className='file-section'>
                  <p>Edit Headline Cover Visual </p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Edit Headline text'/>
                <textarea name="" placeholder='Edit content' id=""></textarea>
                <div className='file-section'>
                  <p>Edit image/gif/video 1</p>
                  <input type="file" />
                  <span className="del-iv">
                    Delete
                  </span>
                </div>
                {fileSections.map((section) => (
                  <div key={section.id} className='file-section'>
                    <p>Edit desktop inner visual {section.id}</p>
                    <input type="file" />
                    <span className="del-iv" onClick={() => removeFileSection(section.id)}>
                      Delete
                    </span>
                  </div>
                ))}
                <input type="text" placeholder='Edit content'/>
                <input type="text" placeholder='Edit Alt text'/>
                <input type="text" placeholder='Edit Headline'/>
                <input type="text" placeholder='Edit button title'/>
                <input type="text" placeholder='Edit button link'/>
              </section>
              <div className="form-btns">
                <button type="reset" onClick={handleDeleteClick}>Delete</button>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className={`delete-modal-bg ${isActivedel ? 'active' : ''}`}>
        <h1>Sure you want to delete content?</h1>
        <div className="dm-btns">
          <span className='dm-btn1' onClick={handleYesClick}>Yes</span>
          <span className='dm-btn2' onClick={handleNoClick}>No</span>
        </div>
      </div>
    </div>
  );
}
