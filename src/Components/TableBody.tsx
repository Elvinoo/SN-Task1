import React from "react";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  category: string;
  date: string;
  isRemoved: boolean;
  handleDelete: (id: number) => void;
}

interface ITableBodyProps {
  users: IUser[];
  handleDelete: (id: number) => void;
}

const TableBody = (props: ITableBodyProps) => {
  if (props.users.length === 0) return <tbody>Loading</tbody>;

  return (
    <tbody>
      {props.users
        .filter((user) => !user.isRemoved)
        .map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.category}</td>
            <td>{user.date}</td>
            <td>
              <button onClick={() => props.handleDelete(user.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
