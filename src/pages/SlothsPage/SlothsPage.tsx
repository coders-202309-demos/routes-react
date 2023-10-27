import { useEffect, useState } from "react";
import SlothsList from "../../components/SlothsList/SlothsList";
import Sloth from "../../types";

const apiUrl = "https://sloths-api.onrender.com";

const SlothsPage = (): React.ReactElement => {
  const [sloths, setSloths] = useState<Sloth[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${apiUrl}/sloths`);
      const slothsApi = (await response.json()) as Sloth[];

      setSloths(slothsApi);
    })();
  }, []);

  return (
    <>
      <h2>Sloths list</h2>
      <SlothsList sloths={sloths} />
    </>
  );
};

export default SlothsPage;
