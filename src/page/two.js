import React from "react";
import { Link } from "react-router-dom";

class Two extends React.Component {
  render() {
    return (
      <div>
        test_two
        <br />
        <Link to="./">One</Link>
      </div>
    );
  }
}

export default Two;
