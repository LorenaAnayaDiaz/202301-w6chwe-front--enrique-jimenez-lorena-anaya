import { Robot } from "../../model/robot.model";

export const getRobotsList = async () => {
  const response = await fetch(
    `https://two02301-w6chwe-back-enrique-lorena.onrender.com/api/v1/robots`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  const robotsList: Robot[] = await response.json();

  return robotsList;
};
