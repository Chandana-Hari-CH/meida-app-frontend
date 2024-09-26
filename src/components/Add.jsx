import React, { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { uploadVideoAPI } from '../../services/allAPI';
function Add({setUploadVideoResponse}) {

  const [uploadVideo,setUploadVideo]=useState({
    id:"",caption:"",url:"",link:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false)
    setUploadVideo({
      id:"",caption:"",url:"",link:""
    })
  }
  
  const handleShow = () => setShow(true);
  console.log(uploadVideo);

  const getYoutubeLink=(e)=>{
    const {value} = e.target
    if(value.includes("v=")){
      let vID= value.split("v=")[1].slice(0,11)
      console.log({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`});
      setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${vID}`})
    }
    else{
      setUploadVideo({...uploadVideo,link:""})

    }
  }

  const handleAdd=async()=>{
    const{id,caption,url,link}=uploadVideo
    if(!id || !caption || !url || !link){
      alert("Please fill missing fields")
    }else{
      const result= await uploadVideoAPI(uploadVideo)
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        alert("Video successfully uplloaded")
        setUploadVideoResponse(result.data)
       
        
        // after getting successful response
        setUploadVideo({
          id:"",caption:"",url:"",link:""
        })
        
      }else{
        console.log(result.message);
        alert(result.message)
      }
    }
  }
  
  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload Video</h5>
        <button onClick={handleShow} className="btn">
          <i style={{ fontSize: '25px' }} className="fa-solid fa-arrow-up-from-bracket fa-fade"></i>
        </button>
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel
        controlId="floatingVideo"
        label="video id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="video id" 
        onChange={(e)=>setUploadVideo({...uploadVideo,id: e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingname"
        label="Video name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="video name" 
        onChange={(e)=>setUploadVideo({...uploadVideo,caption: e.target.value})}/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingImg"
        label="Video img"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="image url"
        onChange={(e)=>setUploadVideo({...uploadVideo,url: e.target.value})} />
      </FloatingLabel>
      <FloatingLabel
        controlId="vdoUrl"
        label="Video url"
        className="mb-3"
      >
        <Form.Control type="text"  placeholder="video url"
        onChange={getYoutubeLink} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
