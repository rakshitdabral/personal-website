import IBM from "../assets/edunet.svg";
import STUDIO from "../assets/studio.svg";
import ExperienceCard from "../components/ExperienceCard";

const experienceData = [
  {
    company: "Internship Studio",
    role: "Machine Learning Intern",
    period: "August 2024 - September-2024",
    description: "As a Machine Learning Engineer at Internship Studio, I gained valuable hands-on experience in the field. My internship focused on understanding and applying machine learning algorithms to real-world projects. I delved into various algorithms, learning their strengths and weaknesses. Additionally, I explored artificial neural networks and their applications. By the end of my internship, I successfully developed a YouTube ad view prediction model using an ANN, integrating the knowledge acquired throughout the program.",
    logoSrc: STUDIO
    },
    {
    company: "Edunet Foundation",
    role: "Emerging Technologies (AI & Cloud)",
    period: "July 2024 - August-2024",
    description: "During my one-month remote Machine Learning internship at Edunet Foundation, specializing in WatsonX and Cloud Pak. Applied acquired knowledge to a Telecom Churn data analytics project. Leveraged IBM-provided datasets to construct a predictive model identifying factors contributing to customer churn.",
    logoSrc: IBM
    }
]

const Experience = () => {
  return (
    <section className="flex  justify-center items-center overflow-hidden px-20 py-16 bg-black max-md:px-5">
    <div className="flex  overflow-hidden flex-col  px-8 min-w-[240px] w-[1280px] max-md:px-5 max-md:max-w-full">
        <h2 className="flex overflow-hidden flex-wrap gap-4 justify-center items-center py-5 w-full text-5xl tracking-tighter leading-none text-white whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          <span className="self-stretch my-auto max-md:text-4xl">My</span>
          <span className="self-stretch my-auto font-extrabold max-md:text-4xl">Experience</span>
        </h2>
        <div className="flex gap-4 flex-wrap overflow-hidden flex-col px-6 py-10 mt-5 w-full max-md:px-5 max-md:max-w-full">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              company={experience.company}
              role={experience.role}
              period={experience.period}
              description={experience.description}
              logoSrc={experience.logoSrc}
            />
          ))}
          </div>
      </div>
    </section>
  );
};

export default Experience;
