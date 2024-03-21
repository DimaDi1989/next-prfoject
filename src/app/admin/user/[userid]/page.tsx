type Props = {
  params: {
    userid: string;
  };
};

import React from "react";

const IDUserPage = ({ params: { userid } }: Props) => {
  return <div>page {userid}</div>;
};

export default IDUserPage;
