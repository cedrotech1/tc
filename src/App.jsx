import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";
import { About, Careers, Contact } from "./pages/Company.jsx";
import { Industries, IndustryDetail } from "./pages/Industries.jsx";
import { InsightDetail, Insights } from "./pages/Insights.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import { ProductDetail, Products } from "./pages/Products.jsx";
import { ServiceDetail, Services } from "./pages/Services.jsx";
import { SolutionDetail, Solutions } from "./pages/Solutions.jsx";
import { CaseDetail, Work } from "./pages/Work.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:slug" element={<ProductDetail />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="solutions/:slug" element={<SolutionDetail />} />
        <Route path="industries" element={<Industries />} />
        <Route path="industries/:slug" element={<IndustryDetail />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<CaseDetail />} />
        <Route path="insights" element={<Insights />} />
        <Route path="insights/:slug" element={<InsightDetail />} />
        <Route path="about" element={<About />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
