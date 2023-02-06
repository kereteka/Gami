import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";
import GamiStatistics from "./pages/GamiStatistics/GamiStatistics";
import Home from "./pages/Home/Home";
import WhatWeDo from "./pages/WhatWeDo/WhatWeDo";

const App: React.FC = () => {
  return (
    <div className="App text-black bg-[#F3F4F6]">
      <Header />
      {/* <Router> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamistatistics" element={<GamiStatistics />} />
          <Route path="/whatwedo" element={<WhatWeDo />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      {/* </Router> */}
    </div>
  );
};

export default App;
