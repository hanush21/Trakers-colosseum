import React from 'react';

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-r from-green-400 to-green-600 py-16 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto text-center text-white">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                    Planta. Juega. Invierte en el Planeta.
                </h1>
                <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                    Empieza tu viaje, crea ecosistemas, completa misiones y gana recompensas.
                </p>
                <div className="flex justify-center mb-12">
                    <button className="bg-blue-600 text-white py-2 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
                        Empezar ahora
                    </button>
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                    <img
                        className="w-64 sm:w-80 md:w-96 object-contain"
                        src="/path/to/your/image.png"
                        alt="Imagen representativa"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
