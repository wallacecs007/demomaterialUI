import React, {useState} from 'react'


const PersonalDetails = (props) => {

    const { handleChange, setStep, step } = props;

    console.log(props)

    console.log("I rendered")

    return(
        <form>
            {/* <input
                onChange = {handleChange("firstName")}
                type="text"
                name="firstName"
                placeholder = "First name"/>

            <input
                onChange = {handleChange("lastName")}
                type="text"
                name="lastName"
                placeholder = "Last name"/>

            <input
                onChange = {handleChange("email")}
                type="text"
                name="email"
                placeholder = "Email Address"/> */}

            <button onClick={setStep(step+1)}>Next</button>

        </form>
    )

}

export default PersonalDetails