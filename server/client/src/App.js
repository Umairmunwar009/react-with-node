import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleButtonClick}>Sing in with google</button>
      </header>
    </div>
  );
};
function handleButtonClick() {
  console.log('Button clicked');
  fetch('http://localhost:5000/auth/google', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log('Error:', error));
}

export default App;
