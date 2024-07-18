import "./App.css";
import QuotationComponent from "./QuotationComponent/QuotationComponent";
import QuotationForm from "./QuotationForm/QuotationForm";
import CreateQuotationCMP from "./CompanyManagement/CreateQuotationCMP";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ViewAllQuotationCMP from "./CompanyManagement/ViewAllQuotationCMP";
import PatchQuotationCMP from "./CompanyManagement/PatchQuotationCMP";
import ViewAllQuotationCMPCmpName from "./ProductManagement/ViewAllQuotationCMPCmpName";
import ViewAllProducts from "./ProductManagement/ViewAllProducts";
import ProductUpdate from "./ProductManagement/ProductUpdate";
import CreateProduct from "./ProductManagement/CreateProduct";
import { Link } from "react-router-dom";
import HRQuotationForm from "./HumanResourceManagement/HRQuotationForm";
import CreateHRQuotation from "./HumanResourceManagement/CreateHRQuotation";
import ViewAllHR from "./HumanResourceManagement/ViewAllHR";
import PatchQuotationHR from "./HumanResourceManagement/PatchQuotationHR";
import Quotation from "./QuotationForm/Quotation";
import SelectQuotationForm from "./QuotationComponent/SelectQuotationForm";
import "./App.css";
import HeaderTable from "./HeaderTable/HeaderTable";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import CardQuestion from "./Home/CardQuestion";
function App() {
  return (
    <div className="App bgs w-screen h-screen">
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <HeaderTable />

          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/navigationCheck" element={<CardQuestion />} />
            <Route path="/quotationForm" element={<SelectQuotationForm />} />
            <Route path="/createHR" element={<CreateHRQuotation />} />
            <Route path="/viewHR" element={<ViewAllHR />} />
            <Route path="/editHR/:id" element={<PatchQuotationHR />} />
            <Route path="/createCompany" element={<CreateQuotationCMP />} />
            <Route path="/viewAllCompany" element={<ViewAllQuotationCMP />} />
            <Route path="/editCompany/:id" element={<PatchQuotationCMP />} />
            <Route path="/viewCompanyForProduct" element={<ViewAllQuotationCMPCmpName />} />
            <Route path="/ViewAllProduct/:cmpId" element={<ViewAllProducts />} />
            <Route path="/ProductUpdate/:id" element={<ProductUpdate />} />
            <Route path="/CreateUpdate/:cmpId" element={<CreateProduct />} />
          </Routes>
        </main>
      </div>
      <div className="mt-auto bg-gray-200">
        <Footer />
      </div>
    </div>
  );
}

export default App;
