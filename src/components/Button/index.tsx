import React from "react";
import styles from "./style.module.scss";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className={styles.root}>{props.label}</button>;
};

export default Button;