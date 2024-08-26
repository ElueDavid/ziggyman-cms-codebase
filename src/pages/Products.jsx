import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import biyidp from "../images/biyid.png";
import pcimage from "../images/Component 40.png";
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs

export default function Products() {
  const navigate = useNavigate();

  const handleNavigate = (page) => navigate(`/${page}`);

  const [modalActive, setModalActive] = useState(false);
  const [modal2Active, setModal2Active] = useState(false);
  const [isActivedel, setIsActivedel] = useState(false);
  const [fileSections, setFileSections] = useState([{ id: uuidv4() }]);

  const addFileSection = () => {
    setFileSections([...fileSections, { id: uuidv4() }]);
  };

  const removeFileSection = (id) => {
    setFileSections(fileSections.filter(section => section.id !== id));
  };

  const handleAddContentClick = () => {
    setModalActive(true);
    setModal2Active(false); // Deactivate modal2 if active
  };

  const handlePCNameClick = () => {
    setModal2Active(true);
    setModalActive(false); // Deactivate modal if active
  };

  const handleModalClick = (e) => {
    if (e.target.classList.contains('close-btn-modal') || e.target.classList.contains('modal-bg')) {
      setModalActive(false);
    }
  };

  const handleModal2Click = (e) => {
    if (e.target.classList.contains('close-btn-modal') || e.target.classList.contains('modal2-bg')) {
      setModal2Active(false);
    }
  };

  const handleDeleteModal = () => {
    setModalActive(false);
    setModal2Active(false);
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
          <div onClick={() => handleNavigate('Portfoliopage')}>
            Portfolio
          </div>
          <div onClick={() => handleNavigate('Lightpages')}>Light Pages</div>
          <div className='sidebar-indicator' onClick={() => handleNavigate('Products')}>Products</div>
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
                <h2>Outer Page</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Title'/>
                <div className='file-section'>
                  <p>Upload Cover Visual</p>
                  <input type="file" />
                </div>
                <textarea name="" placeholder='Add Text Content' id=""></textarea>
                <input type="text" placeholder='Button title'/>
                <input type="text" placeholder='Button link'/>
                <select name="" id="">
                  <option value="" disabled selected hidden>Product Type</option>
                  <option value="All">All</option>
                  <option value="Ebooks">Ebooks</option>
                  <option value="Service as product">Service as product</option>
                  <option value="Product solutions">Product solutions</option>
                  <option value="Ecourses">Ecourses</option>
                </select>
              </section><br /><br /><br />
              <div className="form-subheading">
                <h2>Headline</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <div className='file-section'>
                  <p>Upload headline cover visual</p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Head title'/>
                <input type="text" placeholder='Sub title'/>
                <input type="text" placeholder='Button title'/>
                <input type="text" placeholder='Button link'/>
              </section><br /><br />
              <div className="form-subheading">
                <h2>Features</h2>
                <span className="fs-line"></span>
              </div>

              <section className="form-input-sec">
                <input type="text" placeholder='Headline text'/>
                <section className='section-container'>
                  {fileSections.map(({ id }, index) => (
                    <div key={id} className='file-sec'>
                      <div className='file-section'>
                        <p>Upload image</p>
                        <input type="file" />
                      </div>
                      <input type="text" placeholder='alt text'/>
                      <input type="text" placeholder='Content'/>
                      <div className="dlt-single-file-section" onClick={() => removeFileSection(id)}>
                        X
                      </div>
                    </div>
                  ))}
                  <div className="manipulation-btns">
                    <span className="mb-1" onClick={addFileSection}>add</span>
                  </div>
                </section>
              </section><br /><br />

              <div className="form-subheading">
                <h2>More features</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Headline text'/>
                <div className='file-section'>
                  <p>Upload cover visual</p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Alt text'/>
                <input type="text" placeholder='sub title'/>
                <input type="text" placeholder='Button title'/>
                <input type="text" placeholder='Button link'/>
              </section><br /><br /><br />
              <div className="form-subheading">
                <h2>Testimonials</h2>
                <span className="fs-line"></span>
              </div>
              <section className='section-container'>
                {fileSections.map(({ id }, index) => (
                  <div key={id} className='form-input-sec'>
                    <input type="text" placeholder='Testimonial Author'/>
                    <input type="text" placeholder='Testimonial Quote'/>
                    <div className="dlt-single-file-section" onClick={() => removeFileSection(id)}>
                      X
                    </div>
                  </div>
                ))}
                <div className="manipulation-btns">
                  <span className="mb-1" onClick={addFileSection}>add</span>
                </div>
              </section><br /><br />

              <div className="form-subheading">
                <h2>Final punch</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Button title'/>
                <input type="text" placeholder='Button link'/>
              </section>
              <div className="form-btns">
                <button type="reset" onClick={() => setIsActivedel(true)}>Delete</button>
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
                <h2>Outer Page</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Title'/>
                <div className='file-section'>
                  <p>Edit desktop cover visual</p>
                  <input type="file" />
                </div>
                <textarea name="" placeholder='Edit content' id=""></textarea>
                <input type="text" placeholder='Edit Button title'/>
                <input type="text" placeholder='Edit Button link'/>
                <select name="" id="">
                  <option value="" disabled hidden selected>Content type</option>
                  <option value="All">All</option>
                  <option value="Ebooks">Ebooks</option>
                  <option value="Service as product">Service as product</option>
                  <option value="Product solutions">Product solutions</option>
                  <option value="Ecourses">Ecourses</option>
                </select>
              </section><br /><br /><br />
              <div className="form-subheading">
                <h2>Headline</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <div className='file-section'>
                  <p>Edit headline cover visual</p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Edit Head title'/>
                <input type="text" placeholder='Edit Sub title'/>
                <input type="text" placeholder='Edit Button title'/>
                <input type="text" placeholder='Edit Button link'/>
              </section><br /><br />
              <div className="form-subheading">
                <h2>Features</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Edit headline text'/>
                <section className='section-container'>
                  {fileSections.map(({ id }, index) => (
                    <div key={id} className='file-sec'>
                      <div className='file-section'>
                        <p>Edit image</p>
                        <input type="file" />
                      </div>
                      <input type="text" placeholder='Edit alt text'/>
                      <input type="text" placeholder='Edit content'/>
                      <div className="dlt-single-file-section" onClick={() => removeFileSection(id)}>
                        X
                      </div>
                    </div>
                  ))}
                </section>
              </section><br /><br />

              <div className="form-subheading">
                <h2>More features</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Edit Headline Text'/>
                <div className='file-section'>
                  <p>Edit cover visual</p>
                  <input type="file" />
                </div>
                <input type="text" placeholder='Edit alt text'/>
                <input type="text" placeholder='Edit button title'/>
                <input type="text" placeholder='Edit button link'/>
              </section><br /><br /><br />
              <div className="form-subheading">
                <h2>Edit testimonials</h2>
                <span className="fs-line"></span>
              </div>
              <section className='section-container'>
                {fileSections.map(({ id }, index) => (
                  <div key={id} className='form-input-sec'>
                    <input type="text" placeholder='Edit Testimonial Author'/>
                    <input type="text" placeholder='Edit Testimonial Quote'/>
                    <div className="dlt-single-file-section" onClick={() => removeFileSection(id)}>
                      X
                    </div>
                  </div>
                ))}
              </section><br /><br />

              <div className="form-subheading">
                <h2>Edit final punch</h2>
                <span className="fs-line"></span>
              </div>
              <section className="form-input-sec">
                <input type="text" placeholder='Edit Button title'/>
                <input type="text" placeholder='Edit Button link'/>
              </section>
              <div className="form-btns">
                <button type="reset" onClick={() => setIsActivedel(true)}>Delete</button>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className={`delete-modal-bg ${isActivedel ? 'active' : ''}`}>
        <h1>Sure you want to delete content?</h1>
        <div className="dm-btns">
          <span className='dm-btn1' onClick={handleDeleteModal}>Yes</span>
          <span className='dm-btn2' onClick={() => setIsActivedel(false)}>No</span>
        </div>
      </div>
    </div>
  );
}
