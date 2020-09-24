//import react
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// bring pages Home
import Home from '../../pages/Home'
// bring pages layout
import Layout from '../Layout'
// import error NotFound pages
import NotFound from '../NotFound'

//create and export App component
export default function App() {
  return (
  <BrowserRouter>
    <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route component={NotFound} />
        </Switch>
    </Layout>
  </BrowserRouter>
  );
}

