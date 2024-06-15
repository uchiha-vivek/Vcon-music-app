

import logo from '../assets/logo.jpeg'

function Login(){

// javascript function
console.log(logo)

return (

    <>
          
           <div className="w-full h-full flex flex-col items-center  ">
                 <div className='pt-10 pb-10  border-b border-solid border-gray-200 w-full justify-center flex '   >
                 <img src={logo}  width='120' className='rounded-full'  />
                 </div>
                  

                 

           </div>


    </>
)


}

 export default Login