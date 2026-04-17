import React, { useContext } from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { FriendTimeLineContext } from '../Context/FriendTimeLineContext';

const States = () => {

     const {timeline, } = useContext(FriendTimeLineContext);

     const callCount = timeline.filter(item => item.type === 'call').length;
     const textCount = timeline.filter(item => item.type === 'text').length;
     const videoCount = timeline.filter(item => item.type === 'video').length;

    const data = [
        { name: 'Call', value: callCount, fill: '#034426' },
        { name: 'Text', value: textCount, fill: '#A927F5' },
        { name: 'Video', value: videoCount, fill: '#09C86F' }
    ];

    return (
        <div className='container mx-auto'>
            <h2 className='font-bold text-5xl p-6 my-6'>Friendship Analytics</h2>

            <div className='p-12 my-5 shadow-2xl bg-gray-100' style={{ width: '100%', height: 400 }}>
                <p className='font-semibold text-2xl'>By Interaction Type</p>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            cornerRadius={10}
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend></Legend>
                        <Tooltip></Tooltip>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default States;