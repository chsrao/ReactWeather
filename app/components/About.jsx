var React = require('react');

/*var About = React.createClass({
    render: function () {
        return (
            <div>About component</div>
        );
    }
});*/

/**
 * The below is an example of stateless functional components.
 * for this to work, it should NOT do other than render function
 * */
var About = () => {
    return (
        <h3>About component</h3>
    );
};

module.exports = About;