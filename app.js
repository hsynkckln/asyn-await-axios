import axios from "axios";

async function getData(number){
    const {data:users}=await axios("https://jsonplaceholder.typicode.com/users/"+number)

    const {data:posts}=await axios("https://jsonplaceholder.typicode.com/posts?id="+number)


    console.log("users",users)
    console.log("posts",posts);

    
}

export default getData;