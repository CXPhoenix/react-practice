import React, { useState } from 'react';

function FormInput({inputName, inputType, isSubmit, isEmail, id}) {
    let [haveValue, setInputState] = useState(false);
    let [emailValid, checkEmailValid] = useState(false);

    function inputOnChange(e) {
        let inputValue = e.target.value
        if (inputValue) {
            setInputState(haveValue = true)
        } else {
            setInputState(haveValue = false)
        }
        
        if (isEmail) {
            emailChecker(e.target.value)
        }
    }

    function emailChecker(value) {
        const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!emailRule.exec(value)) {
            checkEmailValid(emailValid=false)
        } else {
            checkEmailValid(emailValid=true)
        }
    }
    return (
        <div className="text-center relative">
            <input id={id} className="w-11/12 border-[1px] border-[#b9b6d3] focus:border-[#3e3c49] rounded-lg p-3 pl-6" type={inputType} placeholder={inputName} onChange={inputOnChange} />
            <div className={`${!haveValue && isSubmit ? "block" : "hidden"}`}>
                <img className={`absolute top-3 right-10`} src="/src/images/icon-error.svg" alt="" />
                <span className={`block text-right text-sm mt-2 pr-6 text-[#ff6666]`}>{inputName} cannot be empty</span>
            </div>
            <div className={`${isEmail && haveValue && !emailValid ? "block" : "hidden"}`}>
                <img className={`absolute top-3 right-10`} src="/src/images/icon-error.svg" alt="" />
                <span className={`block text-right text-sm mt-2 pr-6 text-[#ff6666]`}>Looks like this is not an email</span>
            </div>
        </div>
    );
}

export default FormInput;