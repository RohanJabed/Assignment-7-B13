import React, { useContext, useState } from 'react';
import { FriendTimeLineContext } from '../Context/FriendTimeLineContext';

const TimeLine = () => {
    const { timeline } = useContext(FriendTimeLineContext);
    const [filter, setFilter] = useState("all");

    const getIcon = (type) => {
        if (type === "call") return "📞";
        if (type === "text") return "💬";
        if (type === "video") return "🎥";
        return "🤝";
    };

    const getBadgeStyle = (type) => {
        if (type === "call") return "bg-blue-100 text-blue-700";
        if (type === "text") return "bg-purple-100 text-purple-700";
        if (type === "video") return "bg-green-100 text-green-700";
        return "bg-gray-100 text-gray-700";
    };

    const filteredTimeline = filter === "all" ? timeline : timeline.filter(item => item.type === filter);

    return (
        <div className='container mx-auto px-4 py-10 max-w-3xl'>

            <div className='mb-8'>
                <h1 className='font-bold text-4xl text-gray-900'>Timeline</h1>
                <div className='h-1 w-16 rounded-full mt-2' style={{backgroundColor: '#244D3F'}}></div>
                <p className='text-gray-500 mt-2 text-sm'>Track all your friend interactions in one place.</p>
            </div>

            <div className='mb-6'>
                <select
                    defaultValue="all"
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-200"
                >
                    <option value="all">All Interactions</option>
                    <option value="call">📞 Call</option>
                    <option value="text">💬 Text</option>
                    <option value="video">🎥 Video</option>
                </select>
            </div>

            <div className="space-y-3">
                {filteredTimeline.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-20 text-center'>
                        <span className='text-5xl mb-4'>🤝</span>
                        <h2 className='font-bold text-2xl text-gray-700'>No activity yet!</h2>
                        <p className='text-gray-400 mt-2 text-sm'>Start checking in with your friends to see activity here.</p>
                    </div>
                ) : (
                    filteredTimeline.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-2xl flex-shrink-0">
                                {getIcon(item.type)}
                            </div>

                            <div className="flex-1">
                                <p className="font-semibold text-gray-800 text-sm">
                                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)}{" "}
                                    <span className="text-gray-500 font-normal">with {item.friend}</span>
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                            </div>

                            <span className={`text-xs px-3 py-1 rounded-full font-medium ${getBadgeStyle(item.type)}`}>
                                {item.type}
                            </span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TimeLine;
