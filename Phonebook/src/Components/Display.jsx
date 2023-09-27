const Display = ({search, persons}) => {
    if (search === "") {
      return persons.map(person => <li key={person.id}>{person.name} {person.number}</li>);
    }
    
    const firstNameMatches = persons.filter(person => person.name.toUpperCase().startsWith(search.toUpperCase()))
    .map(person => <li key={person.id}>{person.name} {person.number}</li>);
  
    const lastNameMatches = persons.filter(person => person.name.slice(person.name.indexOf(' ') + 1).toUpperCase().startsWith(search.toUpperCase()))
    .map(person => <li key={person.id}>{person.name} {person.number}</li>);
  
    const results = firstNameMatches.concat(lastNameMatches);
  
    if (results.length === 0) {
      return <p>No results found</p>
    }
  
    return results;
  }

  export default Display;