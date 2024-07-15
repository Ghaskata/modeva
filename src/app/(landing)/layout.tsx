"use client"
import React, { Suspense, useEffect } from "react";
import Footer from "./_layout_components/Footer";
import Header from "./_layout_components/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="relative min-h-screen w-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default layout;
