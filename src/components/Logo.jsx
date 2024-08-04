

const Logo = ({invert = false}) => {
  return (
    <span className={`flex gap-3 items-center ${invert && 'invert'}`}>
      <p className='font-sora font-bold text-lg leading-[24px] text-black'>
        R D
      </p>
    </span>
  )
}

export default Logo