"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Card() {
  return (
    <div className="mx-12 xl:flex xl:flex-row justify-items-center grid grid-cols-1 gap-10 place-content-center py-20">

      <div className="bg-gradient-to-tl from-cyan-300/70 via-green-300/30 to-pink-100/10 justify-center relative group/card shadow-lg shadow-cyan-300/70 dark:bg-black dark:border-white/[0.2] border-black/[0.2] rounded-xl p-6 xl:w-2/4 w-full h-auto">
        <div className="text-sm md:text-4xl font-bold text-gray-700 dark:text-white">
          Hi, mijn naam is Randy
        </div>
        <div className="text-gray-700 text-sm md:text-2xl max-w-l mt-4 md:mt-14 dark:text-neutral-300">
          Jouw persoonlijke Gids in het Digitale Landschap.
        </div>
        <div className="text-gray-700 text-sm md:text-2xl max-w-l mt-4 md:mt-7 dark:text-neutral-300">
          Al heel mijn leven, help ik stakeholders met het vinden van structurele oplossingen op hun problemen. 
        </div>
        <div className="text-gray-700 text-sm md:text-2xl max-w-l mt-4 md:mt-7 dark:text-neutral-300">
          Wat mij dit heeft geleerd is dat men niet altijd op zoek is naar een IT-specialist. 
        </div>


        <div className="grid">
          <div className="justify-self-center mt-8">
          <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Man%20Superhero%20Dark%20Skin%20Tone.png" alt="Man Superhero Dark Skin Tone" width="150" height="150" />
          </div>
          <div className="text-gray-950 text-lg md:text-2xl font-semibold max-w-l mt-4 dark:text-neutral-300 justify-self-center">
            Maar iemand om mee te Sparren.
          </div>
        </div>
      </div>
      <CardContainer className="inter-var">
        <CardBody className="bg-zinc-50 transition duration-300 relative group/card shadow-xl shadow-cyan-300/50 hover:shadow-green-300/50 dark:bg-black dark:border-white/[0.2] border-black/[0.2] w-full h-auto rounded-xl p-6">
          <CardItem
            translateZ="50"
            className="text-base md:text-xl font-bold text-gray-700 dark:text-white"
          >
            Een Sociale IT-er
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-gray-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Samen vertalen we technische vraagstukken naar gerealiseerde oplossingen.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/IMG_1005.JPG"
              height="1000"
              width="1000"
              className="h-48 md:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="grid">
            <div className="flex justify-between items-center mt-10 justify-self-center text-zinc-400">
              Akureyri IJsland was enig.
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

export default Card