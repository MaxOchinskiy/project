import MyPost from "../MyPost";
import {addPostActionCreator} from "../../../../redux/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps =(state)=>{
    return {
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        addPost:(newPostText)=>{
            dispatch( addPostActionCreator (newPostText))
        }

    }
}
const MyPostContainer =connect(mapStateToProps,mapDispatchToProps)(MyPost);
export default MyPostContainer;