import React from 'react';
import BudgetList from './_components/BudgetList'; // Ensure the correct case is used

function Page() {
  return (
    <div>
      <div className='p-10'>
      <h2 className='font-bold text-3xl'> <BudgetList /></h2>
      </div>
     
    </div>
  );
}

export default Page;
