import React from 'react';

const Banner = ({Friend}) => {
   
      
    return (
        <div>
         <div className='container mx-auto flex flex-col items-center justify-center text-center py-20 '>
           <div className='space-y-5'>
             <h2 className='text-6xl font-bold '>Friends to keep close in your life</h2>
            <p className='text-lg' style={{color: '#64748B'}}>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>
                <button className='btn btn-success btn-soft text-white bg-green-800'>+ Add Friend</button>
           </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-9'>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl' style={{color: '#244D3F'}}>{Friend.length}</p>
                <p className=' text-xl' style={{color: '#64748B'}}>Total Friends</p>
             </div>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl' style={{color: '#244D3F'}}>3</p>
                <p className=' text-xl' style={{color: '#64748B'}}>On Track</p>
             </div>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl' style={{color: '#244D3F'}}>6</p>
                <p className=' text-xl' style={{color: '#64748B'}}>Need Attention</p>
             </div>
             <div className='p-6 bg-gray-100 rounded-lg shadow-md space-y-2'>
                <p className='font-bold text-2xl' style={{color: '#244D3F'}}>12</p>
                <p className=' text-xl' style={{color: '#64748B'}}>Interactions This Month</p>
             </div>
           </div>
            
        </div>
          <div className='container mx-auto'>
             <h2 className='font-bold text-4xl p-4'>Your Friends</h2>
           </div>
        </div>
        
    );
};

export default Banner;