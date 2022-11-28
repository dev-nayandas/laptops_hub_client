import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';

 const UseRoleCheck = (users) => {
    const [role, setRole] = useState(null)
    // const [loadinq,setLoading] = useState(true)

        fetch('http://localhost:5000/users')
        .then(res => res())
        .then(data =>setRole(data.role))

    return [role]
};

export default UseRoleCheck;