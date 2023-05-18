//import './App.css';

import Post from "./Example/Post";

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
const content= posts.map((post) => 
  <Post key={post.id}
        id={post.id}    
        title={post.title}>
  </Post>
);
const App = () => {
  
  return (
    <div>{content}</div> 
  )
}
export default App;
