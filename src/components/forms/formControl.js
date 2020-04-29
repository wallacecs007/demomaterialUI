import React, {useState} from 'react';

//Form Components
import PersonalDetails from './personalInformation'

export const FormControl = (props) => {

    const [step, setStep] = useState(1)

    // const [info, setInfo] = useState({
    //     firstName:"",
    //     lastName:"",
    //     email:"",
    //     education: {
    //         type:"",
    //         schoolName:"",
    //         yearIn: "",
    //         yearOut: "",
    //         certificateName: "",
    //     }
    // })

    // const handleChange = input => e => {
    //     setInfo({...info, [e.target.name]: e.target.value})
    // }

    switch(step) {

        case 1:
            return(
                <PersonalDetails setStep={setStep} step={step} />
            )
        case 2:
            return(
                <div></div>
            )
        case 3:
            return(
                <div></div>
            )
        default:
            return(
                <div>
                    <p>Woops, Something went wrong!</p>
                </div>
            )

    }

}

export default FormControl;