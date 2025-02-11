import React, { useRef } from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    // Используем useRef вместо createRef для функциональных компонентов
    const newPostElement = useRef();

    const postsElement = props.posts.map(p => (
        <Post message={p.message} key={p.id} />
    ));

    const onAddPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.log}>
            <h3>Мои посты</h3>
            <div className={s.post}>
                <div>
                    <textarea
                        className={s.text}
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost} className={s.mypost}>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPost;