


function TextInput({label,placeholder,className}){


    return(

        <>

        <div className= {`textInputDiv flex flex-col w-full space-y-2  ${className} `} >
            <label for={label} className="font-semibold" >{label}</label>
        <input 
        type="text" 
        placeholder={placeholder} 
        className="p-3 border border-gray-600 "
        id={label}
        />
        </div>
      
        </>
    )
}
export default TextInput