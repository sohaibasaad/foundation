import { BrowserRouter, Route, Routes } from "react-router-dom";
import HowItWorks from "./pages/howItWorks";
import Landingpage from "./pages/landingpage";
import MultiStepFormPage from "./pages/MultiStepFormPage";
function App() {
    return (
        // <>
        //     {/* <Landingpage /> */}
        //     {/* <MultiStepFormPage /> */}
        //     <HowItWorks />
        // </>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Landingpage />} />
                <Route index path="/" element={<Landingpage />} />
                <Route path="/home" element={<Landingpage />} />
                <Route path="/multiStepForm" element={<MultiStepFormPage />} />
                <Route path="/howItWorks" element={<HowItWorks />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
