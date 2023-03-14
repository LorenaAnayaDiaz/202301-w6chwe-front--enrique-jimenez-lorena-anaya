import { RobotResponse } from "../../model/robot.model";

export const postRobot = async (robot: RobotResponse) => {
  const response = await fetch(
    `https://two02301-w6chwe-back-enrique-lorena.onrender.com/api/v1/robots`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(robot),
    }
  );
  const currentRobot = await response.json();

  return currentRobot;
};
