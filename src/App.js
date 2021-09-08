import { Switch, Route } from 'react-router-dom';

import { RoutePage } from './pages/RoutePage';
import { FetchedRoute } from './components/FetchedRoute';
import { BuyRoute } from './components/BuyRoute';


function App() {
  return (
    <>
      <Switch>
          <Route path = '/r/:id' component = {RoutePage}/>
          <Route path = '/buy_route/:id' component = {BuyRoute}/>
          <Route path = '/tracks/:id' component = {FetchedRoute}/>
      </Switch>    
    </>
  );
}

export default App;