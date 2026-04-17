
import { HashLoader } from "react-spinners";
import UseFriend from "../Hooks/UseFriend";
import { Link } from "react-router";

const Friends = () => {
    

 const {friends,loading} =UseFriend()

    return (
        loading ? (
           <div className="flex justify-center ">
             <HashLoader color="green"></HashLoader>
           </div>
        ) : (
            <div  className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-9 mb-15'>

                {friends.map(friend => (
                    <Link to={`/friends/${friend.id}`}  key={friend.id} className="card p-3 shadow-lg">

                        <figure>
                            <img
                                className='w-[200px] h-[200px] rounded-full'
                                src={friend.picture}
                                alt={friend.name}
                            />
                        </figure>

                        <div className="card-body">
                            <div className="text-center space-y-2">

                                <div className="font-bold text-2xl">
                                    {friend.name}
                                </div>

                                <div>
                                    <p>{friend.days_since_contact}d ago</p>
                                </div>

                                <div className="flex justify-center gap-2 font-bold">
                                    {friend.tags.map((tag, index) => (
                                        <span key={index} className="badge badge-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <span className={`badge ${friend.status === 'Overdue'
                                        ? 'badge-error'
                                        : friend.status === 'Almost due'
                                            ? 'badge-warning'
                                            : 'badge-success'
                                    }`}>
                                    {friend.status}
                                </span>

                            </div>
                        </div>

                    </Link>
                ))}

            </div>
        )
    );
}

export default Friends;