import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";
import Loading from "./pages/Loading.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-50 text-indigo-900">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsOfUse" element={<TermsOfUse />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <Footer />
    </div>
  );
}
