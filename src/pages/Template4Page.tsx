import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Template4 from "@/templates/Template4";

const Template4Page = () => {
  return (
    <>
      <Link 
        to="/templates" 
        className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all flex items-center gap-2 text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Galeria de Templates
      </Link>
      <Template4 />
    </>
  );
};

export default Template4Page;
