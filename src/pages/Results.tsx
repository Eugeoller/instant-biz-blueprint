
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { Link } from "react-router-dom";
import { FileText, Activity, UserIcon, PieChart as PieChartIcon, BarChart as BarChartIcon, DollarSign, Download, Save, Plus } from "lucide-react";

// Datos de ejemplo para DAFO
const dafoData = {
  fortalezas: ["Tecnología innovadora", "Equipo experimentado", "Bajo costo operativo"],
  oportunidades: ["Mercado en crecimiento", "Pocos competidores directos", "Alta demanda de soluciones financieras"],
  debilidades: ["Marca poco conocida", "Recursos limitados", "Dependencia de tecnologías de terceros"],
  amenazas: ["Cambios regulatorios", "Grandes competidores", "Recesión económica"]
};

// Datos de ejemplo para gráficos
const marketData = [
  { name: "Jóvenes profesionales", value: 45 },
  { name: "Familias", value: 30 },
  { name: "Emprendedores", value: 15 },
  { name: "Otros", value: 10 },
];

const acquisitionData = [
  { name: "Redes sociales", valor: 45 },
  { name: "Marketing de contenido", valor: 25 },
  { name: "Anuncios de búsqueda", valor: 20 },
  { name: "Referidos", valor: 10 },
];

const financialsData = [
  { name: "Suscripciones", ingresos: 65, costes: 30 },
  { name: "Premium", ingresos: 45, costes: 15 },
  { name: "Publicidad", ingresos: 20, costes: 5 },
  { name: "Servicios", ingresos: 15, costes: 10 },
];

// Colores para los gráficos
const COLORS = ["#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"];

const Results = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-bizplan-blue-dark mb-2">
            Plan de negocio para app de finanzas personales
          </h1>
          <p className="text-bizplan-gray">Generado con inteligencia artificial • Mayo 2025</p>
        </header>
        
        {/* Resumen ejecutivo */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <FileText className="h-5 w-5 text-bizplan-blue" />
            <CardTitle className="text-lg md:text-xl text-bizplan-blue-dark">Resumen ejecutivo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-bizplan-gray-dark">
              Esta aplicación de finanzas personales ofrece una solución innovadora para ayudar a jóvenes profesionales, 
              familias y emprendedores a gestionar sus finanzas de manera intuitiva. Con un enfoque en la automatización, 
              educación financiera y visualización de datos, la aplicación tiene un potencial significativo en un mercado 
              en crecimiento con pocos competidores directos ofreciendo soluciones similares.
            </p>
          </CardContent>
        </Card>
        
        {/* Análisis DAFO */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <Activity className="h-5 w-5 text-bizplan-blue" />
            <CardTitle className="text-lg md:text-xl text-bizplan-blue-dark">Análisis DAFO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <h3 className="font-semibold text-green-800 mb-2">Fortalezas</h3>
                <ul className="space-y-1 text-sm">
                  {dafoData.fortalezas.map((item, index) => (
                    <li key={`f-${index}`} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                <h3 className="font-semibold text-yellow-800 mb-2">Oportunidades</h3>
                <ul className="space-y-1 text-sm">
                  {dafoData.oportunidades.map((item, index) => (
                    <li key={`o-${index}`} className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <h3 className="font-semibold text-red-800 mb-2">Debilidades</h3>
                <ul className="space-y-1 text-sm">
                  {dafoData.debilidades.map((item, index) => (
                    <li key={`d-${index}`} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">Amenazas</h3>
                <ul className="space-y-1 text-sm">
                  {dafoData.amenazas.map((item, index) => (
                    <li key={`a-${index}`} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Segmento de cliente */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <UserIcon className="h-5 w-5 text-bizplan-blue" />
            <CardTitle className="text-lg md:text-xl text-bizplan-blue-dark">Segmento de cliente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="bg-bizplan-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <UserIcon className="h-6 w-6 text-bizplan-blue" />
                </div>
                <h3 className="font-semibold text-bizplan-blue-dark mb-1">Jóvenes profesionales</h3>
                <p className="text-sm text-bizplan-gray">Personas entre 25-35 años que buscan optimizar sus finanzas y crear hábitos de ahorro.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="bg-bizplan-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <UserIcon className="h-6 w-6 text-bizplan-blue" />
                </div>
                <h3 className="font-semibold text-bizplan-blue-dark mb-1">Familias</h3>
                <p className="text-sm text-bizplan-gray">Hogares que necesitan gestionar gastos conjuntos y planificar el futuro financiero familiar.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                <div className="bg-bizplan-blue-light rounded-full w-12 h-12 flex items-center justify-center mb-3">
                  <UserIcon className="h-6 w-6 text-bizplan-blue" />
                </div>
                <h3 className="font-semibold text-bizplan-blue-dark mb-1">Emprendedores</h3>
                <p className="text-sm text-bizplan-gray">Dueños de pequeños negocios que necesitan separar finanzas personales y empresariales.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Propuesta de valor */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <CardTitle className="text-lg md:text-xl text-bizplan-blue-dark">Propuesta de valor</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="bg-bizplan-blue-light rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-bizplan-blue font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bizplan-blue-dark mb-1">Automatización inteligente</h3>
                  <p className="text-sm text-bizplan-gray">Categorización automática de gastos con IA para ahorrar tiempo y reducir errores.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bizplan-blue-light rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-bizplan-blue font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bizplan-blue-dark mb-1">Visualización intuitiva</h3>
                  <p className="text-sm text-bizplan-gray">Gráficos y paneles personalizables que muestran patrones de gasto y oportunidades de ahorro.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bizplan-blue-light rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-bizplan-blue font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bizplan-blue-dark mb-1">Educación financiera</h3>
                  <p className="text-sm text-bizplan-gray">Consejos personalizados y recursos educativos basados en patrones de gasto del usuario.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bizplan-blue-light rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-bizplan-blue font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-bizplan-blue-dark mb-1">Planificación multiobjetivo</h3>
                  <p className="text-sm text-bizplan-gray">Herramientas para establecer y monitorear múltiples metas financieras simultáneamente.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Mercado objetivo */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <PieChartIcon className="h-5 w-5 text-bizplan-blue" />
              <CardTitle className="text-lg md:text-xl text-bizplan-blue-dark">Mercado objetivo</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ChartContainer 
                config={{
                  market1: { color: "#2563EB" },
                  market2: { color: "#3B82F6" },
                  market3: { color: "#60A5FA" },
                  market4: { color: "#93C5FD" },
                }}
              >
                <PieChart>
                  <Pie
                    data={marketData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {marketData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Porcentaje']}
                  />
                  <Legend layout="horizontal" verticalAlign="bottom" align="center" />
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
          
          {/* Canales de adquisición */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <BarChartIcon className="h-5 w-5 text-bizplan-blue" />
              <CardTitle className="text-lg md:text-xl text-bizplan-blue-dark">Canales de adquisición</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ChartContainer
                config={{
                  acquisition: { color: "#2563EB" },
                }}
              >
                <BarChart data={acquisitionData}>
                  <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(value) => `${value}%`} fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                  <Bar dataKey="valor" fill="#2563EB" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          
          {/* Estructura de ingresos y costes */}
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <DollarSign className="h-5 w-5 text-bizplan-blue" />
              <CardTitle className="text-lg md:text-xl text-bizplan-blue-dark">Estructura de ingresos y costes</CardTitle>
            </CardHeader>
            <CardContent className="h-64">
              <ChartContainer
                config={{
                  ingresos: { color: "#2563EB" },
                  costes: { color: "#60A5FA" },
                }}
              >
                <BarChart data={financialsData}>
                  <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(value) => `${value}%`} fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip formatter={(value) => [`${value}%`, 'Porcentaje']} />
                  <Legend />
                  <Bar dataKey="ingresos" fill="#2563EB" name="Ingresos" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="costes" fill="#60A5FA" name="Costes" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        
        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-bizplan-blue hover:bg-bizplan-blue-dark w-full md:w-auto">
            <Download className="mr-2 h-5 w-5" />
            Descargar PDF
          </Button>
          
          <Button variant="outline" className="w-full md:w-auto">
            <Save className="mr-2 h-5 w-5" />
            Guardar en mi cuenta
          </Button>
          
          <Button variant="outline" className="w-full md:w-auto">
            <Plus className="mr-2 h-5 w-5" />
            Crear otro plan
          </Button>
        </div>
        
        {/* Enlaces de navegación */}
        <div className="text-center pb-8">
          <Link to="/wizard/1" className="text-bizplan-blue hover:underline text-sm">
            Volver al cuestionario
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
