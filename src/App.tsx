import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  // Only enable Tempo devtools if you explicitly add routes in the future.
  const tempoEnabled = import.meta.env.VITE_TEMPO === "true";

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 
          If you need to add Tempo routes later, replace this with:
          {tempoEnabled && <Route path="/__tempo" element={<TempoDevtools />} />}
        */}
      </Routes>
    </Suspense>
  );
}

export default App;
