import React from 'react';
import Logos from '../assets/images/logo.svg';
import HeroImg from '../assets/images/image-hero-desktop.webp';
import ArrowDown from '../assets/images/icon-arrow-down.svg';
import AvatarImg from '../assets/images/image-avatars.webp';
import Star from '../assets/images/icon-star.svg';

const Hero = () => {
  return (
    <div className="min-h-screen overflow-y-hidden">
      <img src={Logos} alt="" />
      <div className="flex flex-col lg:flex-row items-center justify-evenly mt-36">
        <div id="card-left" className="flex flex-col max-w-xl lg:max-w-2xl">
          <h1 className="text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-950">
            Join the ultimate tech book club
          </h1>
          <p className="pt-5">
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>
          <button className="text-center border mt-5 mb-10 w-fit py-2 px-3 rounded-sm">
            Review MemberShip Options
            <img src={ArrowDown} alt="" className="inline-block pl-2" />
          </button>

          <div className="flex">
            <img src={AvatarImg} alt="" width={100} className="" />
            <ul className="flex">
              <li>
                <img src={Star} alt="" />
              </li>
              <li>
                <img src={Star} alt="" />
              </li>
              <li>
                <img src={Star} alt="" />
              </li>
              <li>
                <img src={Star} alt="" />
              </li>
              <li>
                <img src={Star} alt="" />
              </li>
            </ul>
          </div>
          <p className="text-xs pl-26 text-blue-950">
            200+ developers joined already
          </p>
        </div>
        <div id="card-right" className="flex max-w-lg mt-10 lg:mt-0">
          <img
            src={HeroImg}
            alt=""
            className="w-full h-auto rounded-lg self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;