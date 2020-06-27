import React from 'react';
import GroceryList from './components/GroceryList';
import './App.css';

const Header = ({ title }) => <header className="App-header">{title}</header>;
const Footer = () => <footer> Made with React </footer>;

function App() {
  return (
    <div className="App">
      <Header title="Some Random Basket App" />
      <GroceryList />
      <Footer />
    </div>
  );
}

export default App;
