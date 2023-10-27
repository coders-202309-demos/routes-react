import { NavLink } from "react-router-dom";
import Sloth from "../../types";
import SlothCardStyled from "./SlothCardStyled";

interface SlothCardProps {
  sloth: Sloth;
}

const SlothCard = ({
  sloth: { id, name, fingers },
}: SlothCardProps): React.ReactElement => {
  return (
    <SlothCardStyled className="sloth">
      <h2 className="sloth__name">
        <NavLink to={`/sloths/details/${id}`}>{name}</NavLink>
      </h2>
      <span className="sloth__fingers">{fingers}</span>
    </SlothCardStyled>
  );
};

export default SlothCard;
