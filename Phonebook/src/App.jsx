import { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './Components/Display';
import Search from './Components/Search';
import PersonForm from './Components/PersonForm';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setNewSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = ({target}) => setNewName(target.value);
  const handleNumberChange = ({target}) => setNewNumber(target.value);
  const handleSearchChange = ({target}) => {setNewSearch(target.value)};

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.find(({name}) => name === newName) === undefined) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    } else {
      alert(`${newName} had already been added to the phonebook`);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search handleSearchChange={handleSearchChange} search={search} />

      <h2>Add new contact</h2>
      <PersonForm handleSubmit={handleSubmit} handleNameChange={handleNameChange} newName={newName} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <ul style={{listStyleType: "none", padding: "0px"}}>
        <Display search={search} persons={persons} />
      </ul>
    </div>
  )
}

export default App