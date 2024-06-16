



function PasswordInput({label,placeholder}){

    return(
                
        <>
        <div className="textInputDiv flex flex-col w-full space-y-2 ">
            <label for={label} className="font-semibold" >{label}</label>
        <input 
        type="password" 
        placeholder={placeholder} 
        className="p-3 border border-gray-600 "
        id={label}
        />
        </div>
        </>

    )
}
export default PasswordInput