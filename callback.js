// setTimeout(()=>{
//     console.log("asdasd")
// },2000)

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>data.json())
// .then(data2=>{
//     console.log(data2)
// })

// async function getData(){
//     var {data:users}= await axios("https://jsonplaceholder.typicode.com/users")

//     var {data:posts}= await  axios("https://jsonplaceholder.typicode.com/posts/1")

//     console.log("users",users)
//     console.log("posts",posts)
// }
// getData()

const getUsers=()=>{
    return new Promise(async(resolve,reject)=>{
        const {data}=await axios("https://jsonplaceholder.typicode.com/users")
        
        
        reject("bir sorun oluştu")
    })
}

const getPosts=(post_id)=>{
    return new Promise(async(resolve,reject)=>{
        const {data}=await axios("https://jsonplaceholder.typicode.com/posts/"+post_id)
        
        resolve(data)
    })
}

(async()=>{

    try{
        const users= await getUsers()
        // .then((data)=>console.log(data))
        // .catch((e)=>console.log(e))
        
    
      const posts= await getPosts(1)
        // .then((data)=>console.log(data))
        // .catch((e)=>console.log(e))
    
        console.log(users);
        console.log(posts);
    }catch(e){
        console.log(e)
    }
  
})()
