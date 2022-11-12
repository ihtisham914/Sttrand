import React from "react";
import HeroSection from "../components/HeroSection";
import AppSection from "../components/AppSection";
import PaymentSection from "../components/PaymentSection";
import MerchantSection from "../components/MerchantSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AppSection />
      <PaymentSection />
      <MerchantSection />
    </div>
  );
};

export default Home;
