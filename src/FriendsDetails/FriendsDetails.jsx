import React, { useContext } from 'react';
import { useParams } from 'react-router';
import UseFriend from '../Hooks/UseFriend';
import { HashLoader } from 'react-spinners';
import { FriendTimeLineContext } from '../Context/FriendTimeLineContext';
import { toast } from 'react-toastify';

const FriendsDetails = () => {
    const { id } = useParams();
    const { friends, loading } = UseFriend();
    const expectedFriend = friends.find(friend => String(friend.id) === id);
    const { timeline, setTimeline } = useContext(FriendTimeLineContext);

    const handleTimeline = (type) => {
        const newAction = {
            type,
            friend: expectedFriend.name,
            time: new Date().toLocaleString()
        };
        toast.success(`${type} with ${expectedFriend.name} added to timeline`);
        setTimeline(prev => [...prev, newAction]);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <HashLoader color='#244D3F' />
            </div>
        );
    }

    if (!expectedFriend) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h2 className="text-xl text-gray-500">Friend not found</h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-10 px-4 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full">

                {/* LEFT CARD */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center h-fit">
                    <img
                        src={expectedFriend.picture}
                        alt={expectedFriend.name}
                        className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-green-100"
                    />

                    <h2 className="text-xl font-bold mt-4 text-black">
                        {expectedFriend.name}
                    </h2>

                    <div className="flex justify-center mt-2">
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                            expectedFriend.status === "Overdue"
                                ? "bg-red-500 text-white"
                                : expectedFriend.status === "Almost due"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-green-500 text-white"
                        }`}>
                            {expectedFriend.status}
                        </span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                        {expectedFriend.tags.map((tag, index) => (
                            <span key={index} className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500 mt-4 italic leading-relaxed">
                        "{expectedFriend.bio}"
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                        📧 {expectedFriend.email}
                    </p>

                    <div className="mt-6 space-y-2">
                        <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-colors">
                            🔔 Snooze 2 Weeks
                        </button>
                        <button className="w-full border border-gray-200 rounded-xl py-2.5 text-sm font-medium text-black hover:bg-gray-50 transition-colors">
                            📁 Archive
                        </button>
                        <button className="w-full border border-red-100 rounded-xl py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
                            🗑 Delete
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* STAT CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { value: expectedFriend.days_since_contact, label: 'Days Since Contact' },
                            { value: expectedFriend.goal, label: 'Goal (Days)' },
                            { value: expectedFriend.next_due_date, label: 'Next Due' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
                                <h2 className="text-2xl font-bold" style={{color: '#244D3F'}}>
                                    {stat.value}
                                </h2>
                                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-lg" style={{color: '#244D3F'}}>
                                Relationship Goal
                            </h2>
                            <button className="border border-gray-200 px-4 py-1.5 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                                Edit
                            </button>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">
                            Connect every{" "}
                            <span className="font-semibold" style={{color: '#244D3F'}}>
                                {expectedFriend.goal} days
                            </span>
                        </p>
                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="font-semibold text-lg mb-4" style={{color: '#244D3F'}}>
                            Quick Check-In
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { type: 'call', emoji: '📞', label: 'Call' },
                                { type: 'text', emoji: '💬', label: 'Text' },
                                { type: 'video', emoji: '🎥', label: 'Video' },
                            ].map(({ type, emoji, label }) => (
                                <button
                                    key={type}
                                    onClick={() => handleTimeline(type)}
                                    className="border border-gray-200 rounded-2xl py-6 text-black font-medium hover:bg-green-50 hover:border-green-200 transition-all"
                                >
                                    <span className="text-2xl block mb-1">{emoji}</span>
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;
