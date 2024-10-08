import ProjectCard from "../components/ProjectCard";
import VariableWeightText from "../components/VariableWeightText";

import Project1 from '../assets/project-1.jpg';
import Project2 from '../assets/project-2.png';
import Project3 from '../assets/project-3.jpg';
import Project4 from '../assets/project-4.jpg';

const projectsData = [
  {
    id: "01",
    title: "Kisan Seva",
    description: "An innovative app designed to empower farmers with advanced technology. Key features include real-time monitoring of soil conditions, automated irrigation based on machine learning predictions, access to up-to-date agricultural news, a personalized chatbot for farming advice, real-time weather updates, and AI-powered plant disease diagnosis through camera technology. This comprehensive app offers farmers a range of tools to optimize their farming practices and improve yields.",
    link: "https://github.com/rakshitdabral/farmer-help",
    image: Project1,  
  },
  {
    id: "02",
    title: "Rooftop solar energy potential map",
    description: "The Rooftop Solar Energy Potential Map project is a comprehensive initiative aimed at identifying and visualizing the potential for solar energy generation on rooftops within a specific geographic area. By leveraging advanced geospatial analysis and data-driven modeling, the project creates automatic solar energy consumption for the specific geographical area helping government decide where to plant solar planels",
    link: "https://github.com/rakshitdabral/Rooftop-Solar-Energy-Potential-Map",
    image: Project2,  
  },
  {
    id: "03",
    title: "Sign Language Recognition System",
    description: "This research project focuses on the development of a sign language recognition system employing a Convolutional Neural Network (CNN) architecture. Specifically, the project leverages the pre-trained VGG16 model through transfer learning to efficiently extract relevant features from image data and subsequently classify sign language gestures.",
    link: "https://github.com/rakshitdabral/sign-language-recognition",
    image: Project3,
  },
  {
    id: "04",
    title: "Sentiment Analysis on Web Fetched Articles",
    description: "This project is designed to conduct sentiment analysis on textual content extracted from a specified URL. To achieve this, the project leverages the Python programming language in conjunction with the requests library for retrieving article content and the nltk library for performing sentiment analysis.",
    link: "https://github.com/rakshitdabral/sentiment-analysis",
    image: Project4,
  }
]

const Projects = () => {
  return (
    <div className="bg-black px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Projects"
          invert
        />
        <div className="mt-8 flex flex-col gap-y-8">
          { projectsData.map(projectData => {
            return <ProjectCard 
              key={projectData.id} 
              projectData={projectData} 
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects;