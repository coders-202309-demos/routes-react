import { Routes, Route, Navigate } from "react-router-dom";
import ContainerStyled from "../../styles/shared/ContainerStyled";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import SlothsPage from "../../pages/SlothsPage/SlothsPage";
import SlothDetailPage from "../../pages/SlothDetailPage/SlothDetailPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const App = (): React.ReactElement => {
  return (
    <>
      <Header />
      <ContainerStyled>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/sloths/details/:slothId"
              element={<SlothDetailPage />}
            />
            <Route path="/sloths" element={<SlothsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </ContainerStyled>
    </>
  );
};

export default App;
