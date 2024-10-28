
import './App.css';
import Header from './Header';
import Body from './Body';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      
    
     <div className='flex'>
      <Sidebar className=' flex '/>
      <Body className=''/>
      </div>
 
      
    </div>
     
  );
}

export default App;
