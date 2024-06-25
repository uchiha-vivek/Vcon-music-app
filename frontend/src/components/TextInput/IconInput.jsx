import {Icon} from "@iconify/react"
import { IoHomeOutline } from "react-icons/io5";



function IconInput({iconName,text,active}){

    return(

        <>
        
        <div className="flex" >
      <div>
      <Icon  icon={iconName} />
      </div>

       
       <div className="text-white">
           {text}
       </div>

        </div>
        
        </>
    )
}
export default IconInput