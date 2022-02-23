import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const BugTable = () => {

    const {user} = useAuth0();


    const [allBugs, setAllBugs] = useState([])
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        getAllBugs();
    })

    const getAllBugs = () => {
        fetch('http://localhost:9090/bugs')
        .then(result => result.json())
        .then(data => setAllBugs(data));
    }

    const getAllUsers = () => {
        fetch('http://localhost:8080/users')
        .then(result => result.json())
        .then(data => setAllUsers(data));
        
    }

    const bugRows = allBugs.map((bug, index) => {
        return(
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={user.picture} alt=""/>
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.nickname}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
                    <div className="text-sm text-gray-500">Optimization</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> Active </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Admin</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
            </tr>
        )
    })


    return(
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Severity</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Posted</th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>

                                {bugRows}

                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BugTable;