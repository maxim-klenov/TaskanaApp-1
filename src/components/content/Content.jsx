import NavBar from "@components/navBar/NavBar";
import CurrentPage from "@components/currentPage/CurrentPage";
import IncomingTasks from "@pages/incomingTasks/IncomingTasks";
import styles from "./content.module.css";
import SideBar from "@components/sideBar/SideBar";
import Statistic from "@components/statistic/Statistic";

const Content = () => {
  const navLinks = [
    {href: '#1', svgName: 'inbox', label: 'Входящие'} // i use href as a key, thats why it has #1, #2...
  ]

  return (
    <section className={styles.content} aria-labelledby="heading">
      <NavBar navLinks={navLinks} />

      <CurrentPage>
        <IncomingTasks empty/>
      </CurrentPage>
      
      <SideBar>
        <Statistic empty/>
      </SideBar>
    </section>
  );
}

export default Content;