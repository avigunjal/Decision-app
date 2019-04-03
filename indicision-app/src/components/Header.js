import React from "react";

const Header = props => {
  const title = props.title;
  const subTitle = props.subtitle;
  return (
    <div className="header">
      <div className="container">
        <h2 className="header__title"> {title} </h2>
        <p className="header__subtitle"> {subTitle} </p>
      </div>
    </div>
  );
};

export default Header;
