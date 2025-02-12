import React from 'react'
import Logos from '../assets/images/logo.svg'
import HeroImg from '../assets/images/image-hero-desktop.webp'
import ArrowDown from '../assets/images/icon-arrow-down.svg'
const Hero = () => {
  return (
    <div className="min-h-screen  overflow-y-hidden ">
      <img src={Logos} alt="" />
      <div className="flex flex-row items-center justify-evenly mt-36">
        <div id="card-left" className="flex flex-col max-w-xl">
          <h1 className="text-6xl font-bold ">
            Join the ultimate tech book club
          </h1>
          <p className="pt-5">
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>
          <button className="text-center border mt-5 w-fit py-2 px-3 rounded-sm">
            Review MemberShip Options
            <img src={ArrowDown} alt="" className="inline-block pl-2" />
          </button>
        </div>
        <div id="card-right" className="flex max-w-lg">
          <img
            src={HeroImg}
            alt=""
            className="w-full h-auto rounded-lg self-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
