import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase from '../../controller/firebase'
import Login from '../Login'
import Register from '../Register'
import Home from '../Home';
import Purchase from '../Purchase'

const App = () => {
  
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })


  return firebaseInitialized !== false ? (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/purchase" component={Purchase} />
    </Switch>

  ) : <div id="loader">Loading</div>
}

export default App;