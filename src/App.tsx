import React from 'react';
import cl from './App.module.scss';
import {Input} from "./1inputData/input";
import {validate} from "./1inputData/Validator";

function App() {
    return (
        <div className={cl.App}>
            {/*<Input type={'number'}/>*/}
            <Input type={'string'} placeholder={'Номер Карты'} name={'numberCart'} validate={validate}/>
            <Input type={'string'} placeholder={'Действительна До'} name={'date'} validate={validate}/>
            <Input type={'string'} placeholder={'CVV2'} name={'CVV2'} validate={validate}/>
        </div>
    );
}

export default App;
