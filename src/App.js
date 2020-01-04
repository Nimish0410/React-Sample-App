import React, { Component } from 'react';
import './App.css';
import CardList from './components/cardList/cardList.component'
import  { SearchField } from './components/searchField/searchField.component'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchValue: '' // lifting state up as CardList component needs the state and not keeping in searchField component
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }
  handleChange = (evt) => {
    const searchValue = evt.target.value;
    this.setState({searchValue})
  }
  /* always provide key to the elements returned from the list, it helps react identify what 
  element chnaged and does not rerender the entire list but only the chnaged element */
  render() {
    const {monsters, searchValue} = this.state;
    const filteredMonsters = monsters.filter((monster)=> monster.name.toLowerCase().includes(searchValue.toLowerCase()))
    return (
    <div className="App">
    <h1>Monster Rolodex</h1>
    <SearchField placeholder = "search monsters" handleChange = {this.handleChange}/>
    <CardList monsters= {filteredMonsters}/>
    </div>
    )
}
}

export default App;
