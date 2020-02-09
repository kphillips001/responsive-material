import React, {useState, useEffect} from 'react';
import './App.css';


function App() {
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      setUsers(
        fetch('https://reqres.in/api/users?page=2')
        .then(res=>res.json())
        .then(res=> console.log(res))
      )
    }
    fetchData();
  } 
  , [])

  return (
    <div className="App">
      <h3>Responsive Material UI</h3>
    </div>
  );
}

export default App;
