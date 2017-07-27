import React, { Component } from 'react';
import Splash from './components/splash';
import Calendar from './components/calendar';
import Weather from './components/weather';
import Whiteboard from './components/whiteboard';
import TodoContainer from './components/todo-container';
import Chat from './components/chat';

class App extends Component {
  state = {
    email: "familyhub123@gmail.com",
    showSplash: true,
    emailInput: false
  }

  componentDidMount = () => {
    this.loadState();
  }

  updateEmailText = (newEmail) => {
    this.setState({email: newEmail});
  }

  saveEmail = () => {
    this.setState({showSplash: false, emailInput: true});
    this.saveState();
  }

  saveState = () => {
    localStorage.setItem('famhub-email', this.state.email);
  }

  loadState = () => {
   const email = localStorage.getItem('famhub-email');
   if (email !== null) {

     this.setState({
       email: email
     });
   }

   return;
 }


  render() {
    console.log("rendering components");
    return (
      <div>
        <div id="splash" className="splash">
          <Splash
            defaultEmail={this.state.email}
            showSplash={this.state.showSplash}
            updateEmailText={this.updateEmailText}
            saveEmail={this.saveEmail}
          />
        </div>


        <div id="calendar" className="calendar">
          <Calendar
            email={this.state.email} emailInput={this.state.emailInput}
          />
        </div>
        <div id="weather" className="weather">
          <Weather />
        </div>

        <div id="whiteboard" className="whiteboard">
          <Whiteboard />
        </div>

        <div id="todo" className="todo">
          <TodoContainer/>
        </div>
        <div id="chat" className="chat">
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;