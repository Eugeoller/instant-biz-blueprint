
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-bizplan-blue-light">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Card className="p-8 text-center">
          <div className="w-16 h-16 bg-bizplan-blue-light text-bizplan-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-bizplan-blue-dark mb-4">
            ¡Tu plan de negocio está listo!
          </h1>
          
          <p className="text-lg text-bizplan-gray-dark mb-8">
            Hemos generado un plan de negocio personalizado basado en tus respuestas. Puedes descargarlo o guardarlo en tu cuenta para futuras ediciones.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-bizplan-blue hover:bg-bizplan-blue-dark">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Descargar PDF
            </Button>
            
            <Button variant="outline">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
              Editar plan
            </Button>
          </div>
          
          <div className="mt-12 border-t pt-8">
            <p className="mb-4 text-bizplan-gray">¿Necesitas hacer cambios?</p>
            <Link to="/wizard/1" className="text-bizplan-blue hover:underline">
              Volver al cuestionario
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;
