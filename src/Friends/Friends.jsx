import { HashLoader } from "react-spinners";
import UseFriend from "../Hooks/UseFriend";
import { Link } from "react-router";

const Friends = () => {
    const { friends, loading } = UseFriend();

    return (
        loading ? (
            <div className="flex justify-center py-20">
                <HashLoader color="#244D3F" />
            </div>
        ) : (
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-8 mb-16'>
                {friends.map(friend => (
                    <Link
                        to={`/friends/${friend.id}`}
                        key={friend.id}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                    >
                        <img
                            className='w-24 h-24 rounded-full object-cover ring-4 ring-green-100'
                            src={friend.picture}
                            alt={friend.name}
                        />

                        <h3 className="font-bold text-lg text-gray-900 mt-4">
                            {friend.name}
                        </h3>

                        <p className="text-sm mt-1" style={{color: '#64748B'}}>
                            {friend.days_since_contact}d ago
                        </p>

                        <div className="flex flex-wrap justify-center gap-1 mt-3">
                            {friend.tags.map((tag, index) => (
                                <span key={index} className="text-xs px-2 py-1 rounded-full bg-green-50 text-green-700 font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <span className={`mt-3 text-xs px-3 py-1 rounded-full font-semibold ${
                            friend.status === 'Overdue'
                                ? 'bg-red-100 text-red-600'
                                : friend.status === 'Almost due'
                                    ? 'bg-yellow-100 text-yellow-700'
                                    : 'bg-green-100 text-green-700'
                        }`}>
                            {friend.status}
                        </span>
                    </Link>
                ))}
            </div>
        )
    );
}

export default Friends;
