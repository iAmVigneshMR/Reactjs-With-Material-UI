import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./css/posts.css";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm ] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data))
        .catch(err => console.log('error', err))
    }, []);
    // console.log(posts);
    return (
        <Fragment>
        <div id="App">
        <header className="App-header">
            <h2 className="display-1">Posts</h2>
        </header>
        <div className=" bg-gray-200">
        <div className="container flex justify-center items-center">
            <div className="relative w-full"> 
            <input type="text" className="h-14 w-full pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none" 
            style={{margin: "12px 129px"}} 
            type="search"
            placeholder="Search by Title"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            />
            </div>
        </div>
        </div>
        <div className="user-container">
            {posts && posts.length > 0 ? posts
            .filter(
                search =>{
                  if (searchTerm === "") {
                    return search;
                  }
                  else if(search.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return search;
                  }
                }
              )
            .map((val,i) =>
                <div key={val.id} className="info-item">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="px-6 py-4 flex-1">
                    <div className="font-bold text-xl mb-2">{ val.title.slice(0,12) }</div>
                    <p className="text-gray-700 text-base">
                    { val.body.slice(0,100) }
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Posts</span>
                </div>
                <Link to={ `/details/${val.id}` } title="view post" className="bg-blue-600 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:bg-yellow-600 shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                <i className="far fa-eye"></i> View Post
                </Link> <br /><br />
            </div>
            </div>
            ): null }
            </div>
            </div>
        </Fragment>
    )
}

export default Posts
