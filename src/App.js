
import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://twitch.tv/twoliptv";
  // const person = {name: 'armani', age: 30}
  return (
    <div className="App">
      <div className="content">
      <h1>{title}</h1>
      <p>This was liked {likes} times!</p>
      {/* <p>{person}</p> */}
      <p>{10}</p>
      <p>{"hello world"}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random() * 10}</p>

      <a href={link}>Twitch</a>
      </div>
    </div>
  );
}

export default App;
