import React from 'react';

const Banner = ({Friend}) => {
    return (
        <div>
            <div className='container mx-auto flex flex-col items-center justify-center text-center py-24 px-4'>
                <div className='space-y-6 max-w-2xl'>
                    <span className='inline-block bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full'>
                        Your Personal Connection Manager
                    </span>
                    <h2 className='text-5xl md:text-6xl font-bold leading-tight text-gray-900'>
                        Friends to keep <span style={{color: '#244D3F'}}>close</span> in your life
                    </h2>
                    <p className='text-lg' style={{color: '#64748B'}}>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className='btn btn-success text-white px-8 py-3 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all' style={{backgroundColor: '#244D3F', border: 'none'}}>
                        + Add Friend
                    </button>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-4xl'>
                    {[
                        { value: Friend.length, label: 'Total Friends' },
                        { value: 3, label: 'On Track' },
                        { value: 6, label: 'Need Attention' },
                        { value: 12, label: 'Interactions This Month' },
                    ].map((stat, i) => (
                        <div key={i} className='p-6 bg-white rounded-2xl shadow-sm border border-gray-100 space-y-1 hover:shadow-md transition-shadow'>
                            <p className='font-bold text-3xl' style={{color: '#244D3F'}}>{stat.value}</p>
                            <p className='text-sm font-medium' style={{color: '#64748B'}}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container mx-auto px-4 pb-4'>
                <h2 className='font-bold text-3xl text-gray-900'>Your Friends</h2>
                <div className='h-1 w-16 rounded-full mt-2' style={{backgroundColor: '#244D3F'}}></div>
            </div>
        </div>
    );
};

export default Banner;
