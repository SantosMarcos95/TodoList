import { Header } from "../../components/Header/Header";
import { NewTask } from "../../components/NewTask/NewTask";

import styles from "../home/styles.module.css";

export function Home() {
  return (
    <>
      <div className={styles.home}>
        <Header />
        <NewTask />
      </div>
    </>
  );
}
