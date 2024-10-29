
import './App.css';
import Header from './Header';
import Body from './Body';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app relative">
      <Header/>
      
    
     <div className='flex relative  '>
      <Sidebar className=' flex '/>
      <Body className=''/>
      </div>
 
      
    </div>
     
  );
}

export default App;
