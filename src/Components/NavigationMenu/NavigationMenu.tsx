import React from "react";
import Link from "next/link";
import { NavigationMenu as NavArray } from "@/Store/LocalStore/store";
const NavigationMenu = () => {
  const renderMenu = () => {
    return (
      <nav style={{ display: "flex", gap: "24px" }}>
        {NavArray.map((item) => {
          return (
            <Link key={item.id} href={item.href}>
              {item.text}
            </Link>
          );
        })}
      </nav>
    );
  };

  return <div>{renderMenu()}</div>;
};

export default NavigationMenu;
