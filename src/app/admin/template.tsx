import React from "react";

const AdminTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>template admin page</h2>
      {children}
    </div>
  );
};

export default AdminTemplate;
