import './App.css';
import React from "react";
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


const App = () => {
    return (<BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer />
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='dialogs/*'
                               element={<DialogsContainer/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/profile/:userId?'
                               element={<ProfileContainer/>}/>
                    </Routes>
                    <Routes>
                        <Route path="/music"
                               element={<Music/>}/>
                    </Routes>
                    <Routes>
                        <Route path="/news"
                               element={<News/>}/>
                    </Routes>
                    <Routes>
                        <Route path="/settings"
                               element={<Settings/>}/>
                    </Routes>
                    <Routes>
                        <Route path="/users"
                               element={<UsersContainer/>}/>
                    </Routes>
                    <Routes>
                        <Route path="/login"
                               element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
