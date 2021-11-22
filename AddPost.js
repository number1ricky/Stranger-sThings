import React, {useState} from "react";

const AddPosts = ({token}) => {
    const [postTitle, setPostTitle] = useState('')
    const [postDescription, setPostDescription] = useState('')
    const [postPrice, setPostPrice] = useState('')

    const addPost = async (event) => {
            event.preventDefault()
            fetch('https://strangers-things.herokuapp.com/api/2108-CSE-RM-WEB-PT/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                title: postTitle,
                description: postDescription,
                price: postPrice
            }
            })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
        }
       
      return <>
    <form className="addPostForm" onSubmit={addPost}>
    <div><input type="text"  value={postTitle} placeholder="Title*" onChange={(ev)=>{setPostTitle(ev.target.value)}}/> </div>
    <div><input type="text"  value={postDescription} placeholder="Description*" onChange={(ev)=>{setPostDescription(ev.target.value)}}/> </div>  
    <div><input type="text"  value={postPrice} placeholder="Price*" onChange={(ev)=>{setPostPrice(ev.target.value)}}/>  </div>                        
      <div><button type="submit">{`Add Post`}</button></div>
    </form>
    </>
}

export default AddPosts