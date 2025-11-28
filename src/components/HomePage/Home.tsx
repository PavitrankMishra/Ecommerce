import Header from "../HomePage/Header";
import Categories from "./Categories";
import "./Home.css";
// import Menu from "./Menu";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <Header />
        {/* <Menu /> */}
        <Slider />
        <Categories />
      </section>
    </>
  )
}

export default Home;
