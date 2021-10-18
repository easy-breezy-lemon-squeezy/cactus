import React from "react";
import styles from "./FormControls.module.css"

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            { hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restprops} = props;
    return (
        <FormControl {...props}> <textarea {...input} {...restprops}/></FormControl>
    )
}
export const Input = (props) => {
    const {input, meta, ...restprops} = props;
    return (
        <FormControl {...props}> <input {...input} {...restprops}/></FormControl>
    )
}