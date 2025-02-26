import './App.css';
import React, {Component} from "react";
import Nav from './Component/Nav/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Component/Music/Music";
import News from "./Component/News/News";
import Settings from "./Component/Settings/Settings";
import DialogsContainer from "./Component/Dialogs/Message/DialogsContainer";
import UsersContainer from "./Component/Users/usersContainer";
import ProfileContainer, {withRouter} from "./Component/Profile/ProfileContainer";
import HeaderContainer from "./Component/Header/HeaderContainer";
import LoginPage from "./Component/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Component/common/Preloader/Preloader";



class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
        return <Preloader/>
        }
        return (<BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='dialogs/*'
                                   element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId?'
                                   element={<ProfileContainer/>}/>
                            <Route path="/music"
                                   element={<Music/>}/>
                            <Route path="/news"
                                   element={<News/>}/>
                            <Route path="/settings"
                                   element={<Settings/>}/>
                            <Route path="/users"
                                   element={<UsersContainer/>}/>
                            <Route path="/login"
                                   element={<LoginPage/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>


        )
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
    withRouter,
    connect (mapStateToProps,{initializeApp}))(App);
