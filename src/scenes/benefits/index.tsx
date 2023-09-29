import Lindner from "@/assets/lindner.jpg";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { PrestationsType, SelectedPage } from "@/shared/types";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Prestation from "./Prestation";

const prestations: Array<PrestationsType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "House of the Gym Lovers",
    description:
      "Welcome to the House of the Gym Lovers, where fitness is a way of life.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Fitness with experts",
    description:
      "Join us for Fitness with Experts and elevate your workout experience.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 " />,
    title: "Groupe and Private classes",
    description:
      "Discover the perfect balance between Group and Private classes at our fitness center.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Prestations = ({ setSelectedPage }: Props) => {
  return (
    <section id="prestations" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Prestations)}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>GYM FROM ANOTHER WORLD.</HText>
          <p className="my-5 text-sm">
            "Experience the best at our gym: Top-tier equipment, Expert trainers
            with diverse classes , added to Nutrition support & Flexible
            memberships Join us for a fitter you!"
          </p>
          {/* Prestations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="mt-5 items-center justify-between gap-8 md:flex"
          >
            {prestations.map((item: PrestationsType) => (
              <Prestation
                key={item.title}
                title={item.title}
                icon={item.icon}
                description={item.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>
          {/* Graphics and description  */}

          <div className="mt-16 items-center justify-between gap-20  md:mt-28 md:flex">
            {/* Graphic */}
            <img
              className="m-4 mx-auto h-[490px] w-[553px] rounded-lg"
              src={Lindner}
              alt=""
            />
            {/* Short description */}
            <div>
              {/* title */}
              <div className="relative">
                <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-Abstractwaves">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <HText>
                      Happy members getting{" "}
                      <span className=" text-cyan-300">HEALTHY</span>
                    </HText>
                  </motion.div>
                </div>
              </div>
              {/*description  */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5">
                  Our happy gym members are at the heart of our fitness family.
                  Your dedication and enthusiasm light up our gym every day,
                  inspiring others to pursue their wellness goals. Together, we
                  create an uplifting and motivating environment where everyone
                  thrives. Thank you for being a part of our fitness journey!
                </p>
                <p className="mb-5">
                  Beyond the physical benefits, our healthy members enjoy a
                  boost in confidence and a greater sense of overall well-being,
                  making every aspect of life more fulfilling.
                </p>
              </motion.div>

              {/* Button */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles ">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Join Now
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Prestations;
