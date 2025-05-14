import React from 'react';
import BackgroundImage  from "../../assets/home/background.png"

const Hero = () => {
    return (
        <div className="relative h-[90vh]  flex bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${BackgroundImage})`}} >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Bloque de texto y CTA */}
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl text-[#242424] font-bold mb-4 sm:mb-6 leading-tight">
                        Planta. Juega. Invierte en el Planeta.
                    </h1>
                    <p className="text-lg sm:text-xl mb-6 max-w-xl text-[#242424] mx-auto lg:mx-0">
                        Empieza tu viaje, crea ecosistemas, completa misiones y gana recompensas.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="bg-blue-600 text-[#242424] py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 text-lg">
                            Empezar ahora
                        </button>
                    </div>
                </div>

                {/* Bloque de imagen */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        className="w-64 sm:w-80 md:w-96 object-contain"
                        src="/src/assets/home/phone.png"
                        alt="Imagen representativa"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
