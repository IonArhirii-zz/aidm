import React, {Suspense} from 'react';
import './App.css';
import './components/Grid.css';
import {Route, withRouter} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/Preloader";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

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
                     render={withSuspense(DialogsContainer)}/>
              <Route path="/profile/:userId?"
                     render={withSuspense(ProfileContainer)}/>
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

let AppContainer =  compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
};

export default SamuraiJSApp;
