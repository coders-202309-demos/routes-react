import ContainerStyled from "../../styles/shared/ContainerStyled";
import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <h1>Sloths App</h1>
        <Navigation />
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
