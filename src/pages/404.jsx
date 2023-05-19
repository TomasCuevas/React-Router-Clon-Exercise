//* component *//
import { Link } from "../components";

const Page404 = () => {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img
          src="https://midu.dev/images/this-is-fine-404.gif"
          alt="quemandose vivo"
        />
      </div>
      <div>
        <Link to="/">Volver a la home</Link>
      </div>
    </>
  );
};

export default Page404;
