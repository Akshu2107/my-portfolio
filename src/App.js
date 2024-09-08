import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className=" bg-gray-900 text-white">
      <div className=" bg-gray-900 text-white">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
