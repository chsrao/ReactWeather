'use strict';
var React = require('react');

var WeatherForm = React.createClass({
    /**
     * onclick of the button or onsubmit of the form, handlesubmit will be called which
     * gets the value from textbox and passes it on to the parent container WEATHER's
     * handleCitySearch() through the onCitySearch() property which will set the state of the variable
     * */
    handleSubmit: function (e) {
        e.preventDefault();
        var location = this.refs.location.value;

        if (location.length) {
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div align="center">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="location"/><br/>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;