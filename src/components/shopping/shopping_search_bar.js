import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { browserHistory } from 'react-router';

class ShoppingSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywordSearch: ''
    }
  }

  handleSearchBarChange = (event) => {
    this.setState({
      keywordSearch: event.target.value
    })
  }

  handleSubmitButton = (event) => {
    event.preventDefault();
    this.props.searchInventory(this.state.keywordSearch);

    browserHistory.push('/shoppingSearchList');
  }

  render() {
    return(
      <form className="input-group">
        <input className="form-control" onChange={this.handleSearchBarChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmitButton}>
            <i className="fas fa-search"></i>
          </button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searched_inventory: state.shoppingSearchedInventory.searched_inventory
  }
}

export default connect(mapStateToProps, actions)(ShoppingSearchBar);