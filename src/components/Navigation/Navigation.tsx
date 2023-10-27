import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul>
        <li>
          <NavLink to="/home">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/sloths" end>
            Sloths list
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
