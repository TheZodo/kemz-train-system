import logo from './logo.svg';
import './App.css';
import Auth from 'libs/components/auth'
import { Route, Switch } from 'react-router-dom';
import Landing from 'components/landing';
import Dashboard from 'components/dashboard';
import AuthProvider from 'libs/auth-react/components/auth-provider';


function App() {
  return (
    <Switch>
      <Route path='/'>
        <Auth
          landingComponent={<Landing />}
          dashboardComponent={<Dashboard />}
          logo={<img src='' className={'h-16 w-16 p-2'} alt='' />}
        />
      </Route>

    </Switch>
  );
}

export default App;
