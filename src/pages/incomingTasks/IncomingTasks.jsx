// import MainContainer, Footer
// export in Content.jsx 
import MainContainer from '@components/mainСontainer/MainContainer';
import Footer from '@components/footer/Footer';
import styles from "./incomingTasks.module.css";

const IncomingTasks = ({ empty }) => {
  return (
    <>
      {/* <h1>IncomingTasks (main + footer)</h1> */}
      
      <div className={styles.inner}>
        <h1 className={styles.heading} id="heading">Входящие</h1>
        <MainContainer hasNoTasks={empty}/>
      </div>
        <Footer />
    </>
  );
}

export default IncomingTasks;