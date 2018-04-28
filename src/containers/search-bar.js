import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : ''}

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term : event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();

        //We need to fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }

   render () {
     return (
         <form className="form-inline mt-2" onSubmit={this.onFormSubmit}>
            <div className="form-group col-sm-10">
                <input 
                  placeholder="Get a five-day forecast in your favorite city"
                  value={this.state.term}
                  onChange={this.onInputChange}
                  className="form-control d-flex"
                  style={{width:'100%'}}>
                </input>      
            </div>  
            <button type="submit" className="btn btn-primary col-sm-2">Search</button>
         </form>    
     );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);