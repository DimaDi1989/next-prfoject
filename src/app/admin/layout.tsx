import React from "react";
import type { Metadata } from "next";

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
    <div>
      <div className="">-----layout admin ------</div>
      {children}
      <div className="">-----layout admin------</div>
    </div>
  );
};

export default layout;
