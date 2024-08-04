
import Atom from "../assets/atom.png";
import Brain from "../assets/brain.png";
import Figma from "../assets/figma.svg";
import Github from "../assets/github.svg";
import GitIcon from "../assets/icon-git.png";
import Jupyter from "../assets/jupyter.svg";
import Python from "../assets/python.png";
import Tailwind from "../assets/tailwind.svg";
import SkillCard from "../components/SkillCard";
import VariableWeightText from "../components/VariableWeightText";

const skillsData = [
    {name:'Git' , logo : GitIcon},
    {name:'ML', logo:Brain},
    {name:'ReactJs', logo:Atom},
    {name:'Python', logo:Python},
    {name:'Jupyter' , logo:Jupyter},
    {name:'Github' , logo:Github},
    {name:'Figma' , logo:Figma},
    {name:'Tailwind' , logo:Tailwind}
]


const Skills = ()=>{
    return (
        <div className="bg-white px-4 py-10 md:px-16 md:py-[48px] lg:px-20 lg:py-[60px]">
      <div className="px-8 flex flex-col items-center gap-5">
        <VariableWeightText
          regularText="My"
          extraboldText="Skills"
          invert
        />
        <div className="mt-8 grid grid-cols-2 gap-x-6 sm:grid-cols-3 md:gap-x-8 md:grid-cols-4 md:gap-x-12 lg:grid-cols-5 lg:gap-x-12 gap-y-10">
          { skillsData.map(skill => {
            return <SkillCard 
              key={skill.skillName} 
              skillLogo={skill.logo} 
              skillName={skill.name}
            />
          })}
        </div>
      </div>
    </div>
    )
}

export default Skills;