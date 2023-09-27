import { useState } from 'react'
import Display from './Components/Display';
import Search from './Components/Search';
import PersonForm from './Components/PersonForm';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setNewSearch] = useState('');

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