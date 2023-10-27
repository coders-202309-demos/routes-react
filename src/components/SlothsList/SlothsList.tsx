import Sloth from "../../types";
import SlothCard from "../SlothCard/SlothCard";

interface SlothsListProps {
  sloths: Sloth[];
}

const SlothsList = ({ sloths }: SlothsListProps): React.ReactElement => {
  return (
    <ul className="sloths">
      {sloths.map((sloth) => (
        <li key={sloth.id}>
          <SlothCard sloth={sloth} />
        </li>
      ))}
    </ul>
  );
};

export default SlothsList;
