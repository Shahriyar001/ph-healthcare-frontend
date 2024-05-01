import Footer from "@/componants/Shared/Footer/Footer";
import Navbar from "@/componants/Shared/Navbar/Navbar";
import React from "react";
import { Toaster } from "sonner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <>
          <Toaster position="top-center" />
          {children}
        </>
      </div>
      <Footer />
    </>
  );
};

export default CommonLayout;
