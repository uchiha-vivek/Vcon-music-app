

 
import logo from '../assets/logo.jpeg'
import TextInput from '../components/TextInput/TextInput'
import PasswordInput from '../components/TextInput/PasswordInput'

function Login({}){

// javascript function
console.log(logo)

return (

    <>
          
           <div className="w-full h-full flex flex-col items-center  ">
                 <div className='pt-10 pb-10  border-b border-solid border-gray-200 w-full justify-center flex '   >
                 <img src={logo}  width='120' className='rounded-full'  />
                 </div>
                  
             <div className='w-1/4 py-6 flex flex-col items-center'>
             <div className='font-semibold  mb-10 '>
                To continue, Login with Vcon
             </div>
                <TextInput label="Email Id or username " placeholder="Email Id or username"  className="my-6"  />
                <PasswordInput label="Enter your password" placeholder="Strong password needed for strong people"  />
                <div className=' border-b border-solid border-gray-200 w-full items-center flex justify-end mt-10'>
                <button className='bg-green-300 text-lg font-semibold p-3 px-10 rounded-full  ' >Login</button>
                </div>
                <div className='w-full border border-solid border-gray-200 ' >  </div>
                <div className='my-6 text-lg font-bold ' >
                     Dont have an Account
                </div>
                <div className='border py-4  rounded-full mt-5 border-gray-400  items-center flex w-full justify-center  ' >
                          Sign Up !
                </div>
                 
             </div>
                 

           </div>


    </>
)


}

 export default Login