import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorMonster from "@/assets/monster-energy-energy-drink.png";

import Whey from "@/assets/dymatize-logo.png";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Technogym from "@/assets/Technogym_Logo.png";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

function Home({ setSelectedPage }: Props) {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* title header */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext ">
                <img src={HomePageText} alt="home-page-logo" />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Welcome to <b> EvoGym,</b> your ultimate destination for fitness
              and wellness. Get ready to transform your life, achieve your
              fitness goals, and embark on a journey to a healthier, stronger
              you. Join us today and experience the power of dedication,
              determination, and sweat!
            </p>
          </motion.div>
          {/* Actions for the buttons */}
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUS)}
              href={`#${SelectedPage.ContactUS}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* image    */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-end">
          <img src={HomePageGraphic} alt="graphic logo" />
        </div>
      </motion.div>
      {/* Sponsors Logo  */}
      {isAboveMediumScreen && (
        <div className=" h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className=" flex w-3/5 justify-between">
              <img
                className="h-[50px] w-[130px] object-contain"
                src={SponsorMonster}
                alt="Monster-sponsor"
              />
              <img
                src={Whey}
                alt="Monster-sponsor"
                className="h-[50px] w-[130px] object-contain"
              />
              <img
                src={Technogym}
                alt="Monster-sponsor"
                className="h-[50px] w-[130px] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
