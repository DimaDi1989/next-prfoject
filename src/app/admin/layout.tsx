import React from "react";
import type { Metadata } from "next";
import "./adminpage.scss";
import AdminSideBar from "@/Components/AdminSideBar/AdminSideBar";
export const metadata: Metadata = {
  title: "Admin page",
  description: "Admin page and page user",
};

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="adminpage__wrapper">
      <div className="admin_sidebar">
        <AdminSideBar />
      </div>

      <div className="admin_children">{children}</div>
    </div>
  );
};

export default layout;
