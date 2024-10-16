"use client"
import Image from "next/image"
import { CustomButton } from "./CustomButton"

export const Hero = () => {
    const handleScroll = () => {
      // console.log("hi");
    }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
            Find Book, rent a car __ <br/> quick and super easy!
        </h1>
        <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking process.
        </p>npm rund ev 
       <CustomButton
         title="Explorecars"
         containerStyles="bg-primary-blue text-white rounded-full mt-10"
         handleClick={handleScroll}
       />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

