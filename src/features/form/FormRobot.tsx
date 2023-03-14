import { useAppDispatch } from "../../app/hooks";
import styles from "./Form.module.css";
import { postNewRobot } from "./formSlice";

export const FormRobot = () => {
  const dispatch = useAppDispatch();
  function getCurrentDate() {
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    return day + "/" + month + "/" + year;
  }
  return (
    <>
      <form
        aria-label="form"
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          const newRobot = {
            thumb:
              "https://202301-w4ch1-adrian-garcia.netlify.app/img/diego.jpeg",
            id: "h452",
            name: e.currentTarget.robotName.value,
            speed: Number(e.currentTarget.speed.value),
            endurance: Number(e.currentTarget.endurance.value),
            date: getCurrentDate(),
          };
          dispatch(postNewRobot(newRobot));
        }}
      >
        Name:
        <input type="text" name="robotName" />
        Speed:
        <input type="range" min="0" max="10" step="1" name="speed" />
        Endurance:
        <input type="range" min="0" max="10" step="1" name="endurance" />
        <button type="submit" value="Create">
          Create
        </button>
      </form>
    </>
  );
};
