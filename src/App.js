import "./App.css";
import {
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHouseDamage,
  FaSlack,
  FaMedium,
  FaFacebook,
  FaDiscord,
  FaWhatsapp,
} from "react-icons/fa";

function App() {
  // const [progarm1, setprogram1] = useState<number | null>(null);

  // const progams = [
  //   {

  //   }
  // ]
  return (
    <section className="px-4 max-w-[100%] bg-[#1f1f21] py-4 flex">
      <div className="border-[2px] border-[#2f2e30] rounded-2xl items-center flex justify-center w-[26%] h-[95vh]">
        <div className="grid grid-flow-row w-[50vh]">
          <h1 className="flex justify-around text-[#fff] py-[10%]">
            <span>Solo_Learn</span>
            <span>
              Framer Designer <br />
              <span className="relative left-[22%]">& Developer</span>
            </span>
          </h1>

          <div className="flex justify-center">
            <img
              className="rounded-lg w-[46vh]"
              src="https://imgs.search.brave.com/KDDpw5EnSBJeN6ZSMM2VeFaaL7xgaH3flJ-S76XOAgg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/OC8xMy8wMC8wOS93/b21hbi04MTg2NTgy/XzY0MC5qcGc"
            />
          </div>
          <div className="grid grid-flow-row text-[#fff] text-center py-3">
            <h1 className="">Solomonisaac@gmail.com</h1>
            <h1 className="py-2 ">Base in Akwa Ibom State, Nigeria</h1>
          </div>
          <div className="text-center">
            <h1 className="text-[#979797]">2022 Solomon. All Right Reserved</h1>
            <div className="flex justify-center gap-[11px] py-6">
              <div className="hover:border-[#ff6433] border-[1px] text-[#959595] w-9 h-9 flex justify-center items-center rounded-full">
                <FaTwitter />
              </div>
              <div className="hover:border-[#ff6433] border-[1px] text-[#959595] w-9 h-9 flex justify-center items-center rounded-full">
                <FaGithub />
              </div>
              <div className="hover:border-[#ff6433] border-[1px] text-[#959595] w-9 h-9 flex justify-center items-center rounded-full">
                <FaInstagram />
              </div>
              <div className="hover:border-[#ff6433] border-[1px] text-[#959595] w-9 h-9 flex justify-center items-center rounded-full">
                <FaLinkedin />
              </div>
            </div>
            <div className="py-6 flex justify-center">
              <button className="flex justify-center font-bold text-[15px] text-[#fff] items-center bg-[#ff6433] border-none h-[7vh] w-[40vh] rounded-full gap-[8px] outline-none">
                <FaEnvelope /> Hire Me!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] px-9">
        <div className="px-[20px]">
          <div className="flex justify-between">
            <button className="flex justify-center text-[#959595] border-[#959595] items-center gap-[4px] cursor-pointer border-[1px] w-[20%] h-9 rounded-full">
              <FaHouseDamage /> INTRODUCE
            </button>
            <button className="flex w-[4%] justify-center rounded-full border-[#959595] text-[#959595] border-[1px] items-center">
              <FaHouseDamage />
            </button>
          </div>
          <div className="grid py-[8%]">
            <span className="text-[50px] text-[#fff] font-semibold outline-none">
              Say Hi from <span className="text-[#ff6433]">Solomon,</span>{" "}
              <br /> Frammer Designer and <br /> Developer
            </span>
            <span className="outline-none py-5 text-[#7c7b7b]">
              I design and code beautiful simple things and i love what i do{" "}
              <br /> just simple like that!
            </span>
          </div>
        </div>
        <div className="absolute right-0 gap-[20%] top-[35%] px-[5%]">
          <div className="icons text-[#979797]">
            <FaLinkedin />
          </div>
          <div className="text-[#979797]">
            <FaTwitter />
          </div>
          <div className="text-[#979797]">
            <FaMedium />
          </div>
          <div className="text-[#979797]">
            <FaFacebook />
          </div>
          <div className="text-[#979797]">
            <FaGithub />
          </div>
          <div className="text-[#979797]">
            <FaDiscord />
          </div>
          <div className="text-[#979797]">
            <FaWhatsapp />
          </div>
          <div className="text-[#979797]">
            <FaSlack />
          </div>
        </div>

        <div className="flex gap-20 px-4">
          <ul>
            <strong className="text-[40px] font-bold text-[#ff6433]">
              10+
            </strong>
            <li className="grid text-[#979797] text-[11px] font-semibold">
              <span>YEARS OF</span>
              <span>EXPERIENCE</span>
            </li>
          </ul>
          <ul>
            <strong className="text-[40px] font-bold text-[#ff6433]">
              182+
            </strong>
            <li className="grid text-[#979797] text-[11px] font-semibold">
              <span>PROJECTS COMPLETED ON</span>
              <span>15 COUNTRIES</span>
            </li>
          </ul>
        </div>

        <div className="py-9 px-4">
          <button className="flex items-center text-[#959595] w-[12%] h-9 justify-center font-bold text-[18px] rounded-full border-[1px] border-[#959595] ">
            {" "}
            <FaGithub /> About
          </button>
          <div className="text-[#959595]">
            <span className="text-[#959595] text-[12px] font-semibold">
              Every Great Design begin with <br /> an even better story
            </span>
            <p className="text-[#959595] text-[12px] font-semibold">
              Since beginning my journey as a freelance designer nearly 8 years
              ago, <br /> I've remote works for agencies consulted for startups,
              and colleborated <br /> talented people to create degital products
              for both busness and consumer use. <br /> I'm am quietly
              confident, naturally curious, and prepetually working and
              improving my <br /> chopson design problem at a time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
