import React, { useContext, useState } from 'react';
import { FriendTimeLineContext } from '../Context/FriendTimeLineContext';

const TimeLine = () => {

    const { timeline } = useContext(FriendTimeLineContext);

    // ✅ filter state
    const [filter, setFilter] = useState("all");

    const getIcon = (type) => {
        if (type === "call") return "📞";
        if (type === "text") return "💬";
        if (type === "video") return "🎥";
        return "🤝";
    };

    // ✅ filtering logic
    const filteredTimeline =
        filter === "all"
            ? timeline
            : timeline.filter(item => item.type === filter);

    return (
        <div className='container mx-auto '>
            <div className='space-y-4 p-6 my-7'>
                <h1 className='font-bold text-5xl'>TimeLine</h1>

                {/* ✅ onChange added */}
                <select
                    defaultValue="all"
                    onChange={(e) => setFilter(e.target.value)}
                    className="select"
                >
                    <option value="all">All</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
            </div>

            <div className="space-y-4 p-4 mb-7">
                {
                    filteredTimeline.length === 0 ? (
                        <h2 className='font-bold text-4xl text-center my-5'>
                            No activity yet!
                        </h2>
                    ) : (
                        filteredTimeline.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 bg-gray-100 p-4 rounded-xl shadow-sm"
                            >
                                {/* ICON */}
                                <div className="text-2xl">
                                    {getIcon(item.type)}
                                </div>

                                {/* TEXT */}
                                <div>
                                    <p className="font-semibold text-gray-800">
                                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}{" "}
                                        <span className="text-gray-500 font-normal">
                                            with {item.friend}
                                        </span>
                                    </p>

                                    <p className="text-sm text-gray-400">
                                        {item.time}
                                    </p>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default TimeLine;