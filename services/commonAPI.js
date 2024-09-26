import axios from "axios"



//req enganeya ponde nn create cheythu(request configuration)
export const commonAPI =async(httpMethod,url,reqBody)=>{
    let reqConfig={
        method:httpMethod,
        url,
        headers:{
            'Content-Type':'application/json'
        },
        data:reqBody
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}

