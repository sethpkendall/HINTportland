import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Blog from './components/blog';
import Quadrants from './containers/quadrants';
import QuadrantDetail from './containers/quadrant_detail';
import ReviewDetail from './components/reviews';

// import Detail from './containers/review_detail';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Quadrants} />
        <Route path='blog' component={Blog} />
        <Route path='quadrants' component={Quadrants} />
        <Route path='/:title' component={QuadrantDetail} />
        <Route path='/:quadrant/:key' component={ReviewDetail} />
    </Route>
);