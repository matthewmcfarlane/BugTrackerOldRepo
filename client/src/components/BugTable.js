import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NewBugForm from "./NewBugForm";

const BugTable = () => {
  const { user } = useAuth0();
  const [allBugs, setAllBugs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const [checked, setChecked] = useState(
    new Array({allBugs}.length).fill(false)
  );

  useEffect(() => {
    getAllBugs();
  }, []);

  const getAllBugs = () => {
    fetch("http://localhost:9090/bugs")
    .then((result) => result.json())
    .then((data) => setAllBugs(data));
  };

  const handleEditingClick = () => {
    if (isEditing == false) {
      setIsEditing(true)
    } else {
      setIsEditing(false);
    }
  }

  const handleOnChange = (position) => {
    const updatedCheckState = checked.map((item, index) =>
    index === position ? !item : item
    );

    setChecked(updatedCheckState);
  };

  const assigneeElements = (bug) => {
    return bug.assignees.map((assignee, index) => {
      <>
        <div className="text-sm font-medium text-gray-900">
          {assignee.name}
        </div>
        <div className="text-sm text-gray-500">
          {assignee.email}
        </div>
      </>
    })
  }

  const bugRows = allBugs.map((bug, index) => {
    let status = "Open";
    if (bug.active) {
      status = "Open";
    } else {
      status = "Closed";
    }
    return (
      <tr className="" key={index}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            {isEditing == true ?
            <input id={`custom-checkbox-${index}`} className="mr-2" name={bug.name} value={bug.name} type="checkbox" checked={checked[index]} onChange={() => handleOnChange(index)}/>
            : isEditing == false} 
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10 rounded-full"
                src={user.picture}
                alt=""
              />
            </div>
            <div className="ml-4">
              {assigneeElements(bug)}
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{bug.description}</div>
          <div className="text-sm text-gray-500">Optimization</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {bug.priority == "low" ? (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              {" "}
              {bug.priority}{" "}
            </span>
          ) : bug.priority == "medium" ? (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
              {" "}
              {bug.priority}{" "}
            </span>
          ) : (
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
              {" "}
              {bug.priority}{" "}
            </span>
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          Admin
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a href="#" className="text-indigo-600 hover:text-indigo-900">
            Edit
          </a>
          {status}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {bug.reporter.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {bug.dateReported}
        </td>
      </tr>
    );
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="ml-2 mt-2 mb-2">
          <select>
            <option value="" selected disabled hidden>
              filter by...
            </option>
            <option value="completed">completed</option>
            <option value="high-severity">high severity</option>
            <option value="medium-severity">medium severity</option>
            <option value="low-severity">low severity</option>
          </select>
          {/* {isEditing == true ? 
          <button onClick={() => setChecked((c) => !c)}>Uncheck</button>
          : isEditing == false} */}
        </div>
        <div>
          <button onClick={() => handleEditingClick()} className="mt-2 mb-2 bg-orange-400 rounded hover:bg-orange-600 p-2 ">
            Edit
          </button>
        </div>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Assignees
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Severity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>

                {bugRows}
              </thead>
              <tbody className="bg-white divide-y divide-gray-200"></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugTable;
