import React from "react";
import s from './MyPost.module.css'
import Post from "./Post/Post";
const MyPost = (props) => {
    let postsElement = props.posts.map(p=><Post message={p.message} key={Post.id}/>);
    let newPostElement= React.createRef();
    let onAddPost = () =>{
        props.addPost();
    }
    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (<div className={s.log}>
           <h3> My posts</h3>
        <div className={s.post}>
            <div>
            <textarea className={s.text} onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}/>
        </div>
            <div>
            <button onClick={onAddPost} className={s.mypost}>Add Post</button>
        </div>
        </div>
        <div className={s.posts}>
           {postsElement}
        </div>
        </div>
)
}
export default MyPost;