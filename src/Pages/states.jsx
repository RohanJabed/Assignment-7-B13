import React, { useContext } from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FriendTimeLineContext } from '../Context/FriendTimeLineContext';

const States = () => {
    const { timeline } = useContext(FriendTimeLineContext);

    const callCount = timeline.filter(item => item.type === 'call').length;
    const textCount = timeline.filter(item => item.type === 'text').length;
    const videoCount = timeline.filter(item => item.type === 'video').length;

    const data = [
        { name: 'Call', value: callCount, fill: '#034426' },
        { name: 'Text', value: textCount, fill: '#A927F5' },
        { name: 'Video', value: videoCount, fill: '#09C86F' }
    ];

    return (
        <div className='container mx-auto px-4 py-10'>

            <div className='mb-8'>
                <h2 className='font-bold text-4xl text-gray-900'>Friendship Analytics</h2>
                <div className='h-1 w-16 rounded-full mt-2' style={{backgroundColor: '#244D3F'}}></div>
                <p className='text-gray-500 mt-2 text-sm'>A visual breakdown of how you stay connected.</p>
            </div>

            <div className='bg-white border border-gray-100 rounded-2xl shadow-sm p-8' style={{ width: '100%', height: 420 }}>
                <p className='font-semibold text-lg text-black mb-4'>By Interaction Type</p>
                <ResponsiveContainer width="100%" height="90%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius="70%"
                            outerRadius="90%"
                            cornerRadius={10}
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default States;
