import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes([])}
      </>
    </Suspense>
  );
}

export default App;