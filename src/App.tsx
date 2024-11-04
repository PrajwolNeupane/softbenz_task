import MainLayout from "@layouts/main-layout";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
}
