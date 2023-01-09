import React, { useState } from "react";
import FooterListData from "./FooterListData";
import ListHolder from "./List";

const FooterList = () => {
  const [data] = useState(FooterListData);
  return (
    <>
      {data.map((currn, ind) => {
        return <ListHolder key={ind} {...currn} />;
      })}
    </>
  );
};

export default FooterList;
