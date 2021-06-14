import { React } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TokenContextProvider } from './components/TokenContextProvider';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className="App">
      <Router>
        <TokenContextProvider>
          <Switch>

            <Route exact path="/register">
              <RegisterPage/>
            </Route>

            <Route exact path="/login">
              <LoginPage/>
            </Route>

          </Switch>
        </TokenContextProvider>
      </Router>
    </div>
  );
}

export default App;
