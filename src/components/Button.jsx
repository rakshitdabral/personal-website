import ResumePath from '../assets/resume.pdf'

const Button = ({children}) => {
  return (
    <a href={ResumePath} download="resume.pdf" className="md:max-w-[400px] hover:cursor-pointer flex items-center gap-2 px-3 md:px-4 lg:px-5 py-4 font-display font-semibold text-lg leading-[24px] text-white bg-black  rounded hover:bg-primary">
      {children}
    </a>
  )
}

export default Button