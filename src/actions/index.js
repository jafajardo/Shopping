import axios from 'axios';
import _ from 'lodash';

import {
  FETCH_FILTERED_INVENTORY,
  FETCH_ITEM
} from '../actions/types';

const inventory = [
  {
    id: '9042CA03-1F32-43B5-967B-8DC516D48495',
    name: 'IPhone 8',
    category: ['Electonic', 'Devices', 'Gadgets', 'Phones'],
    brand: 'Apple',
    color: 'Gold',
    image: '',
    price: '999',
    stock: 10
  },
  {
    id: 'D9E02C43-B3A7-4E3D-A621-E14CC4C371F0',
    name: 'Thinkpad T470s',
    category: ['Electronic', 'Devices', 'Computer'],
    brand: 'Lenovo',
    color: 'Black',
    image: '',
    price: '2500',
    stock: 5
  },
  {
    id: 'C6D216DE-3AEF-40A1-8657-8A0A7AE18C29',
    name: 'Longsleeve Shirt',
    category: ['Clothing'],
    brand: 'Esprit',
    color: 'White',
    image: '',
    price: '20',
    stock: 100
  },
  {
    id: 'D316910A-43C4-48B1-A065-EAA0717A0A0F',
    name: 'Nikon 55mm Micro-Nikkor',
    category: ['Photography', 'Lens', 'Gadgets'],
    brand: 'Nikon',
    color: 'Black',
    image: 'https://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-fTYlSZPBjlMhlFa1VHARsAMnUXrAm75XoOcxCN0T_jE6yU8osFh6b8nFT9EvwyJk=/Views/1442_Micro-NIKKOR-55mm-f-2.8_front.png',
    price: '150',
    stock: 2
  }
]

export function searchInventory(search) {
  return (dispatch) => {
    const keywords = search.split(',');

    let searchList = [];
    if (keywords && keywords.length > 0) {
      
      const filteredOnBrand = inventory.filter(item => {
        return keywords.some(keyword => {
          return item.brand.toLowerCase().includes(keyword.toLowerCase())
        })
      })

      const filteredOnName = inventory.filter(item => {
        return keywords.some(keyword => {
          return item.name.toLowerCase().includes(keyword.toLowerCase())
        })
      })

      const filteredOnCategory = inventory.filter(item => {
        return keywords.some(keyword => {
          return item.category.some(category => {
            return keyword.toLowerCase().includes(category.toLowerCase())
          })
        })
      })

      searchList = _.union(filteredOnBrand, filteredOnName, filteredOnCategory);
    }

    dispatch({
      type: FETCH_FILTERED_INVENTORY,
      payload: searchList
    })
  }
}

export function queryItem(id) {
  return (dispatch) => {

    let item = {}
    if (id) {
      item = inventory.find(item => {
        return item.id == id
      })
    }

    dispatch({
      type: FETCH_ITEM,
      payload: item
    })
  }
}