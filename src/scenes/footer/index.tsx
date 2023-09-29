import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-sky-100 py-8">
      0
      <div className="mx-auto w-5/6 justify-start gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="log" />
          <p className="my-5">
            "Stay Fit, Stay Happy. Your Wellness, Our Priority."
          </p>
          <p> &copy; Heechem All Rights reserved.</p>
          <p className="mx-5">(325)254-6852</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
