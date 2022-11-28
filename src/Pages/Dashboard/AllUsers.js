import React from "react";
import { useLoaderData } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";

const AllUsers = () => {
  const users = useLoaderData([]);

  return (
    <div>
      <div>
        <h1>All user page</h1>
      </div>
      <div>
      <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>User Type</th>
        <th>Admin Action</th>
      </tr>
    </thead>
    <tbody>
  
      {
        users.map((user ,i)=><tr
        key={user._id}>
            <th>{i+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.accountType}</td>
            <td><button className="btn btn-primary btn-xs">Delete</button></td>
          
          </tr>)
         
      }
   
   
      
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default AllUsers;
