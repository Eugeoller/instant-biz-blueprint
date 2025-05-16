
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-bizplan-blue-light">
      <div className="container max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-bizplan-blue-dark mb-4">
            Crea tu plan de negocio en minutos con IA
          </h1>
          <p className="text-xl md:text-2xl text-bizplan-gray-dark max-w-3xl mx-auto">
            Solo responde unas preguntas y genera un documento listo para presentar
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <Button asChild size="lg" className="text-lg px-8 py-6 rounded-full bg-bizplan-blue hover:bg-bizplan-blue-dark">
            <Link to="/wizard/1">
              Empezar
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <StepCard 
            number={1}
            title="Responde un cuestionario simple"
            description="Preguntas sencillas sobre tu negocio que te guiarán paso a paso."
          />
          
          <StepCard 
            number={2}
            title="La IA genera tu plan"
            description="Con gráficos, análisis detallado y matriz DAFO personalizada."
          />
          
          <StepCard 
            number={3}
            title="Descárgalo en PDF"
            description="O guárdalo en tu cuenta para editarlo cuando quieras."
          />
        </div>
      </div>
    </div>
  );
};

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => {
  return (
    <Card className="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow bg-white border border-slate-100">
      <div className="w-12 h-12 rounded-full bg-bizplan-blue-light flex items-center justify-center text-bizplan-blue font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-bizplan-gray">{description}</p>
    </Card>
  );
};

export default Welcome;
