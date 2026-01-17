
import Java from '../assets/Java.png'
import SpringBoot from '../assets/SpringBoot.png'
import Microservices from '../assets/Microservices.png'
import Kafka from '../assets/Kafka.png'
import Redis from '../assets/Redis.png'
import Docker from '../assets/Docker.png'
import ReactIcon from '../assets/React.png'
import Js from '../assets/Js.png'
import MySql from '../assets/MySql.png'
import Python from '../assets/Python.png'
import JWT from '../assets/JWT.png'
import Postman from '../assets/Postman.png'
import Github from '../assets/Github.png'


import SystemDesign from '../assets/SystemDesign.png'
import AWS from '../assets/AWS.png'
import GenAI from '../assets/GenerativeAi.png'

const Skills = ({ darkMode }) => {
    const skills = [
        {
            name: 'Java', icon: Java, level: 95,
            color: 'from-orange-500 to-red-500',
            link: 'https://docs.oracle.com/en/java/'
        },
        {
            name: 'Python', icon: Python, level: 88,
            color: 'from-blue-500 to-yellow-500',
            link: 'https://www.python.org/doc/'
        },
        {
            name: 'JavaScript', icon: Js, level: 90,
            color: 'from-yellow-400 to-yellow-600',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            name: 'React.js', icon: ReactIcon, level: 90,
            color: 'from-cyan-400 to-blue-500',
            link: 'https://react.dev/'
        },
        {
            name: 'Spring Boot', icon: SpringBoot, level: 92,
            color: 'from-green-500 to-emerald-500',
            link: 'https://spring.io/projects/spring-boot'
        },
        {
            name: 'Microservices', icon: Microservices, level: 88,
            color: 'from-purple-500 to-indigo-500',
            link: 'https://microservices.io/'
        },
        {
            name: 'JWT', icon: JWT, level: 85,
            color: 'from-pink-500 to-purple-500',
            link: 'https://datatracker.ietf.org/doc/html/rfc7519'
        },
        {
            name: 'Kafka', icon: Kafka, level: 85,
            color: 'from-gray-500 to-gray-900',
            link: 'https://kafka.apache.org/documentation/'
        },
        {
            name: 'Redis', icon: Redis, level: 80,
            color: 'from-red-500 to-rose-500',
            link: 'https://redis.io/docs/'
        },
        {
            name: 'Docker', icon: Docker, level: 85,
            color: 'from-blue-400 to-blue-600',
            link: 'https://docs.docker.com/'
        },
        {
            name: 'MySQL', icon: MySql, level: 92,
            color: 'from-blue-500 to-sky-500',
            link: 'https://dev.mysql.com/doc/'
        },
        {
            name: 'Postman', icon: Postman, level: 95,
            color: 'from-orange-400 to-orange-600',
            link: 'https://learning.postman.com/docs/introduction/overview/'
        },
        {
            name: 'GitHub', icon: Github, level: 90,
            color: 'from-gray-600 to-gray-900',
            link: 'https://docs.github.com/en'
        },
        {
            name: 'System Design', icon: SystemDesign, level: 85,
            color: 'from-gray-600 to-gray-800',
            link: 'https://bytes.usc.edu/~saty/courses/docs/data/SystemDesignInterview.pdf'
        },
        {
            name: 'AWS', icon: AWS, level: 80,
            color: 'from-orange-400 to-yellow-500',
            link: 'https://docs.aws.amazon.com/'
        },
        {
            name: 'Generative AI', icon: GenAI, level: 85,
            color: 'from-blue-400 to-purple-500',
            link: 'https://platform.openai.com/docs/introduction'
        }
    ]

    return (
        <section
            id="skills"
            style={{
                backgroundColor: darkMode ? '#111827' : '#f9fafb'
            }}
            className='py-14 relative overflow-hidden'>
            <div className='relative overflow-hidden'>
                <div className='container px-5 py-14 mx-auto'>
                    <div className='text-center mb-10' data-aos='fade-up'>
                        <h1 className='sm:text-4xl text-3xl font-bold title-font mb-4'
                            style={{ color: darkMode ? 'white' : '#1f2937' }}>
                            My <span
                                style={{
                                    background: 'linear-gradient(to right,#f97316,#f59e0b)',
                                    WebkitBackgroundClip: 'text',
                                    backgroundClip: 'text',
                                    color: 'transparent'
                                }}>
                                Skills
                            </span>

                        </h1>
                        <p className='text-lg max-w-2xl mx-auto leading-relaxed'
                            style={{
                                color: darkMode ? '#d1d5db' : '#4b5563'
                            }}>

                        </p>

                    </div>
                    <div className='flex flex-wrap -m-4'
                        data-aos='fade-up'
                        data-aos-delay='200'>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className='p-4 lg:w-1/4 md:w-1/2 w-full'
                                data-aos='fade-up'
                                data-aos-delay={`${300 + index * 100}`}>
                                <a href={skill.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <div
                                        style={{
                                            background: darkMode ? 'linear-gradient(to bottom right, #1f2937 , #111827)' : 'linear-gradient(to bottom right, #ffffff , #f3f4f6)',
                                            borderColor: darkMode ? '#374151' : '#e5e7eb'
                                        }}
                                        className='group h-full p-6 rounded-2xl border hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2
                                 hover:shadow-[0_0_30px_rgb(255,165,0,0,0.15)]'>
                                        <div className='flex items-center mb-6'>
                                            <div
                                                style={{
                                                    background: darkMode ? 'linear-gradient(to bottom right, #374151 , #1f2937)' : 'linear-gradient(to bottom right, #f3f4f6 , #e5e7eb)',

                                                }}
                                                className='w-16 h-16 rounded-xl p-3 flex items-center justiify-center group-hover:scale-110 transition-transform duration-300'>
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className='w-full h-full object-contain' />

                                            </div>
                                            <h3 className='text-xl font-bold ml-4'
                                                style={{
                                                    color: darkMode ? 'white' : '#1f2937'
                                                }}>
                                                {skill.name}
                                            </h3>

                                        </div>
                                        <div className='mb-2 flex justify-between items-center'>
                                            <span
                                                className='font-medium'
                                                style={{
                                                    color: darkMode ? '#d1d5db' : '#6b7280'
                                                }}>
                                                Proficiency
                                            </span>


                                        </div>
                                        <div className='w-full rounded-full h-3 overflow-hidden'
                                            style={{
                                                backgroundColor: darkMode ? '#374151' : '#e5e7eb'
                                            }}>
                                            <div className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                                                style={{
                                                    width: `${skill.level}%`
                                                }}>

                                            </div>
                                        </div>
                                        <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'} `}>
                                            <div className='h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3'
                                                style={{
                                                    background: 'linear-gradient(to right, #f97316, #f59e0b)'
                                                }}>

                                            </div>

                                        </div>

                                    </div>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills
