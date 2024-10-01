import React, { useState, lazy, Suspense } from 'react';
import { FaGithub, FaBlog, FaPython, FaAws, FaDocker, FaMicrosoft, FaReact, FaHtml5, FaCss3Alt, FaRProject } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiFlask, SiMongodb, SiElasticsearch, SiC, SiCplusplus, SiJavascript } from 'react-icons/si';

import universityImage from './images/sejong-logo.svg';
import project1Image from './images/sejongmate-logo.png';
import internImage from './images/ETRI-logo.png';
import project2Image from './images/HelloWorld-logo.png';
import me from './images/me.jpg';

const ProjectDescription = lazy(() => import('./components/ProjectDescription'));

const ProjectModal = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div className="bg-gray-800 p-8 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6 flex-grow overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">{project.event}</h2>
        {project.isDetailedProject ? (
          <Suspense fallback={<div>로딩 중...</div>}>
            <ProjectDescription projectId={project.id} />
          </Suspense>
        ) : (
          <p className="text-white text-lg">{project.description}</p>
        )}
      </div>
      <button 
        onClick={onClose}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        닫기
      </button>
    </div>
  </div>
);

const TimelineItem = ({ id, year, event, description, isHighlighted, imageSrc, isLeft, isMinor, isDetailedProject }) => {
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className={`flex ${isMinor ? 'items-start mb-12' : 'items-center mb-36'} ${isLeft ? 'flex-row-reverse' : ''}`}>
        <div className={`w-5/12 ${isLeft ? 'text-left' : 'text-right'} px-4`}>
          <div className={`mb-2 ${isLeft ? 'text-left' : 'text-right'}`}>
            <span className="font-bold text-gray-300 text-xl">{year}</span>
          </div>
          <div 
            className={`p-4 rounded-lg shadow-lg ${
              isHighlighted ? 'bg-blue-900 text-white' : 'bg-gray-800 text-gray-300'
            } cursor-pointer hover:opacity-80`}
            onClick={() => setShowModal(true)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h3 className="text-xl font-bold mb-2">{event}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className={`w-2/12 flex justify-center ${isMinor ? 'h-32 items-center' : ''}`}>
          <div className="relative flex items-center justify-center">
            {isMinor ? (
              <div className={`w-6 h-6 rounded-full ${
                isHighlighted ? 'bg-blue-500' : 'bg-gray-500'
              } z-10`}></div>
            ) : (
                <div 
                className={`w-32 h-32 rounded-full border-4 overflow-hidden ${
                  isHighlighted ? 'border-blue-500' : 'border-gray-500'
                } z-10 transition-transform duration-300 ease-in-out ${
                  isHovered ? 'transform scale-110' : ''
                }`}
              >
                <div className="w-full h-full bg-no-repeat" 
                     style={{
                       backgroundImage: `url(${imageSrc || "/api/placeholder/128/128"})`,
                       backgroundPosition: 'center',
                       backgroundSize: 'contain',
                       backgroundColor: '#f0f0f0',
                     }}>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-5/12"></div>
      </div>
      {showModal && (
        <ProjectModal 
          project={{ id, event, description, isDetailedProject }} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};


const TechStackCategory = ({ title, items }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2 text-gray-300">{title}</h3>
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-center bg-gray-700 rounded-full px-3 py-1 text-sm hover:bg-gray-600 transition-colors duration-200">
          {item.icon}
          <span className="ml-2">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const AboutMe = () => {
  const techStack = {
    "Languages": [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "R", icon: <FaRProject className="text-blue-600" /> },
      { name: "C", icon: <SiC className="text-blue-300" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-400" /> }
    ],
    "Frameworks": [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-red-500" /> },
      { name: "Flask", icon: <SiFlask className="text-green-500" /> }
    ],
    "Databases": [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "Elasticsearch", icon: <SiElasticsearch className="text-yellow-500" /> }
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: "Azure", icon: <FaMicrosoft className="text-blue-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> }
    ],
    "Web": [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }
    ]
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-32 mx-auto max-w-5xl">
      <div className="flex flex-col items-center space-y-12">
        {/* About Me Section */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          <div className="w-48 h-48 overflow-hidden mb-6 rounded-full shadow-xl">
            <img src={me} alt="홍석주" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            안녕하세요, 세종대학교 데이터사이언스학과에서 공부하고 있는 홍석주입니다. 
            NLP, 특히 Conversation System에 관심이 많으며, 최근에는 RAG를 활용한 LLM 챗봇과 클라우드 환경에서의 서비스 배포를 공부하고 있습니다.
          </p>
        </div>

        {/* Github/Blog Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Github/Blog</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/BambooStreet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaGithub size={36} />
            </a>
            <a href="https://bamboostreet.github.io/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-200">
              <FaBlog size={36} />
            </a>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="text-center w-full">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          {Object.entries(techStack).map(([category, items]) => (
            <TechStackCategory key={category} title={category} items={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelinePortfolio = () => {
  const events = [
    { 
      id: 'university',
      year: '2019.03', 
      event: "세종대학교 입학", 
      description: "세종대학교 국어국문학과 19학번으로 입학",
      isHighlighted: false, 
      imageSrc: universityImage 
    },
    { 
      id: 'military',
      year: '2020.03~2021.09', 
      event: "군 복무", 
      description: "대한민국 육군, 화천 GOP에서 18개월 동안 복무",
      isHighlighted: false, 
      imageSrc: null, 
      isMinor: true 
    },
    { 
      id: 'major-change',
      year: '2022.03~', 
      event: "데이터사이언스학과 전과", 
      description: "국어국문학과에서 데이터사이언스학과로 전과",
      isHighlighted: false, 
      imageSrc: null, 
      isMinor: true 
    },
    { 
      id: 'sejongmate',
      year: '2023.03~2023.06', 
      event: "프로젝트1: SejongMate", 
      description: "세종대학교 학생들을 위한 챗봇 애플리케이션 'SejongMate'",
      isHighlighted: true, 
      imageSrc: project1Image,
      isDetailedProject: true
    },
    { 
      id: 'etri-intern',
      year: '2023.07~2023.08', 
      event: "인턴: ETRI", 
      description: "한국전자통신연구원(ETRI) 언어지능연구실에서 2개월간 인턴 근무",
      isHighlighted: true, 
      imageSrc: internImage,
      isDetailedProject: true
    },
    { 
      id: 'helloworld',
      year: '2024.06~2024.10', 
      event: "프로젝트2: HelloWorld", 
      description: "외국인 근로자를위한 통합 플랫폼 'HelloWorld'",
      isHighlighted: true, 
      imageSrc: project2Image,
      isDetailedProject: true
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-16 text-center">Welcome! SeokJoo Hong's Portfolio</h1>
      <AboutMe />
      <div className="max-w-6xl mx-auto relative">
        <h1 className="text-4xl font-bold mb-16 text-center">Works</h1>
        <div className="absolute w-1 bg-gray-400 h-full left-1/2 transform -translate-x-1/2"></div>
        {events.map((item, index) => (
          <TimelineItem key={index} {...item} isLeft={index % 2 !== 0} />
        ))}
      </div>
    </div>
  );
};

export default TimelinePortfolio;