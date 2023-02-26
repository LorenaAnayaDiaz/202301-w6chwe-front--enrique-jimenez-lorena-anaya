import styles from "./Card.module.css";
import { Robot } from "../../model/robot.model";
import { FC } from "react";

interface CardProps {
  robot: Robot;
}

export const Card: FC<CardProps> = ({ robot }) => {
  return (
    <div className={styles.container}>
      <img
        src={robot.thumb}
        className={styles.image}
        alt={`${robot.name}-pic`}
      />
      <div className={styles.info}>
        <div className={styles.properties}>
          <span className={styles.property}>Name:</span>
          <span className={styles.property__name}> {robot.name}</span>
        </div>
        <div className={styles.properties}>
          <span className={styles.property}>Speed:</span>
          <span className={styles.property__name}> {`${robot.speed}kmh`}</span>
        </div>
        <div className={styles.properties}>
          <span className={styles.property}>Endurance:</span>
          <span className={styles.property__name}> {robot.endurance}</span>
        </div>
        <div className={styles.properties}>
          <span className={styles.property}>Date:</span>
          <span className={styles.property__name}> {robot.date}</span>
        </div>
      </div>
    </div>
  );
};
