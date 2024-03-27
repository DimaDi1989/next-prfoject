import React from "react";
import axios from "axios";
import { IUser_adminPage } from "@/Store/Interfaces/AdminPageInterfaces/adminPageInterfaces";
import Link from "next/link";
async function fetchAllUsers() {
  const response = await fetch("http://127.0.0.1:8000/api/users", {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
}
const AdminPage = async () => {
  let userData = await fetchAllUsers();

  return (
    <div>
      <h2>Страница администратора</h2>

      <div className="users__container">
        <ul>
          {userData.map((item: IUser_adminPage) => {
            return (
              <Link href={`/admin/user/${item.id}`} key={item.id}>
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
