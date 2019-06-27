/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { Link } from "@reach/router";

function RestaurantHeader() {
  const container = {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 3,
    listStyle: "none",
    background: "#000",
    padding: 30,
    width: "100%",
    fontWeight: "bold",
    left: "50%",
    marginTop: "30px",
    transform: "translate(-50%, -40%)"
  };

  return (
    <div css={container}>
      <Link to="/login">
        <Icon name="user circle outline" size="large" />
      </Link>

      <br />

      <span>
        <Icon fitted name="sign out" size="large" />
      </span>
    </div>
  );
}

export default RestaurantHeader;