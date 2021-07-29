import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import FormInput from './components/FormInput';

function App() {
  let [hasSubmit, setSubmitState] = useState(false)

  function submitHandler() {
    setSubmitState(hasSubmit=true)
    Object.keys(inputFormNames).forEach(item => {
      console.log(document.querySelector('#'+item.split(' ').join('')).value)
    })
  }

  const inputFormNames = {
    "First Name": "text",
    "Last Name": "text",
    "Email": "email",
    "Password": "password"
  }

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-8 place-content-center bg-[#ff6666] backgroundimg min-w-screen-md min-h-screen p-10 py-32 md:py-0 md:px-24">
        <div className="grid grid-cols-1 gap-4 md:gap-10 h-full md:pl-10">
          <span className="block text-white text-3xl text-center md:text-left md:text-6xl font-semibold self-end">Learn to code by watching others</span>
          <span className="block text-white text-base text-center md:text-xl md:text-left self-start">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</span>
        </div>
        <div className="grid grid-cols-1 gap-7">
          <div className="bg-[#6055a5] rounded-lg text-center text-white p-4 text-[16] shadow-sp">
            <span className="font-semibold">Try it free 7 days</span><span className=""> then $20/mo. thereafter</span>
          </div>
          <div className="grid grid-cols-1 gap-y-6 bg-[#fff] bg-opacity-100 rounded-lg py-10 px-4 shadow-sp">
            {Object.keys(inputFormNames).map((item, index) => (
              <FormInput key={index} id={item.split(" ").join('')} inputName={item} inputType={inputFormNames[item]} isSubmit={hasSubmit} isEmail={item === "Email"} />
            ))}
            <div className="text-center">
              <button className="w-11/12 uppercase bg-green-400 text-white rounded-lg p-2 pl-4 cursor-pointer shadow-btn text-[16px]" onClick={submitHandler}>claim your free trial</button>
            </div>
            <div className="text-center -mt-4">
              <span className="text-[#b9b6d3] text-[12px]">By clicking the button, you are agreeing to our </span><a className="text-[#ff6666] text-[12px] cursor-pointer">Terms and Services</a>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App