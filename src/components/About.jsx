import about from '../assets/heroo.png'
import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'


const About = ({ darkMode }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, {
        stiffness: 400,
        damping: 30
    });
    const mouseYSpring = useSpring(y, {
        stiffness: 400,
        damping: 30
    });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleTouchMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const touch = e.touches[0];
        const mouseX = touch.clientX - rect.left;
        const mouseY = touch.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };


    return (
        <section id="about" className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 `}>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <figure
                    data-aos='fade-up'
                    data-aos-delay='300'
                    className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1">

                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleMouseLeave}
                        className="relative w-75 h-75 lg:w-96 lg:h-96 cursor-pointer perspective-1000">
                        {/* Static Star Background */}
                        <div className="absolute -inset-4 lg:-inset-20 bg-linear-to-l from-[#f97316] via-[#fb923c] to-[#f59e0b] rotate-12 star-shape z-0"
                            data-aos='zoom-in'
                            data-aos-delay='600'>
                        </div>

                        {/* Moving Image */}
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="relative w-full h-full z-10">
                            <img
                                src={about}
                                alt="About Image"
                                className='absolute inset-0 w-full h-full object-cover z-10 transition-all duration-300'
                                data-aos='zoom-in'
                                data-aos-delay='400'
                                style={{
                                    transform: "translateZ(20px)"
                                }}
                            />
                        </motion.div>
                    </div>

                </figure>
                <article
                    data-aos='fade-left'
                    data-aos-delay='300'
                    className='text-center lg:text-left relative order-1 lg:order-2'>
                    <header>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text'
                            data-aos='fade-up'
                            data-aos-delay='400'>
                            About me
                        </h1>
                    </header>
                    <p className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-orange-900/10 to-orange-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                        data-aos='fade-up'
                        data-aos-delay='500'>
                        I am an early-career Java Developer with a focus on Spring Boot and microservices-based backend development. I work with Java, Object-Oriented Programming, Spring Boot, REST APIs, and SQL to build clean, scalable, and well-structured services. I prioritize clear design, separation of concerns, and maintainable code over quick solutions. My approach is systematic—understanding requirements, designing APIs thoughtfully, and implementing reliable backend logic. I am seeking a Java / Spring Boot Developer or Intern role where I can contribute to real-world systems, learn from experienced engineers, and grow into a dependable backend engineer.
                    </p>
                    <div className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8'>
                        <div className='text-center' data-aos='zoom-in' data-aos-delay='650'>
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>5+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Education
                            </div>
                        </div>
                        <div className='text-center' data-aos='zoom-in' data-aos-delay='650'>
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>5+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Months Experience
                            </div>
                        </div>
                        <div className='text-center' data-aos='zoom-in' data-aos-delay='650'>
                            <div className='text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400'>10+</div>
                            <div className={`text-xs sm:text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Projects Completed
                            </div>
                        </div>
                    </div>
                    {/* <button className={`w-full sm:w-auto border-2 border-orange-500 inline-flex items-center justify-center py-2 px-4 sm:px-6 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform ${darkMode ? 'text-white bg-orange-500/10' : 'text-gray-800 bg-white/90'}`}
                        data-aos='fade-up'
                        data-aos-delay='800'>
                        Learn More

                    </button> */}
                </article>
            </div>

        </section>
    )
}

export default About
