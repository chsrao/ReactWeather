var React = require('react');
var {Link, IndexLink} = require('react-router');

/**
 * IndexLink ensures not every hyperlink is styled with the active class and only the active reference found in the hash url (#aboutus)
 * activeClassName sets the class specified in it. activeStyle is giving inline styles. make sure to give the CSS property name
 * as javascript keys and not plain css properties. Ex. fontWeight and not font-weight
 * */

/*var Nav = React.createClass({
    render: function () {
        return (
            <div>
                <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>React Weather</IndexLink> &nbsp;
                <Link to='/aboutus' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link> &nbsp;
                <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link> &nbsp;
                <span>Srinivas</span>
            </div>
        );
    }
});*/

var Nav = () => {
    return (
        <div>
            <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}}>React Weather</IndexLink> &nbsp;
            <Link to='/aboutus' activeClassName='active' activeStyle={{fontWeight:'bold'}}>About</Link> &nbsp;
            <Link to='/examples' activeClassName='active' activeStyle={{fontWeight:'bold'}}>Examples</Link> &nbsp;
            <span>Srinivas</span>
        </div>
    );
}

module.exports = Nav;