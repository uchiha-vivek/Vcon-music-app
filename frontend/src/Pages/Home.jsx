
import logo from '../assets/logo.jpeg';
import IconInput from '../components/TextInput/IconInput';


function Home(){

   return (
    <>
    <div className="w-full  h-full flex " >

        <div className="h-full w-1/5   p-5 "  >
        <img src={logo} className=' rounded-full justify-center flex '  width='100'  />
        <div>
        <IconInput iconName={"material-symbols:home"} text={home}  />
        </div>
         
        </div>


        <div  className="h-full" ></div>


    </div>
    </>
   )


}

export default Home