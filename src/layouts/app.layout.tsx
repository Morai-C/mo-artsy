import HeaderComp from "components/shared/HeaderComp";
import React, { ReactElement } from "react";

const AppLayout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <>
      <div className="app">
        <HeaderComp />
        <main className="app-children">{children}</main>
      </div>
    </>
  );
};

export default AppLayout;
