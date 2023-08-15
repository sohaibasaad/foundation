import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import HowItWorkspage from "./pages/HowItWorkspage"
import MultiStepFormPage from "./pages/MultiStepFormPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Landingpage />} />
                <Route index path="/" element={<Landingpage />} />
                <Route path="/home" element={<Landingpage />} />
                <Route path="/multiStepForm" element={<MultiStepFormPage />} />
                <Route path="/howItWorks" element={<HowItWorkspage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
