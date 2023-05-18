//import './App.css';

import Blog from "./Example/Blog";

const App = () => {
  return (
    <Blog posts={[
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ]}/>
  );
}
export default App;
