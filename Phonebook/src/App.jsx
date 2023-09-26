import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: "084 499 2473",
      id: 1
    },
    {
      name: 'Ben Smith',
      number: "068 147 3486",
      id: 2
    }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = ({target}) => {setNewName(target.value)};
  const handleNumberChange = ({target}) => {setNewNumber(target.value)};

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
      <form onSubmit={handleSubmit}>
        <div>name: <input onChange={handleNameChange} value={newName}/></div>
        <div>number: <input onChange={handleNumberChange} value={newNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style={{listStyleType: "none", padding: "0px"}}>
        {persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App