
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgest from './Widgest';
function App() {
  return (
    <>
      <div className='twitterMain'>
        <Sidebar />
        <Feed />
        <Widgest />
      </div>
    </>
  );
}

export default App;
