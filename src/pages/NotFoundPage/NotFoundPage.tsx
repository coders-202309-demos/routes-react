import { NavLink } from "react-router-dom";

const NotFoundPage = (): React.ReactElement => {
  return (
    <>
      <h2>We couldn't found what you're looking for</h2>
      <p>
        You can go to our <NavLink to="/home">homepage</NavLink>
      </p>
    </>
  );
};

export default NotFoundPage;
