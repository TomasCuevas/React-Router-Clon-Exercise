//* component *//
import { Link } from "../components";

const i18n = {
  es: {
    title: "Sobre nosotros",
    description: "Hola! Me llamo Tomás Cuevas",
    button: "Ir al Inicio",
  },
  en: {
    title: "About us",
    description: "Hi! My name is Tomás Cuevas",
    button: "Go home!",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

const AboutPage = ({ params }) => {
  const i18n = useI18n(params.lang);

  return (
    <>
      <h3>{i18n.title}</h3>
      <div>
        <img
          src="https://pbs.twimg.com/profile_images/1175252084901462016/suUDhzx-_400x400.jpg"
          alt="me photo"
        />
      </div>
      <p>{i18n.description}</p>
      <Link to="/">{i18n.button}</Link>
    </>
  );
};

export default AboutPage;
