import React from 'react';
import './App.css';
import './components/Grid.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Profile from "./components/profile/Profile";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <div className="container">
          <div className="main-container">
            <NavBar />
            <main className="main">
              <Route path="/dialogs"
                     render={() => <DialogsContainer />}/>
              <Route path="/profile" 
                     render={() => <Profile />} />
              <Route path="/users" 
                     render={() => <div>Users</div>} />
              <Route path="/news" component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/settings" component={Settings}/>
            </main>
          </div>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
