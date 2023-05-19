//* component *//
import { Link } from "../components/Link";

const AboutPage = () => {
  return (
    <>
      <h3></h3>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1175252084901462016/suUDhzx-_400x400.jpg"
          alt="me photo"
        />
      </div>
      <p>
        Hola! Me llamo Tomás Cuevas y estoy creando un clon de React Router.
      </p>
      <Link to="/">Ir a Home</Link>
    </>
  );
};

export default AboutPage;
