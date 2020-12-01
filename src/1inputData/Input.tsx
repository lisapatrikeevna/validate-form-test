import React, {ChangeEvent, useState} from "react";
import cl from './input.module.scss';

type inputType = {
    addInputValue: (value: string, name: string) => void
    type: any
    name: any
    placeholder: string
    validate: (value: string, min: number, max: number, name: string) => string
}
export const Input = (props: inputType) => {
    let [value, setValue] = useState<any>('');
    let [error, setError] = useState<string>('')
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setValue(e.currentTarget.value)
    }
    const alertFc = (value: string) => {
        debugger
        props.addInputValue(value, props.name)
        alert(`${Number(value)} ok, let's go further`)
    }
    const onValidate = () => {
        if (props.name === 'numberCart') {
            const error = props.validate(value, 8, 8, 'numberCart')
            error ? setError(error) : alertFc(value)
        }
        if (props.name === 'date') {
            const error = props.validate(value, 4, 4, 'date')
            error ? setError(error) : alertFc(value)
        }
        if (props.name === 'CVV2') {
            const error = props.validate(value, 3, 3, 'CVV2')
            error ? setError(error) : alertFc(value)
        }
    }
    const handleBlur = () => {
        onValidate()
    }
    const onKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onValidate()
        }
    }
    return (
        <div className={cl.wrapp}>
            <input type={props.type} value={value} onChange={onChangeValue}
                   name={props.name} placeholder={props.placeholder}
                   onBlur={handleBlur} className={!error ? cl.input : cl.errorInput}
                   onKeyPress={onKeyPressCallback}
            />
            {error && <span className={cl.textError}>{error}</span>}
        </div>
    )
}
