import { Link } from "react-router-dom";
import { FormRobot } from "../../features/form/FormRobot";

import "./Form.css";

export const Form = () => {
  return (
    <>
      <h1 className="home__title">Create your own robot!</h1>
      <FormRobot />
      <Link className="text" data-testid="link" to={"/"}>
        Go home
      </Link>{" "}
    </>
  );
};
