import React from 'react';
import { Card, Col, Row } from 'react-bootstrap'; // Added Card import
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigateByUrl= useNavigate()
  return (
    <>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{ fontSize: '40px' }}>
            Welcome to <span className='text-warning'>Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            nam maiores! Provident saepe illo quam ullam recusandae. Vel sunt
            veritatis voluptatibus magnam, ipsum quisquam dolores, exercitationem
            quidem dolorem ratione sint.
          </p>
          <button onClick={()=>navigateByUrl('/home')} className='btn btn-info mt-4'>Get Started</button>
        </Col>
        <Col lg={5} className="d-flex justify-content-end">
          <img height={'250px'}  className='mx-5'
            src='https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif'
            alt=''
          />
        </Col>
        <Col></Col>
      </Row>

      <div className='container mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
          <Card.Img
            variant='top'
            height={'280px'}
            width={'250px'}
            src='https://i.gifer.com/origin/ce/ce9b1b80a59bc4090dcded493ccba5f3.gif'
          />
          <Card.Body>
            <Card.Title className='text-primary'>Managing Videos</Card.Title> {/* Fixed Card.Title */}
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              labore dicta omnis sunt, amet laborum eum perspiciatis! Ut neque
              cupiditate cum atque quasi numquam nam itaque unde dolore qui.
              Pariatur?
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
          <Card.Img
            variant='top'
            height={'280px'}
            width={'250px'}
            src='https://i.pinimg.com/originals/6f/5f/f3/6f5ff36fd8ffefa40bf466df6c693ef1.gif'
          />
          <Card.Body>
            <Card.Title className='text-primary'>Categorized Videos</Card.Title> {/* Fixed Card.Title */}
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              labore dicta omnis sunt, amet laborum eum perspiciatis! Ut neque
              cupiditate cum atque quasi numquam nam itaque unde dolore qui.
              Pariatur?
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '22rem' }} className='p-4 bg-info'>
          <Card.Img
            variant='top'
            height={'280px'}
            width={'250px'}
            src='https://media2.giphy.com/media/Zf8ZvPzlLnG4NLGsBb/200w.gif?cid=82a1493bq95jico28e4pv4yja5h0cws6lfv8vw5gvyv52uln&ep=v1_gifs_related&rid=200w.gif&ct=g'
          />
          <Card.Body>
            <Card.Title className='text-primary'>Watch History</Card.Title> {/* Fixed Card.Title */}
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              labore dicta omnis sunt, amet laborum eum perspiciatis! Ut neque
              cupiditate cum atque quasi numquam nam itaque unde dolore qui.
              Pariatur?
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className='text-warning'>Simple,Powerful & Fast</h4>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis dolore totam vero eius sapiente est libero dicta necessitatibus earum? Expedita aut quas exercitationem reprehenderit. Facilis sint nesciunt illum rem.
          </h6>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Categorize Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis dolore totam vero eius sapiente est libero dicta necessitatibus earum? Expedita aut quas exercitationem reprehenderit. Facilis sint nesciunt illum rem.
          </h6>
          <h6 className='mb-5 mt-3'><span className='text-warning fw-bolder'>Managing Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis corporis dolore totam vero eius sapiente est libero dicta necessitatibus earum? Expedita aut quas exercitationem reprehenderit. Facilis sint nesciunt illum rem.
          </h6>
        </div>
        <div className="video col-lg-5">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/ccpVpcP8m44" title="Best of Sushin 2023 | Audio Jukebox |
          Hits of susin shyam | OST" frameBorder={0} allow='accelerometer; autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;
          web-share' allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
