import './App.css';
import ButonCSH from './Example/ButonCSH';
import DivScrollable from './Example/DivScrollable';

const App = () => {
  return (
    <>
      <ButonCSH name="Click Me"/>
      <DivScrollable numElements= {5}  text= "This is some content that is long" />
    </>
  );
}

export default App;
