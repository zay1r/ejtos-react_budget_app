import React, { useContext } from 'react'

import {AppContext} from '../context/AppContext'

 const Budget = () => {

    const {budget}= useContext(AppContext);
    //const [setBudget]= useContext('')
    if(budget >19000){
        alert("Budget can not exceed 20,000")
        //Budget("")
    }
    return(

        <div className = 'alert alert-secondary'>
            <label>Budget $</label>

            <input  
            
                        value={budget}
                        required='required'
                        type='number'
                        step='10'
                       
                        style={{ marginLeft: '2rem' , size: 10}}
                        //onChange={(event) => budget(event.target.budget)}>
                        >
                        </input>
        </div>
    );

 };

 export default Budget;
