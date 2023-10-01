import React from "react";
import InstaFeeds from "../components/InstaFeeds";
const Insta = () => {
  return <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12} />;
};

export default Insta;
