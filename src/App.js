import React from 'react';
import Header from './Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import TinderCards from './TinderCards';
import './App.css';
import SwipeButtons from './SwipeButton';
import ChatScreen from './ChatScreen';
import Chats from './Chats';

// All use default route at the last of the switch
function App() {
  return (
    <div className="App">
    
      <Router> 
        <Switch>
        <Route path="/chat/:person">
           <Header backButton="/chat" />
            <ChatScreen/>
            
          </Route>
          <Route path="/chat">
           <Header backButton="/" />
            <Chats/>
          </Route>
          <Route path="/">
            <Header />
              <TinderCards/>
              <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
