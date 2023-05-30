
import { Provider } from 'react-redux';
import store from './Example/store';
import './parent.css'
import CounterComponent from './Example/CounterComponent';

const App = () => {
  
  return (
    <div className="App">
    <Provider store={store}>
      <CounterComponent />  
    </Provider>
  </div>
  )
}
export default App;
