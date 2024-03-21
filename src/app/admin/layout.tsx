import React from "react";

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
