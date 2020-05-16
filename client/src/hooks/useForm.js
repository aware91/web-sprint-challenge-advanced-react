// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = (initialValue) => {
    // set state and setState 
    const [values, setValues] = useState(initialValue)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    console.log('initial values', values)
    //set up handleChange
    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    //set up handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };
    //return so hook will work
    return [values, handleChanges, handleSubmit, showSuccessMessage]
}