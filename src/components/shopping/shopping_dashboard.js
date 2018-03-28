import React, { Component } from 'react';
import ShoppingFooter from '../shopping/shopping_footer';
import ShoppingHeader from '../shopping/shopping_header';
import ShoppingSearchBar from '../shopping/shopping_search_bar';

class ShoppingDashboard extends Component {
  render () {
    return (
      <div>
        <ShoppingHeader />
        <ShoppingSearchBar />
        <ShoppingFooter />
      </div>
    );
  }
}

export default ShoppingDashboard;