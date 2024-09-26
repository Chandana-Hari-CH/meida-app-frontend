import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { getAllUploadAPI, getCategory, updateCategory } from '../../services/allAPI.js'
import VideoCard from './VideoCard.jsx'

 function View({uploadVideoResponse},{setdropVideoResponse}) {



  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)

  useEffect(() => {
    getUploadVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

  const getUploadVideos = async () => {
    const result = await getAllUploadAPI()
    //console.log(result)
    if (result.status == 200) {
      setAllVideos(result.data)
    } else {
      setAllVideos([])
      console.log("API FAILED")

    }

  }
  //console.log(allVideos);

  const videodragOver=(e)=>{
    e.preventDefault()
  }

  const videoDropped = async(e)=>{
    const{videoid,categoryId}=JSON.parse(e.dataTransfer.getData("Data"))
    //console.log(videoid,categoryId);

    const{data}=await getCategory()
    //console.log(data);
    
    const selectedCategory=data.find(item=>item.id==categoryId)
    //console.log(selectedCategory);
    
    let result=selectedCategory.allVideos.filter(video=>video.id!==videoid)
    //console.log(result);
    let{id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    console.log(newCategory);
    const res=await updateCategory(categoryId,newCategory)
    setdropVideoResponse(res)
    
    
    
  }

  return (
    <div>
      <Row droppable='true' onDragOver={e => videodragOver(e)} onDrop={e => videoDropped(e)}>
  {allVideos?.length > 0 ? allVideos.map(video => (
    <Col key={video.id} style={{ marginLeft: '100px' }} sm={12} md={6} lg={4} xl={3}>
      <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse} />
    </Col>
  )) : <p>Nothing to display</p>}
</Row>

    </div>
  )
}

export default View