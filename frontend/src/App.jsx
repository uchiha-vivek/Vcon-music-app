
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';


function App(){


  return (

    <>


    <div className='w-screen h-screen ' >
    <BrowserRouter>
       
       <Routes>

        <Route path='/login' element={<Login/>} ></Route> 


       </Routes>
    
    </BrowserRouter>

    </div>
    
     
    
    </>
  )
}

export default App;