import styles from "./HomePage.module.scss";
const HomeView = () => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.text}> Welcome to Phonebook</h1>
      </div>
    </section>
  );
};

export default HomeView;
