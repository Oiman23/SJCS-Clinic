import axios from 'axios';
import './App.css';
import {Link, Outlet} from 'react-router-dom';
import Navigation from './components.js/Navigation';
function App() {
  const apiCall = () => {
    axios.get('http://localhost:4000/').then((data)=>{
      console.log(data);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
          {/* <button onClick ={apiCall}> make API Call </button> */}
          <Navigation/>
      </header>
    </div>
  );
}

export default App;
