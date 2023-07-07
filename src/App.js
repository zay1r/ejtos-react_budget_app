import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js

//<div className='col-sm'>
                     //   <ExpenseItem />
                   // </div>     
// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import RemainingBudget from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
//import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';



const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        
                    
                    <div className = 'col-sm'>
                            <Budget/>
                        </div>        

                             
                    <div className='col-sm'>
                        <RemainingBudget/>
                    </div>
      

                        
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>        
                        
                    <h3 className='mt-3'>Allocation</h3>
                <div className='row '></div>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>   
                        
                     
                        
                    <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'></div>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>         


                        
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
