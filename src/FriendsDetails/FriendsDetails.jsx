import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router';
import UseFriend from '../Hooks/UseFriend';
import { Bell, Archive, Trash2, Phone, MessageSquare, Video } from "lucide-react";
import { Star } from "lucide-react";
import { Heart } from "lucide-react";
import { HashLoader } from 'react-spinners';
import { FriendTimeLineContext } from '../Context/FriendTimeLineContext';
import { toast } from 'react-toastify';


const FriendsDetails = () => {
    const { id } = useParams();
    const { friends, loading } = UseFriend();

    const expectedFriend = friends.find(friend => String(friend.id) === id);

    // const [timeline, setTimeline] = useState([]);
     const {timeline, setTimeline} = useContext(FriendTimeLineContext);

    const handleTimeline = (type) => {
        const newAction = {
            type: type,
            friend: expectedFriend.name,
            time: new Date().toLocaleString()
        };

        toast.success(`${type} with ${expectedFriend.name} added to timeline`)

        setTimeline(prev => [...prev, newAction]);
    };


    console.log(timeline);
    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <HashLoader color='green'></HashLoader>
            </div>
        );
    }

    if (!expectedFriend) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <h2>Friend not found</h2>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 p-6 flex justify-center">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl w-full">


                <div className="bg-white rounded-2xl shadow p-6 text-center">

                    <img
                        src={expectedFriend.picture}
                        alt={expectedFriend.name}
                        className="w-20 h-20 rounded-full mx-auto"
                    />

                    <h2 className="text-lg font-semibold mt-3">
                        {expectedFriend.name}
                    </h2>

                    <div className="flex justify-center gap-2 mt-2">

                        <span className={`text-xs px-3 py-1 rounded-full ${expectedFriend.status === "Overdue"
                            ? "bg-red-100 text-red-600"
                            : expectedFriend.status === "Almost due"
                                ? "bg-yellow-100 text-yellow-600"
                                : "bg-green-100 text-green-600"
                            }`}>
                            {expectedFriend.status}
                        </span>



                    </div>
                    <div className="flex  justify-center items-center mt-3 gap-2 font-bold">
                        {expectedFriend.tags.map((tag, index) => (
                            <span key={index} className="badge badge-accent">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-sm text-gray-500 mt-3 italic">
                        "{expectedFriend.bio}"
                    </p>

                    <p className="text-xs text-gray-400 mt-2">
                        Preferred: {expectedFriend.email}
                    </p>

                    <div className="mt-6 space-y-2">

                        <button className="w-full border rounded-lg py-2 hover:bg-gray-100">
                            Snooze 2 Weeks
                        </button>

                        <button className="w-full border rounded-lg py-2 hover:bg-gray-100">
                            Archive
                        </button>

                        <button className="w-full border rounded-lg py-2 text-red-500 hover:bg-red-50">
                            Delete
                        </button>

                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="lg:col-span-2 space-y-6">

                    {/* TOP CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            <h2 className="text-2xl font-bold">
                                {expectedFriend.days_since_contact}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Days Since Contact
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            <h2 className="text-2xl font-bold">
                                {expectedFriend.goal}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Goal (Days)
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow p-5 text-center">
                            <h2 className="text-xl font-bold">
                                {expectedFriend.next_due_date}
                            </h2>
                            <p className="text-sm text-gray-500">
                                Next Due
                            </p>
                        </div>

                    </div>

                    {/* RELATIONSHIP GOAL */}
                    <div className="bg-white rounded-xl shadow p-6">

                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold">
                                Relationship Goal
                            </h2>
                            <button className="border px-3 py-1 rounded-md text-sm">
                                Edit
                            </button>
                        </div>

                        <p className="text-gray-600 mt-2">
                            Connect every{" "}
                            <span className="font-semibold">
                                {expectedFriend.goal} days
                            </span>
                        </p>

                    </div>

                    {/* QUICK CHECK-IN */}
                    <div className="bg-white rounded-xl shadow p-6">

                        <h2 className="font-semibold mb-4">
                            Quick Check-In
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                            <button  onClick={() => handleTimeline("call")} className="border rounded-xl py-6 hover:bg-gray-100">
                                📞 <br /> Call
                            </button>

                            <button  onClick={() => handleTimeline("text")} className="border rounded-xl py-6 hover:bg-gray-100">
                                💬 <br /> Text
                            </button>

                            <button  onClick={() => handleTimeline("video")} className="border rounded-xl py-6 hover:bg-gray-100">
                                🎥 <br /> Video
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendsDetails;