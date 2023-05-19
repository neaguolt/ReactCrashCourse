import ListItem from "./Example/Listitem";

//import './App.css';
function NumbersList (props){
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number.toString()} />
      )}
    </ul>
  )
}

const App = () => {

  return (
    <NumbersList numbers= {[1,2,3,5]}/>
  )
}
export default App;
