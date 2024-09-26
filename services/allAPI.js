import { commonAPI } from "./commonAPI"
import { server_url } from "./server_url"


//upload video api

export const uploadVideoAPI =async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

//getAllUpload videos API

export const getAllUploadAPI= async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,'')
}

//getVideo API

export const getVideoAPI= async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,'')
}

//deleteVideo API

export const deleteAPI = async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

// addVideo history

export const addHistory= async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)
   }
   
   // getVideo history

   export const getHistory= async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
   }

   // deleteVideo history

   export const deleteHistory= async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
   }
   
//    add category api

export const addCategory= async(category)=>{
 return await commonAPI("POST",`${server_url}/category`,category)
}

//  get category api

export const getCategory = async()=>{
    return await commonAPI("GET",`${server_url}/category`,"")
}

//  delete category api

export const deleteCategory= async(id)=>{
    return await commonAPI("DELETE",`${server_url}/category/${id}`,{})
}

// update category
export const updateCategory= async(id,categoryDetails)=>{
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}