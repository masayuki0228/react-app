import styles from "./Headline.module.css";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <p className={styles.description}>
        {props.children}
      </p>
    </div>
  );
}
