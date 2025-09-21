import TaskList from "@components/taskList/TaskList";
import styles from "./mainContainer.module.css";

const MainContainer = ({ hasNoTasks }) => {
  return (
    <main className={hasNoTasks ? `${styles.main} ${styles.hasNoTasks}` : styles.main}>
      <TaskList empty={hasNoTasks} />
    </main>
  );
}

export default MainContainer;