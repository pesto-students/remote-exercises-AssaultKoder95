import React, { Component } from 'react';
import './index.css';

const ListItem = ({ name, count }) => (
  <li>
    {name} : {count}
  </li>
);

class AddItem extends Component {
  state = {
    item: '',
  };

  updateCurrentItem(item) {
    this.setState({ item });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.item);
  }

  render() {
    return (
      <form className="addItemForm" onSubmit={(e) => this.onSubmit(e)}>
        <input type="text" placeholder="Add Item" onChange={(e) => this.updateCurrentItem(e.target.value)} />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  state = {
    items: [
      { name: 'orange', count: 1 },
      { name: 'radish', count: 1 },
      { name: 'apple', count: 1 },
    ],
  };

  addItem(value) {
    const filteredItem = this.state.items.filter((item) => item.name === value);

    let updatedItems;

    if (!filteredItem.length) {
      updatedItems = [...this.state.items, { name: value, count: 1 }];
    } else {
      updatedItems = this.state.items.filter((item) => item.name !== value);
      const updatedItem = Object.assign({}, filteredItem[0]);
      updatedItem.count += 1;
      updatedItems.push(updatedItem);
    }

    this.setState({ items: updatedItems });
  }

  clearItems(e) {
    e.preventDefault();
    this.setState({ items: [] });
  }

  render() {
    return (
      <div>
        <AddItem addItem={this.addItem} />
        <ul>
          {this.state.items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </ul>
        <button onClick={(e) => this.clearItems(e)} style={{ display: this.state.items.length ? 'block' : 'none' }}>
          Clear All
        </button>
      </div>
    );
  }
}

export default GroceryList;
