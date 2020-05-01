import React from 'react';
import './App.css';
import './components/Grid.css';
import {Route, withRouter} from "react-router-dom";
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
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/Preloader";
import {initializeApp} from "./redux/appReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();    
  }
  
  render() {
    if (!this.props.initialized) {

      return <Preloader/>
    }
    return (
      <div className="wrapper">
        <HeaderContainer/>
        <div className="container">
          <div className="main-container">
            <NavBar/>
            <main className="main">
              <Route path="/dialogs"
                     render={() => <DialogsContainer/>}/>
              <Route path="/profile/:userId?"
                     render={() => <ProfileContainer/>}/>
              <Route path="/users"
                     render={() => <UsersContainer/>}/>
              <Route path="/news" component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/login"
                     render={() => <Login/>}/>
            </main>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps =(state) => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
