import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText'>
      <div className='max-w-screen-xl mx-auto p-2'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
