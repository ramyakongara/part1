import logo from './logo.svg';
import './App.css';
const Hello = (props) => {
  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  )
}
function App() {
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Peter'
  const age = 10
  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
}
export default App;
