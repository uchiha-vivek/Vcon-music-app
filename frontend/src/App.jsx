
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';


function App(){


  return (

    <>


    <div className='w-screen h-screen ' >
    <BrowserRouter>
       
       <Routes>
         
        <Route path='/login' element={<Login/>} ></Route> 
        <Route path='/signup'  element={<Signup/>} ></Route>


       </Routes>
    
    </BrowserRouter>

    </div>
    
     
    
    </>
  )
}

export default App;