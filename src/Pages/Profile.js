import React from "react";
import {  Redirect } from "react-router-dom";

function Profile({ authorized }) {
  if (!authorized) {
    return <Redirect to="/login" />
  }

  return (
    <div>
      <p>Oops, are you allowed to be here?</p>
    </div>
  );
}

export default Profile;
