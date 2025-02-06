import Dialogs from "../Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
return{
    messagesPage:state.messagesPage,
    isAuth:state.auth.isAuth,
};
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{dispatch(updateNewMessageBodyCreator(body));},
        sendMessage:()=>{dispatch(sendMessageCreator());}
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);
export default DialogsContainer;