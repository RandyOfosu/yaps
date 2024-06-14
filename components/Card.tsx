"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Card() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-zinc-50 transition duration-300 relative group/card shadow-xl shadow-cyan-300/30 hover:shadow-green-300/30 dark:bg-black dark:border-white/[0.2] border-black/[0.2] w-auto h-auto rounded-xl p-6 border border-solid">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Een Sociale IT-er
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Samen vertalen we technische vraagstukken naar gerealiseerde oplossingen.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/IMG_1005.JPG"
            height="1000"
            width="1000"
            className="h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Card