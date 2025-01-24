import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { personalImg } from "../assets/index";
import { useDeviceContext } from "../context/DeviceContext";

const Hero = () => {
  const { isMobile } = useDeviceContext(); 

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <div className="absolute left-1 top-0] ">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-primary" />
              <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-transparent" />
            </div>
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-transparent to-primary" />
              <div className="w-5 h-5 rounded-full bg-primary" />
            </div>
          </div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-primary">Mostapha</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am Front End Developer <br className="block md:hidden " />
            with Strong Problem-Solving Abilities & ACommitment To Delivering
            High-Quality
          </p>
        </div>
        <div className="relative rounded-full overflow-hidden shadow-2xl border-4 border-primary h-96 w-80 md:max-h-80 ">
          <img
            src={personalImg}
            alt="Personal"
            className="w-full h-full "
          />
        </div>
      </div>
      {
        !isMobile &&    <div className="hidden md:inline">
        <ComputersCanvas />
      </div>
      }
  
    </section>
  );
};

export default Hero;
