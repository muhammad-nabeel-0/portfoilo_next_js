import { animate,motion } from "framer-motion"

const startAnimation = {
  initial:{
    top:"0%"
  },
  animate:{
    top:"100%"
  },
  exit:{
    top:["100%","0%"]
  }
}

const reverseSteps = (index)=>{
  const totalSteps = 6
  return totalSteps - index - 1
}

const Stairs = () => {
  return (
    <>
    {[...Array(6)].map((_,index)=>{
      return (
      <motion.div key={index} initial="initial" animate="animate" variants={startAnimation} exit="exit" transition={{
        duration:0.4,
        ease:"easeInOut",
        delay:reverseSteps(index) * 0.1
      }}
      className="w-full h-full relative bg-white"

      />
    )
    })}
    </>
  )
}

export default Stairs
