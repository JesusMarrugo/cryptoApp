import React from 'react';
import '../assets/styles/globalStyles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '../components/general/Layout';
import { Home } from '../pages/Home';
import { CryptoCurrencyDetail } from '../pages/CryptoCurrencyDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/detail/:id" component={CryptoCurrencyDetail} />
            <Route path="/" component={Home} />
            
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
