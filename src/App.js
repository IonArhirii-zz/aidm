import React, {Suspense} from 'react';
import './App.css';
import './components/Grid.css';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/Preloader";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {withSuspense} from "./hoc/withSuspense";
import ProfileContainer from "./components/profile/ProfileContainer";

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
// const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));

class App extends React.Component {
  // catchAllUnhandledErrors = (reason, promise) => {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert('some error');
    // alert(promiseRejectionEvent);
  };
  
  componentDidMount() {
    this.props.initializeApp();  
    
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    /*window.addEventListener('unhandledrejection', function(promiseRejectionEvent) {
      // handle error here, for example log
    })*/
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
              <Switch>
                <Route exact path="/" 
                       render={() => <Redirect to={'/profile'} />}/>
                <Route path="/dialogs"
                       render={withSuspense(DialogsContainer)}/>
                <Route path="/profile/:userId?"
                       // render={withSuspense(ProfileContainer)}/>
                       render={() => <ProfileContainer/>}/>
                <Route path="/users"
                       render={() => <UsersContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/login"
                       render={() => <Login/>}/>
               <Route path="*"
                      render={() => <div>404 PAGE NOT FOUND</div>}/>
              </Switch>
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
