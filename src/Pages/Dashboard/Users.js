// import { map } from '@firebase/util';
// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import DashboardLayout from '../../Layout/DashboardLayout';
// import AllUsers from './AllUsers';

// const Users = () => {
//    const [users, setUsers] = useState([]);
//    useEffect(()=>{
//     fetch('https://final-project-server-drab.vercel.app/users')
//     .then(res => res.json())
//     .then(data => setUsers(data))
//    },[])

//     return (
//         <div>
//            {
//             users.map(user => <DashboardLayout
//             key={user._id}
//             user={user}
//             ></DashboardLayout>)
//            }
//         </div>
//     );
// };

// export default Users;
