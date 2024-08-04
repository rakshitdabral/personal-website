import BoyGraphic from '../assets/boy.png'
import Github from '../assets/github.svg'
import LeetCode from "../assets/leetcode.svg"
import LinkedIn from "../assets/linkedin.svg"
import SocialButton from '../components/SocialButton'

const socialLinks = [
  {
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/rakshit-dabral/"
  },
  {
    icon: LeetCode,
    link: "https://leetcode.com/u/rakshitdabral/"
  },
  {
    icon: Github,
    link: "https://github.com/rakshitdabral"
  },
]

const Hero = () => {
  return (
    <div className=" sm:px-12 sm:py-[32px] md:px-16 md:py-[48px] lg:px-20 lg:py-[60px] flex flex-flow ">
      <div className="px-8 flex flex-col lg:flex-row-reverse md:justify-between sm:flex items-center gap-5 lg:gap-10">
        <img src={BoyGraphic} className='h-auto md:max-w-[500px]'/>
        <div className="space-y-5">
          <h1 className="font-sora text-5xl leading-[56px] text-black">
            Hello I&apos;am <span className="font-extrabold">Rakshit Dabral.</span>
          </h1>
          <h2 className="font-sora text-5xl leading-[56px] text-black">
            <span className="font-extrabold">AI/ML</span> Engineer
          </h2>
          <h2 className="font-sora  text-5xl leading-[56px] text-black">
            Based In <span className="font-extrabold">India.</span>
          </h2>
          <p className="text-zinc-500 font-display py-4">
            I&apos;m Rakshit Dabral Aspiring AI/ML Engineer with a strong foundation in deep learning. Proficient in developing and implementing innovative models to address complex challenges. Passionate about leveraging AI to create real-world solutions.
          </p>

          <div className='flex gap-5 items-center flex-wrap'>
            { socialLinks.map((socialItem) => {
              return (
                <SocialButton 
                  key={socialItem.link} 
                  icon={socialItem.icon} 
                  link={socialItem.link} 
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;