import React, { Suspense, use } from 'react';
import Banner from '../Component/HomePage/Banner';
import Friends from '../Friends/Friends';

const FriendPromise = fetch('/public/data.json').then(res => res.json())

const HomePage = () => {
    const Friend = use(FriendPromise)
    return (
        <div>
           <Banner Friend={Friend}></Banner>
        <Friends></Friends>
 
           
        </div>
    );
};

export default HomePage;