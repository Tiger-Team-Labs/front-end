//import react
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// bring pages Home
import Home from '../../pages/Home'
// import Post
import Post from '../../pages/Post';
import EditPost from '../EditPost';
// bring pages layout
import Layout from '../Layout'
// Loading pages
import Loading from '../Loading';
// import error NotFound pages
import NotFound from '../NotFound'

//create and export App component
export default function App() {
  return (
  <BrowserRouter>
    <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Loading}/>
          <Route exact path="/posts" component={Post}/>
          <Route exact path="/posts/:post_id/edit" component={EditPost}/>
          <Route component={NotFound} />
        </Switch>
    </Layout>
  </BrowserRouter>
  );
}

