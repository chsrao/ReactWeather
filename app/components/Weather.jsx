var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;
        this.setState({isLoading: true});
        debugger;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temperature: temp,
                isLoading: false
            });

        }, function (errorMsg) {
            that.setState({isLoading: false});
            alert('Error occured: ' + errorMsg);
        });
    },
    render: function () {
        var {isLoading, location, temperature} = this.state;
        /*var temperature = this.state.temperature;
         var location = this.state.location;*/

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather</h3>
            } else if (temperature && location) {
                return <WeatherMessage location={location} temperature={temperature}/>
            }
        }

        return (
            <div align="center">
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage ()}
            </div>
        );
    }
});

module.exports = Weather;