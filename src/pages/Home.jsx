//* component *//
import { Link } from "../components";

const i18n = {
  es: {
    title: "Inicio",
    description: "Esta es una página de ejemplo",
    button: "Ir a Sobre Nosotros",
  },
  en: {
    title: "Home",
    description: "This is a example page",
    button: "Go to About Us",
  },
};

const useI18n = (lang) => {
  return i18n[lang] || i18n.en;
};

const HomePage = ({ params }) => {
  const i18n = useI18n(params.lang);

  return (
    <>
      <h1>{i18n.title}</h1>
      <p>{i18n.description}</p>
      <Link to="/about">{i18n.button}</Link>
    </>
  );
};

export default HomePage;
