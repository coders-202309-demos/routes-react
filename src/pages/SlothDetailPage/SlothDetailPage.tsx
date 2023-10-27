import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SlothDetails from "../../components/SlothDetails/SlothDetails";
import Sloth from "../../types";

const apiUrl = "https://sloths-api.onrender.com";

const SlothDetailPage = (): React.ReactElement => {
  const { slothId } = useParams<{ slothId: string }>();
  const [sloth, setSloth] = useState<Sloth>({
    id: 0,
    name: "",
    fingers: 0,
    picture: "",
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(`${apiUrl}/sloths/${slothId}`);
      const slothApi = (await response.json()) as Sloth;

      setSloth(slothApi);
    })();
  }, [slothId]);

  return (
    <>
      <h2>Sloth details</h2>
      <SlothDetails sloth={sloth} />
    </>
  );
};

export default SlothDetailPage;
