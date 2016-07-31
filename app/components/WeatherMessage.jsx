var React = require('react');

/*var WeatherMessage = React.createClass({

    render: function () {
        var {location, temperature} = this.props;
        return (
            <div align="center">
                <h3>Weather Report</h3>
                <p>Its {temperature} in {location}</p>
            </div>
        );
    }
});*/

// instead of passing props parameter we can directly assign
//using the destructing syntax as below
var WeatherMessage = ({location, temperature}) => {
    //var {location, temperature} = props;
    return (
        <div align="center">
            <h3>Weather Report</h3>
            <p>Its {temperature}F in {location}</p>
        </div>
    );
};

module.exports = WeatherMessage;