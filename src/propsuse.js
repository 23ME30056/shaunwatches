
import './App.css';
// props represent kind of an object passer
function Person(props) {

  return (
    <>
      <h1>Name:{props.name}</h1>
      <h2>LastName : {props.lastName}</h2>
      <h2>Age:{props.age}</h2>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <Person name='John' lastName='Mary' age = {30} />
      <Person name='aru' lastName='diti'  age = {40} />
    </div>
  );
}

  

export default App;
