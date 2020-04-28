import React from 'react';
import './App.css';
import './components/Grid.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className="container">
          <div className="main-container">
            <NavBar />
            <main className="main">
              <Route path="/dialogs"
                     render={() => <DialogsContainer />}/>
              <Route path="/profile/:userId?" 
                     render={() => <ProfileContainer />} />
              <Route path="/users" 
                     render={() => <UsersContainer />} />
              <Route path="/news" component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/login"
                     render={() => <Login />} />
            </main>
          </div>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
