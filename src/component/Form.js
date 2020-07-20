import React from 'react';
import {useFormik, Formik} from 'formik';

const Form =()=>{
    const formik = useFormik({
        initialValues:{
            firstName:''
        },
        onSubmit:values=>{
            alert(JSON.stringify(values, null, 2));
        }
    })
    return(
        <form onSubmit={Formik.handleSubmit}>
            <label htmlFor="firstName"></label>
            <input id="fistName" type="text" {...formik.getFieldProps('firstName')}/>
    {formik.touched.firstName && formik.errors.firstName?(<div>{formik.errors.firstName}</div>):null}
            <button type="submit">Submit</button>
        </form>
        
    )
}

export default Form 