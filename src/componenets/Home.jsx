import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="header first">
        <h3 className="top-text">SO, YOU WANT TO TRAVEL TO</h3>
        <h1 className="title">SPACE</h1>
        <p className="text">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>

        <Link className="explore-btn" to="destination">
          EXPLORE
        </Link>
      </section>
    </>
  );
}

export default Home;
