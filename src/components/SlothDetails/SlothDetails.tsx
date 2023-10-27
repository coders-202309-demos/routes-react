import Sloth from "../../types";

interface SlothDetailsProps {
  sloth: Sloth;
}

const SlothDetails = ({
  sloth: { name, fingers },
}: SlothDetailsProps): React.ReactElement => {
  return (
    <>
      <h3>{name}</h3>
      <span>{fingers} fingers</span>
    </>
  );
};

export default SlothDetails;
