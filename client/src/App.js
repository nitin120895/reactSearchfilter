import React from "react";
import ReactDOM from "react-dom";





function App() {
  const [people, setpeople] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);




  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  React.useEffect(() => {

    fetch("http://localhost:5000/api/viewusers")

      .then(res => res.json())
      .then(details =>

        setpeople(details.data.map(val => {
          return val.name;

        })
        )
      )

  }, [])

  React.useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);


  const Allnames = people.map(item => (
    <li>{item}</li>
  ))

  const searchresults = searchResults.map(item => (
    <li>{item}</li>
  ))

  return (
    <div className="App">
      <h1>search by name</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <h1>ALL NAMES</h1>

      <ul>
        {searchResults.length != 0 ? searchresults : Allnames}

      </ul>
    </div>
  );
}
export default App;