import styles from "./taskList.module.css";
const TaskList = ({ empty = false }) => {
  if (empty) {
    return (
      <div className={styles.fullfiled}>
        <hgroup className={styles.heading}>
          <h2>Все твои задачи организованы как надо</h2>
          <span>Отличная работа! Ты большой молодец!</span>
        </hgroup>
        <img className={styles.picture} src="/icons/all-tasks-done.svg" width="463" height="319" aria-hidden="true"/>
      </div>
    )
  } 


  return (
    <>
      <ul>
        <li>Task 1</li>
      </ul>
    </>
  );
}

export default TaskList;