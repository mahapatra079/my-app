
// Given a list of users, build a users data table that displays users in a paginated format.

// Requirements

// Table requirements
// The users data table should display the following columns: Id, Name, Age, Occupation
// Each row in the table represents a single user
// Pagination requirements
// The pagination controls should allow the user to navigate to previous and next pages
// The pagination controls should display the current page number and the total number of pages
// The table should update dynamically when the user navigates to a different page
// Provide an option to select the number of users displayed per page (e.g., 5, 10, 20)

import { useState } from "react";
import Pagination from "../../common-component/Pagination";

const usersData = [
  { id: 1, name: "Amit", age: 25, occupation: "Developer" },
  { id: 2, name: "Rahul", age: 28, occupation: "Designer" },
  { id: 3, name: "Sneha", age: 24, occupation: "Tester" },
  { id: 4, name: "Priya", age: 30, occupation: "Manager" },
  { id: 5, name: "Kunal", age: 26, occupation: "Engineer" },
  { id: 6, name: "Neha", age: 27, occupation: "HR" },
  { id: 7, name: "Rohit", age: 29, occupation: "Architect" },
  { id: 8, name: "Pooja", age: 23, occupation: "Intern" },
  { id: 9, name: "Arjun", age: 31, occupation: "Lead" },
  { id: 10, name: "Meena", age: 22, occupation: "Student" },
];

function TablesListUsers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const totalPages = Math.ceil(usersData.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;
  const currentUsers = usersData.slice(
    startIndex,
    startIndex + usersPerPage
  );

  return (
    <div className="table-container">
      <h2 className="textCenter">Users List</h2>

      <div className="page-size">
        <label>Users per page: </label>
        <select
          value={usersPerPage}
          onChange={(e) => {
            setUsersPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length === 0 ? (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          ) : (
            currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.occupation}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      />
    </div>
  );
}

export default TablesListUsers;

// Explanation: This component displays a paginated table of users with options to change the number of users displayed per page.

// How it works
// State variables track current page and users per page
// Slices usersData to get current page's users
// Renders table with current users
// Pagination component handles page navigation
