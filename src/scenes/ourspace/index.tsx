import img5 from "@/assets/image5.png";
import Img1 from "@/assets/img1.jpeg";
import img3 from "@/assets/img3.jpeg";
import img6 from "@/assets/img6.jpeg";
import img4 from "@/assets/yoga.jpg";
import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<any> = [
  {
    name: "Weight Training Classes",
    description:
      "Get stronger with Weight Training Classes. Build muscle and boost fitness.",
    image: Img1,
  },
  {
    name: "Yoga classes",
    description:
      "Find your inner peace and flexibility with Yoga Classes. Join us for a holistic journey of physical and mental wellness.",
    image: img5,
  },
  {
    name: "Fitness Classes",
    description:
      "Elevate your fitness with us. Join our community for a healthier, happier you.",
    image: img6,
  },
  {
    name: "Private Training Classes",
    description:
      "Elevate your fitness journey with Private Training. Personalized guidance for exceptional results.",
    image: img3,
  },
  {
    name: "PILATE Classes ",
    description:
      "Elevate your fitness journey with Private Training. Personalized guidance for exceptional results.",
    image: img4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Ourspace = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-amber-200 py-40" id="ourspace">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurSpace)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Space</HText>
            <p className="py-5">
              Our gym classes are your ticket to a healthier, happier you. From
              invigorating workouts to expert guidance, we offer an array of
              classes designed to meet your fitness goals. Join us and discover
              the joy of fitness with our supportive community.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2000px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Ourspace;
