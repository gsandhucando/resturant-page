import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Info from './pages/Info';
import Menu from './pages/FoodMenu';
import Team from './pages/Team';
import Press from './pages/Press';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ResModal from './components/ResModal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class MainApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modale: false,
    }
    this.toggleRes = this.toggleRes.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  toggleRes = () => {
    this.setState({modale: true})
  }

  handleClose  = () => {
    this.setState({modale: false})
  }

  render() {
    return(
      <div>
      <Router>
      <ResModal open={this.state.modale} handleClose={this.handleClose}/>
      <Route path='/' render={({location})=> {
        return  <Nav nav={["Info", "Menu", "Team", "Press", "Reservations", "Contact"]} toggleRes={this.toggleRes} location={location}/>
      }}/>
        <Switch>
          <Route path='/' exact component={App} />
          <Route path='/info' component={Info} />
          <Route path='/menu' component={Menu} />
          <Route path='/team' component={Team} />
          <Route path='/press' component={Press} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Footer />
      </div>
    )
  }
}


ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
