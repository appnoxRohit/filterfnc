
import './App.css';
import Header from './Header';
import Body from './Body';
import Sidebar from './Sidebar';
import { DataProvider } from './Context';
function App() {
  return (
    <div className="App">
      <Header/>
      
   <DataProvider> 
     <div className='flex'>
      <Sidebar className=' flex '/>
      <Body className=''/>
      </div>
 </DataProvider>
      
    </div>
     
  );
}

export default App;
