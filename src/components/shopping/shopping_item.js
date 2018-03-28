import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../../actions';

class ShoppingItem extends Component {
  componentDidMount = () => {
    const { z } = this.props.location.query
    
    if (z) {
      this.props.queryItem(z);
    }
  }

  render () {
    const { queriedItem } = this.props;
    
    if (queriedItem) {
      return(
        <div className="card">
          <img className="card-img-top" src={queriedItem.image} alt={queriedItem.name} />
          <div className="card-body">
            <h5 className="card-title">{queriedItem.name}</h5>
            <p className="card-text">{queriedItem.brand}</p>
            <Link to="shoppingCart">
              <button>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </Link>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="h-100 d-flex align-items-center">
          <i className="fas fa-spinner fa-spin fa-5x d-flex align-item-center w-100"></i>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    queriedItem: state.shoppingItem.queriedItem
  }
}

export default connect(mapStateToProps, actions)(ShoppingItem);