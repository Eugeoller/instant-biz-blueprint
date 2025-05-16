
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WizardLayout from "@/components/wizard/Layout";
import { 
  SingleChoiceQuestion, 
  MultiChoiceQuestion, 
  ScaleQuestion,
  TextQuestion 
} from "@/components/wizard/QuestionTypes";

interface Answer {
  [key: string]: any;
}

const Wizard = () => {
  const { step } = useParams<{ step: string }>();
  const currentStep = parseInt(step || "1");
  const totalSteps = 5;
  
  const [answers, setAnswers] = useState<Answer>({});

  // Guardar respuestas en localStorage
  useEffect(() => {
    const savedAnswers = localStorage.getItem("business-plan-answers");
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const updateAnswer = (question: string, value: any) => {
    const updatedAnswers = { ...answers, [question]: value };
    setAnswers(updatedAnswers);
    localStorage.setItem("business-plan-answers", JSON.stringify(updatedAnswers));
  };

  const renderQuestion = () => {
    switch(currentStep) {
      case 1:
        return (
          <SingleChoiceQuestion
            question="¿En qué fase se encuentra tu negocio actualmente?"
            options={[
              "Idea inicial, aún no he comenzado",
              "Proyecto en desarrollo",
              "Negocio en funcionamiento que quiero expandir",
              "Reestructuración de un negocio existente"
            ]}
            value={answers["businessPhase"]}
            onChange={(value) => updateAnswer("businessPhase", value)}
          />
        );
        
      case 2:
        return (
          <TextQuestion
            question="¿Cuál es el nombre de tu negocio o proyecto?"
            placeholder="Ej. InnovaTech Solutions"
            value={answers["businessName"]}
            onChange={(value) => updateAnswer("businessName", value)}
          />
        );
        
      case 3:
        return (
          <MultiChoiceQuestion
            question="¿Qué áreas necesitas desarrollar en tu plan de negocio? (Selecciona todas las que correspondan)"
            options={[
              "Análisis de mercado",
              "Plan financiero",
              "Estrategia de marketing",
              "Operaciones y logística",
              "Recursos humanos",
              "Análisis DAFO",
              "Plan de contingencia"
            ]}
            value={answers["businessAreas"]}
            onChange={(value) => updateAnswer("businessAreas", value)}
          />
        );
        
      case 4:
        return (
          <ScaleQuestion
            question="¿Qué nivel de detalle necesitas en tu plan de negocio?"
            min={1}
            max={5}
            minLabel="Básico"
            maxLabel="Muy detallado"
            value={answers["detailLevel"]}
            onChange={(value) => updateAnswer("detailLevel", value)}
          />
        );
        
      case 5:
        return (
          <TextQuestion
            question="¿Cuál es tu propuesta de valor? Describe brevemente qué hace único a tu negocio"
            placeholder="Explica qué problema resuelve tu negocio y cómo lo hace de forma única..."
            multiline={true}
            value={answers["valueProposition"]}
            onChange={(value) => updateAnswer("valueProposition", value)}
          />
        );
        
      default:
        return <div>Pregunta no encontrada</div>;
    }
  };

  return (
    <WizardLayout totalSteps={totalSteps}>
      {renderQuestion()}
    </WizardLayout>
  );
};

export default Wizard;
