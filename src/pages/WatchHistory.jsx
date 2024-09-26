import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getHistory } from '../../services/allAPI'

function WatchHistory() {

  

  const [history,setHistory]=useState([])
  useEffect(()=>{
  getVideoHistory()
  },[])

  const getVideoHistory= async()=>{
    const result= await getHistory()
    console.log(result);
    
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API FAILED");
      console.log(result.message); 
    }
  }
  console.log(history);
  
  const removeHistory= async(id)=>{
    await deleteHistory(id)
    getVideoHistory()
  }

  return (
    <>
         <div className="container mb-5 mt-5 d-flex justify-content-between">
        
          <h2>Watch History</h2>
        
        <Link
          to={'/home'}
          style={{ textDecoration: 'none', color: 'blueviolet', fontSize: '30px' }} 
        >
          Back to home<i className="fa-solid fa-rotate-left mx-2"></i>
        </Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
             { 
             history?.length>0?history.map((video,index)=>(
              <tr>
                <td>{index+1}</td>
                <td>{video?.caption}</td>
                <td><a href={video.link} target='_blank'>{video?.link}</a></td>
                <td>{video.timeStamp}</td>
                <td><button onClick={()=>removeHistory(video.id)} className='btn'><i className="fa-solid fa-trash-can" style={{color: "#f00505"}}></i></button></td>
              </tr> 
             )
             ):<p className='text-danger fw-bolder'>Nothing to display</p>
              
               }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory