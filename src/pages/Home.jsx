//* component *//
import { Link } from "../components/Link";

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una página de ejemplo</p>
      <Link to="/about">Ir a Sobre Nosotros</Link>
    </>
  );
};

export default HomePage;
