import imageHero from '../assets/img/manos.png'
function Hero() {
    return (
        <>
            <section id="Hero">
                <div className="relative h-[90vh] w-full overflow-hidden bg-gray-300">
                    <div
                        id="hero_fondo"
                        className="absolute inset-0 z-0">
                        <svg
                            className="h-full w-full "
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none">
                            <path
                                fill="var(--accent)"
                                d="
                                    M58,0
                                    L72,0
                                    C82,15 78,25 68,35
                                    C58,45 55,55 65,65
                                    C75,75 78,85 82,100
                                    L58,100
                                    C60,85 57,75 48,65
                                    C38,55 40,45 52,35
                                    C64,25 64,15 58,0
                                    Z">
                                <animate
                                    attributeName="d"
                                    dur="6s"
                                    repeatCount="indefinite"
                                    values="
                                              M58,0 L72,0 C82,15 78,25 68,35 C58,45 55,55 65,65 C75,75 78,85 82,100 L58,100 C60,85 57,75 48,65 C38,55 40,45 52,35 C64,25 64,15 58,0 Z;
                                              M58,0 L75,0 C86,15 83,27 70,37 C57,47 53,57 62,67 C71,77 77,88 85,100 L58,100 C62,87 58,78 47,67 C36,56 39,45 51,36 C63,27 66,15 58,0 Z;
                                              M58,0 L69,0 C78,14 75,26 65,36 C55,46 58,57 68,67 C78,77 80,88 80,100 L58,100 C59,88 54,78 45,67 C36,56 39,46 50,36 C61,26 63,14 58,0 Z;
                                              M58,0 L72,0 C82,15 78,25 68,35 C58,45 55,55 65,65 C75,75 78,85 82,100 L58,100 C60,85 57,75 48,65 C38,55 40,45 52,35 C64,25 64,15 58,0 
                                              Z "/>
                            </path>

                            <path
                                fill="var(--primary)"
                                d="
                                   M0,0
                                    L58,0
                                    C64,15 64,25 52,35
                                    C40,45 38,55 48,65
                                    C57,75 60,85 58,100
                                    L0,100
                                    Z" >
                                <animate
                                    attributeName="d"
                                    dur="6s"
                                    repeatCount="indefinite"
                                    values="
                                        M0,0 L58,0 C64,15 64,25 52,35 C40,45 38,55 48,65 C57,75 60,85 58,100 L0,100 Z;
                                        M0,0 L58,0 C66,15 66,27 51,36 C39,45 36,56 47,67 C58,78 62,87 58,100 L0,100 Z;
                                        M0,0 L58,0 C63,14 61,26 50,36 C39,46 36,56 45,67 C54,78 59,88 58,100 L0,100 Z;
                                        M0,0 L58,0 C64,15 64,25 52,35 C40,45 38,55 48,65 C57,75 60,85 58,100 L0,100 
                                        Z "/>
                            </path>
                        </svg>
                    </div>
                    {/* CONTENIDO */}
                    <div className="relative z-10 h-full w-full">
                        <div className="absolute bottom-0 right-0 h-full w-1/2">
                            <img
                                src={imageHero}
                                alt="Hero Image"
                                className="absolute bottom-0 right-0 w-4/5 object-contain object-bottom"
                            />
                        </div>
                        <div className="absolute left-0 top-0 z-10 flex h-full w-1/2 flex-col justify-center px-10 pl-25 text-white">
                            <h1 className="text-5xl font-bold">
                                Inovadent
                            </h1>
                            <h2 className="text-3xl font-semibold">
                                Soluciones Dentales
                            </h2>
                            <p className="mt-4">
                                Todo lo que tu sonrisa necesita, en manos de especialistas.
                            </p>
                            <p className="mt-4">
                                Ortodoncia · Estética · Cirugía · Odontopediatría
                            </p>
                            <button className="hero-btn mt-6 w-fit rounded px-4 py-2 font-bold">
                                Saber más
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero