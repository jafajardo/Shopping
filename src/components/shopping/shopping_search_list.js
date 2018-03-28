import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class ShoppingSearchList extends Component {
  renderSearchedItems = () => {
    const { searched_inventory } = this.props;

    return (
      searched_inventory.map((searchedInventory, index) => {
        return (
          <Link key={index} to={`shoppingItem?z=${searchedInventory.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{searchedInventory.name}</h5>
            </div>
            <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
            <small>{`$${searchedInventory.price}`}</small>
          </Link>
        )
      })
    )
  }

  render () {
    return(
      <div className="list-group">
        {this.renderSearchedItems()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searched_inventory : state.shoppingSearchedInventory.searched_inventory
  }
}

export default connect(mapStateToProps, null)(ShoppingSearchList);