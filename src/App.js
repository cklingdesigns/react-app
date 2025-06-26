//import react from 'react'
import './App.css';
import './navBar/NavBar.js';
import './test.py';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import ContactModal from './ContactModal';
import ImageSlideshowHobbies from './ImageSlideshowOnHover';
import { ImageSlideshowFunDesigns } from './ImageSlideshowOnHover';
import { ImageSlideshowCoding } from './ImageSlideshowOnHover';
import { ImageSlideshowWildSide } from './ImageSlideshowOnHover';
import { ImageSlideshowMarketing } from './ImageSlideshowOnHover';
import { ImageSlideshowSilly } from './ImageSlideshowOnHover';
import { ImageSlideshowWoodworking } from './ImageSlideshowOnHover';
import { ImageSlideshowHolidayFun } from './ImageSlideshowOnHover';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="App">
    <header>
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#"><img className="App-logo" width="200" alt="cklingdesigns Logo" src="/images/ckling-logo.png" data-holder-rendered="true" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarHeader" />
        <Navbar.Collapse id="navbarHeader">
          <Nav className="me-auto">
            <Nav.Link href="https://x.com/CoreyKling95639"><i className="fab fa-twitter"></i> Twitter</Nav.Link>
            <Nav.Link href="https://www.facebook.com/corey.kling.9"><i className="fab fa-facebook"></i> Facebook</Nav.Link>
            <Nav.Link href="https://www.instagram.com/klincl01/"><i className="fab fa-instagram"></i> Instagram</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/corey-kling-97468546/"><i className="fab fa-linkedin"></i> Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/cklingdesigns"><i className="fab fa-github"></i> GitGub</Nav.Link>
            <Nav.Link href="#" onClick={handleShow}><i className="fas fa-envelope"></i> Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Kling's Ominous Portfolio</h1>
          <p className="lead text-muted">Leading a life of many talents!</p>
        </div>
      </section>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                  <ImageSlideshowCoding />
                  <div className="card-body">
                  <p className="card-text">Programming/Web Development</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHobbies />
                <div className="card-body">
                  <p className="card-text">Hobbies/Interests</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWildSide />
                <div className="card-body">
                  <p className="card-text">Wild Side</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowFunDesigns />
                <div className="card-body">
                  <p className="card-text">Fun Designs</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowHolidayFun />
                <div className="card-body">
                  <p className="card-text">Holiday Fun</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowMarketing />
                <div className="card-body">
                  <p className="card-text">Marketing/Design</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowWoodworking />
                <div className="card-body">
                  <p className="card-text">Woodworking Projects</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <ImageSlideshowSilly />
                <div className="card-body">
                  <p className="card-text">My Silly Side</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button variant="primary">View</Button>                    
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>


    <footer className="text-muted">
      <div class="wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="content">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>Copyright © 2025 Cklingdesigns</p>
      </div>
    </footer>
    <ContactModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;