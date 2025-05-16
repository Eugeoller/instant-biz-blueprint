
import React, { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
  totalSteps: number;
}

const WizardLayout: React.FC<LayoutProps> = ({ children, totalSteps }) => {
  const navigate = useNavigate();
  const { step } = useParams<{ step: string }>();
  
  const currentStep = parseInt(step || "1");
  
  const goNext = () => {
    if (currentStep < totalSteps) {
      navigate(`/wizard/${currentStep + 1}`);
    } else {
      // Navigate to results page when implemented
      navigate("/results");
    }
  };
  
  const goBack = () => {
    if (currentStep > 1) {
      navigate(`/wizard/${currentStep - 1}`);
    } else {
      navigate("/");
    }
  };

  const progress = Math.floor((currentStep / totalSteps) * 100);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="container max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-2 bg-bizplan-gray-light rounded-full mb-2">
            <div 
              className="h-full bg-bizplan-blue rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-bizplan-gray">
            <span>Paso {currentStep} de {totalSteps}</span>
            <span>{progress}% completado</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 mb-8">
          {children}
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={goBack}
            className="px-6"
          >
            Atrás
          </Button>
          
          <Button 
            onClick={goNext} 
            className="px-8 bg-bizplan-blue hover:bg-bizplan-blue-dark"
          >
            {currentStep === totalSteps ? "Finalizar" : "Siguiente"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WizardLayout;
