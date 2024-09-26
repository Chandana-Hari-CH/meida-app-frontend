import React, { useEffect, useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { addCategory, deleteCategory, getCategory, getVideoAPI, updateCategory } from '../../services/allAPI';
import VideoCard from './VideoCard.jsx';
function Category(dropVideoResponse) {


  const [allCategory, setAllCategory] = useState([])

  useEffect(() => {
    getCate()
  }, [dropVideoResponse])

  const [categoryName, setCategoryName] = useState("")

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategory({ categoryName, allVideos: [] })
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        handleClose()
        setCategoryName("")
      } else {
        alert(result.message)
      }

    } else {
      alert("Please fill the field")
    }
  }

  const getCate = async () => {
    const { data } = await getCategory()
    //console.log(data);

    setAllCategory(data)
    getCate()
  }
  //console.log(allCategory);

  const removeCategory = async (id) => {
    await deleteCategory(id)
    getCate()
  }

  const dragOver = (e) => {
    console.log("Video card dragging over the category");
    e.preventDefault()

  }
  const videoDrop = async (e, categoryId) => {
    const videoid = e.dataTransfer.getData("videoId")
    console.log("VideoId " + videoid + " dropped inside category " + categoryId);
    const { data } = await getVideoAPI(videoid)
    //console.log(data);
    const selectedCategory = allCategory.find(item => item.id === categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategory(categoryId, selectedCategory)
    getCategory()


  }

  const VideodragStarted=(e,videoid,categoryId)=>{
    let dataShare={videoid,categoryId}
    e.dataTransfer.setData("Data",(JSON.stringify(dataShare)))
  }



  return (
    <>
      <div className="d-grid">
        <button onClick={handleShow} className='btn btn-info'>Add category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input onChange={e => setCategoryName(e.target.value)} type="text" className='form-control' placeholder='Enter category name' />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary" >
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

      {
        allCategory?.length > 0 ? allCategory.map(category => (
          <div  className="border .rounded mt-3 p-3" droppable='true' onDragOver={e => dragOver(e)} onDrop={e => videoDrop(e, category.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h3>{category.categoryName}</h3>
              <button onClick={() => removeCategory(category.id)} className='btn '><i className='fa-solid fa-trash text-danger'></i></button>
            </div>

          <Row>
            {
              category?.allVideos?.length>0?category.allVideos.map(card=>(
                <Col  sm={12} draggable  onDragStart={e=>VideodragStarted(e,card.id,category.id)}>
              <VideoCard video={card} insideCategory={true}/>
              </Col>
              )):null
              
            }
          </Row>

          </div>
        )) : <p className='text-danger fw-bolder'>Nothing to display</p>

      }
    </>
  )
}

export default Category