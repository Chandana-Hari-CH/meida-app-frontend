import { MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

function Footer() {
  return (
    <>
      <MDBFooter className='text-center bg-light text-lg-start text-muted' style={{ paddingTop: '20px' }}>


        <section className=''>
          <MDBContainer style={{marginTop:"20px"}} className='text-center text-md-start mt-5'>
            <MDBRow style={{marginTop:"20px"}} className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="video" className="me-3" />
                  Media-Player
                </h6>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus amet omnis nihil inventore corrupti sapiente illum sint esse maiores ut incidunt fugiat, id atque eos beatae nostrum. A, laudantium quidem!

                </p>
              </MDBCol>

              <MDBCol style={{ textDecoration: "none" }} md="2" lg="2" xl="2" className='mx-auto mb-4 '>
                <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
                <p>
                  <a style={{ textDecoration: "none" }} href='#!' className='text-reset'>
                    Landing Page
                  </a>
                </p>
                <p>
                  <a style={{ textDecoration: "none" }} href='#!' className='text-reset'>
                    Home Page
                  </a>
                </p>
                <p>
                  <a style={{ textDecoration: "none" }} href='#!' className='text-reset'>
                    Watch History
                  </a>
                </p>

              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
                <p>
                  <a style={{ textDecoration: "none" }} href='#!' className='text-reset'>
                    React
                  </a>
                </p>
                <p>
                  <a style={{ textDecoration: "none" }} href='#!' className='text-reset'>
                    React Bootstrap
                  </a>
                </p>
                <p>
                  <a style={{ textDecoration: "none" }} href='#!' className='text-reset'>
                    Bootswatch
                  </a>
                </p>

              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                <form action="">
                  <input
                    className='p-1'
                    type="text"
                    placeholder='Enter your Email id'
                    style={{ borderRadius: '7px' }}
                  />                
                  <button className='btn btn-warning mx-1'>Subscribe</button>
                </form>
                <div className='mt-4'>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  )
}

export default Footer