"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reavel-effect";

const Approach = () =>  {
  return (
    <div className="py-20">

      <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center">
      Mijn
        <span className="text-teal-500"> Benadering</span>
      </h1>  

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-zinc-50 dark:bg-black w-full gap-4 mx-auto px-8">
        <Card 
          title="Planning & Strategie" 
          icon={<AceternityIcon order="Phase 1" />}
          description="We doen een volledige screening. Totdat we allebei tevreden zijn."
          >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-cyan-500 rounded-3xl overflow-hidden"
            dotSize={4}
          />
        </Card>
        <Card 
          title="Ontwikkeling & Voortgang" 
          icon={<AceternityIcon order="Phase 2" />}
          description="Ik ga over op ontwikkelen en hou je over op de hoogte."
          >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-teal-500 rounded-3xl overflow-hidden"
            dotSize={4}
          />
        </Card>
        <Card 
          title="Oplevering & Ondersteuning" 
          icon={<AceternityIcon order="Phase 3" />}
          description="Zet het Champagne maar vast koud want dit is het einde! Echter niet van onze relatie want ben bereikbaar voor ondersteuning indien nodig of gewenst."
          >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-violet-500 rounded-3xl overflow-hidden"
            dotSize={4}
          />
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-zinc-300/30 shadow-xl group/canvas-card flex items-center justify-center  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
    >

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl text-center text-zinc-50 opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white text-zinc-50 text-sm text-center opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="shadow-xl shadow-teal-300/70 px-8 py-2 bg-gradient-to-br from-teal-300 to-cyan-400 rounded-md text-zinc-50 text-4xl font-semibold transition duration-200 ease-linear">
        {order}
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default Approach