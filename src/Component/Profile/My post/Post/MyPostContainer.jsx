import MyPost from "../MyPost";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps =(state)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        updateNewPostText:(text)=>{
            let action = updatePostTextActionCreator(text);
            dispatch(action);
        },
        addPost:()=>{
            dispatch( addPostActionCreator ())
        }

    }
}
const MyPostContainer =connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;