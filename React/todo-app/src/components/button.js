import { useState } from 'react';

const button =  ({callBack}) => {
    
    return (
        <div>
            <button onClick={callBack} className='button center'>Agregar TODO</button>
            </div>
    )
}
export default button