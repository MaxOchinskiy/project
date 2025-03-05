import './App.css';
import React, {Component} from "react";
import Nav from './Component/Nav/Nav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./Component/Music/Music";
import News from "./Component/News/News";
import Settings from "./Component/Settings/Settings";
import DialogsContainer from "./Component/Dialogs/Message/DialogsContainer";
import UsersContainer from "./Component/Users/usersContainer";
import ProfileContainer from "./Component/Profile/ProfileContainer";
import HeaderContainer from "./Component/Header/HeaderContainer";
import LoginPage from "./Component/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Component/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
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

        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(connect(mapStateToProps, {initializeApp}))(App)
const SamuraiJSApp =() =>{
    return <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
}
export default SamuraiJSApp

