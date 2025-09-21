import styles from './statistic.module.css'
const Statistic = ({ empty = false }) => {
  if (empty) {
    return (
      <div className={styles.empty}>
        <img src="/icons/notebook.svg" width="231" height="168" aria-hidden="true"/>
        <p>Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику и самочувствие.</p>
      </div>
    );
  }

  return (
    <>
      <h1>Some statistics</h1>
    </>
  );
}

export default Statistic;