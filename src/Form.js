import React,{useState, useEffect}  from 'react';
export default function Form(){
    function handleData(e){
        setInputData({...inputData, [e.target.name]: 
            e.target.value})
    console.log(inputData)
   }
   const [flag, setFlag] = useState(false)
   useEffect(() =>{
    console.log("Registered")
}, [flag])

   function handleSubmit(e){
    e.preventDefault();
     if(!inputData.name || !inputData.email || !inputData.password){
        alert("All Input Fields are Mandatory")
    } else{
        setFlag(true)
    }
}
    const data = {name:"", email:"", password:""};
    const [inputData, setInputData] = useState(data);
    console.log(inputData)
    
   
    return (
        <>
        <pre>{(flag)?<h2 className='ui-define'> Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
   <div className='header'>
    <h1>Registration Form</h1>
   </div>
   <div>
    <input type="text" placeholder='Enter your name' name='name'  value={inputData.name} onChange=
             {handleData} ></input>
    <br></br>
    <input type="email" placeholder='Enter your email' name='email'  value={inputData.email} onChange=
             {handleData} ></input>
   <br></br>
   <input type="password" placeholder='Enter your Password' name='password'   value={inputData.password} onChange=
             {handleData} ></input>
   <br></br>
   <button type='submit'>Submit</button>
  <br></br>
   </div>
    </form>
    </>
    );
}