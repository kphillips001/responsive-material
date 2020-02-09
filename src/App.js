import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import PplCard from './PplCard'; 

function App() {
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      setUsers(
        await fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(res => res.data)
        .catch(err => console.log(err))
      )
    }
    fetchData();
  } 
  , [])

  return (
    <div className="App">
      <h3>Responsive Material UI</h3>
      <Grid
        container
        spacing={10}
        style={{padding: '24px'}}
        >
       {users.map( users => 
        <Grid
          key={users.id}
          item
          xs={12} sm={6} md={4} lg={4} xl={3}
        >
          <PplCard
          key={users.id} 
          email={users.email}
          firstname={users.first_name}
          lastname={users.last_name}
          avatar={users.avatar}
          />
        </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
