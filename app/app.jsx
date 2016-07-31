'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

/*
 var raoobj = { interest: 'bikes' };
 var {interest} = raoobj; //is equivalent to var interest = raoobj.interest;
 */

/**
 * Router needs a property called history which again expect hashHistory as parameter
 * Inside Router we need Route which needs a property path to which we will set the "/" the root of our application
 * component property determines the File which needs to be called for the "/" root
 * The property 'path' in the Route element refers how we will link from the other component or the url we will use to call
 * */
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Weather}/>
            <Route path='aboutus' component={About}/>
            <Route path='examples' component={Examples}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
