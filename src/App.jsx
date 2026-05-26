import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
