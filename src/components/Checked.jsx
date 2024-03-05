import React from 'react'
import { useTypewriter,Cursor } from "react-simple-typewriter";
export default function Checked() {
    const [text]=useTypewriter({
        words:['UI/UX Designer',"Web Developer",'AI ML Enthusiast'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:80,
      })

  return (
    <div>
      <h3 className="text-4xl sm:text-[55px]  font-bold inline  "><span className="text-[#0B8AC4]">{text}</span><span><Cursor></Cursor></span></h3>
    </div>
  )
}
