import React from "react";

const Messages = () => {
    return <>
        <nav className="headContainer">
        <h1 className='pageHead'>Welcome: </h1>
        </nav>
        <nav className="bodyContainer">
        {
            currentUser.messages.map((message) => {
            return  <div className='postContainer'>
                    <div key={message.id}>
                   <h1 className='messageTitle'>{message.title}</h1>
                   {/* <h3 className='messageDescription'>{message.description}</h3>
                   <h5 className='messageAuthorUsername'>Seller: {message.author.username}</h5>
                   <h4 className='messagePrice'>Price: {message.price}</h4>
                   <h4 className='messageLocation'>Price: {message.location}</h4> */}
                   </div></div>})

        }
        </nav>
        </>
}