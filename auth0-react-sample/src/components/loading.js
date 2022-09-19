import React from "react";
//component that is displayed while page is generating/loading
const loadingImg =
  "https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
