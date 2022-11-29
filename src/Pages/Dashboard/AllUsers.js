import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";

const AllUsers = () => {
  // const users = useLoaderData([]);
  const { data = [], refetch } = useQuery({
    queryKey: [],
    queryFn: () =>
      fetch("https://final-project-server-drab.vercel.app/users").then((res) =>
        res.json()
      ),
  });

  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are you sure you want to delete ${user.name}`
    );
    if (agree) {
      fetch(`https://final-project-server-drab.vercel.app/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            refetch();
            toast.success("User deleted successfully");
          }
        });
    }
  };

  return (
    <div>
      <div>
        <h1>All user page</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full ">
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
              {data.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.accountType}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-primary btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default AllUsers;
