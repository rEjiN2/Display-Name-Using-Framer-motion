"use client"
import { motion } from "framer-motion"
import './Motion.module.css'

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

export const MyComponent = () => (
    <motion.svg
    width="1000"
    height="600"
    viewBox="0 0 1000 600"
    initial="hidden"
    animate="visible"
  >

    {/* Letter R */}
     <motion.line
        x1="220"
        y1="100"
        x2="220"
        y2="360"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
      <motion.line
        x1="220"
        y1="100"
        x2="350"
        y2="100"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="350"
        y1="100"
        x2="350"
        y2="200"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
      <motion.line
        x1="350"
        y1="200"
        x2="220"
        y2="260"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="260"
        x2="350"
        y2="360"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
{/* Letter R ends */}

{/* Letter E Starts */}
     

<motion.line
        x1="450"
        y1="250"
        x2="450"
        y2="360"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.line
        x1="450"
        y1="250"
        x2="550"
        y2="250"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.line
        x1="550"
        y1="250"
        x2="550"
        y2="290"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
<motion.line
        x1="450"
        y1="290"
        x2="550"
        y2="290"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
      <motion.line
        x1="450"
        y1="360"
        x2="550"
        y2="360"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

      {/* Letter E ends */}


      {/* Letter J Starts */}
      <motion.line
        x1="650"
        y1="250"
        x2="650"
        y2="460"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.line
        x1="650"
        y1="460"
        x2="600"
        y2="460"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.line
        x1="600"
        y1="460"
        x2="600"
        y2="400"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.rect
        width="5"
        height="5"
        x="648"
        y="230"
        rx="10"
        stroke="#0099ff"
        variants={draw}
        custom={3}
      />


{/* Letter J Ends Here */}


{/* Letter I starts Here */}

<motion.line
        x1="750"
        y1="250"
        x2="750"
        y2="360"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.rect
        width="5"
        height="5"
        x="748"
        y="230"
        rx="10"
        stroke="#0099ff"
        variants={draw}
        custom={3}
      />

{/* I ends Here */}


{/* N starts Here */}

<motion.line
        x1="850"
        y1="250"
        x2="850"
        y2="360"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.line
        x1="850"
        y1="250"
        x2="920"
        y2="250"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

<motion.line
        x1="920"
        y1="250"
        x2="920"
        y2="360"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />

    </motion.svg>
)