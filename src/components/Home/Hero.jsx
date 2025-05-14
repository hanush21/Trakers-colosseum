import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 to-green-600 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Bloque de texto y CTA */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Planta. Juega. Invierte en el Planeta.
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
            Empieza tu viaje, crea ecosistemas, completa misiones y gana recompensas.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
              Empezar ahora
            </button>
          </div>
        </div>

        {/* Bloque de imagen */}
        <div className="flex justify-center lg:justify-end">
          <img 
            className="w-64 sm:w-80 md:w-96 object-contain"
            src="/path/to/your/image.png"  // Reemplaza con la ruta de tu imagen
            alt="Imagen representativa"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
