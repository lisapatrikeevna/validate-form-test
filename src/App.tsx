import React, {useCallback} from 'react';
import cl from './App.module.scss';
import {Input} from "./1inputData/Input";
import {validate} from "./1inputData/Validator";
import {useDispatch, useSelector} from "react-redux";
import {changeInputAC, initialStateType} from "./bll/appReduser";
import {AppRootStateType} from "./bll/store";

function App() {
    const dispatch = useDispatch();
    const addInputValue = useCallback((inputValue: string, name: string) => {
        dispatch(changeInputAC(inputValue, name))
    }, [dispatch]);
    let resolveValue = useSelector<AppRootStateType, initialStateType>(state => state.app)
    return (
        <div className={cl.App}>
            <Input type={'string'} placeholder={'Номер Карты'} name={'numberCart'} validate={validate} addInputValue={addInputValue}/>
            <Input type={'string'} placeholder={'Действительна До'} name={'date'} validate={validate} addInputValue={addInputValue}/>
            <Input type={'string'} placeholder={'CVV2'} name={'CVV2'} validate={validate}
                   addInputValue={addInputValue}/>
            {resolveValue.inputs.map(input => <div key={input.key}>{input.key}:{input.inputValue}</div>)}
        </div>
    );
}

export default App;
