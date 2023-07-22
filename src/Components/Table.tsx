import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableBody, { IUser } from "./TableBody";
import axios from "axios";

export default function Table() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("./data.json");
        setUsers(response.data.users);
      } catch (error) {
        console.log("Error while fetching the data...", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isRemoved: true } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="table">
      <table>
        <TableHead />
        <TableBody users={users} handleDelete={handleDelete} />
      </table>
    </div>
  );
}
