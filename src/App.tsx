import { useEffect, useRef, useState } from "react";
import Logo from "./assets/logo.png";
import Person from "./assets/person.png";
import Woman from "./assets/woman.png";
import {
  MdSecurity,
  MdLocalFireDepartment,
  MdGroups,
  MdOutlineMail,
} from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

function App() {
  const [heroCount, setHeroCount] = useState(0);
  const heroText = [
    "Within your reach",
    "With experts in this field",
    "And the latest generation tools",
    "You don't have to make any effort",
  ];
  const heroRef = useRef<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (heroCount + 1 < heroText.length) {
        setHeroCount(heroCount + 1);
      } else {
        setHeroCount(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [heroCount]);

  return (
    <div className="flex flex-col min-h-screen max-w-[100vw] bg-slate-900 text-white overflow-hidden">
      <header className=" text-white  p-2 md:h-20  fixed w-full bg-slate-900 top-0 left-0 z-10">
        <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
          <h1>
            <img src={Logo} alt="logo" className="w-40 md:w-24" />
          </h1>
          <nav className="flex gap-2 text-xs md:text-base font-semibold">
            <a
              href="./"
              className="p-2 px-4 border-b-p-red border-b-2 hover:bg-white/20"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="p-2 px-4 border-b-p-red border-b-2 hover:bg-white/20"
            >
              About
            </a>
            <a
              href="#mission"
              className="p-2 px-4 border-b-p-red border-b-2 hover:bg-white/20"
            >
              Mission
            </a>

            <a
              href="#cases"
              className="p-2 px-4 border-b-p-red border-b-2 hover:bg-white/20"
            >
              Partners
            </a>
            <a
              href="#contact"
              className="p-2 px-4 border-b-p-red border-b-2 hover:bg-white/20"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <section className="bg-svg bg-full -shadow-inner block">
        <div className="container mx-auto  items-center justify-center min-h-[80vh] md:min-h-[calc(100vh-5rem)] grid md:grid-cols-2">
          <div className="flex items-center justify-center flex-col text-center text-p-green gap-2">
            <h2 className="text-6xl drop-shadow  font-black  block">
              Growth in the world of technology
            </h2>
            <h3
              className="text-4xl drop-shadow font-bold transition-all duration-300 text-white block"
              ref={heroRef}
            >
              {heroText[heroCount]}
            </h3>
          </div>
          <img src={Woman} alt="" className="self-end hidden md:block" />
        </div>
      </section>
      <section
        className=" flex items-center justify-center bg-p-blue pb-4"
        id="about"
      >
        <div className="container mx-auto grid md:grid-cols-2 bg-slate-900/60 rounded-lg p-4 gap-3 items-center justify-center w-5/6">
          <div className=" flex flex-col gap-2 order-2 md:order-1">
            <h2 className="text-3xl font-semibold text-center ">
              Integral Solutions Montilla
            </h2>
            <p className="p-2 flex flex-col gap-2 text-justify text-lg font-medium">
              We are a management and development company that helps people and
              micro-enterprises to become professional in the technological
              world.
              <br />
              Our services start from digital marketing, social media
              development to the creation and customization of websites as well
              as mobile and desktop applications.
              <br />
              With specialists in development and marketing we have years of
              quality service and guarantee.
            </p>
          </div>
          <img
            src={Logo}
            alt="enterprises"
            className="mx-auto order-1 md:order-2"
          />
        </div>
      </section>
      <section
        className="bg-full bg-no-repeat bg-svgl bg-p-blue min-h-[50vh]"
        id="mission"
      >
        <div className="container mx-auto flex flex-col items-center p-4 gap-3">
          <h2 className="text-3xl font-bold drop-shadow">Our Mission</h2>
          <p className="text-lg font-semibold drop-shadow text-center">
            To help smaller companies and professionals using the best channels
            and media available to increase their sales and differentiate their
            competition. media available to increase their sales and make the
            difference from their competition with professional services in:
          </p>
          <div className="grid md:grid-cols-3 gap-5 p-4 w-full items-center justify-center">
            <div className="flex gap-2 p-4 flex-col items-center justify-center  rounded-lg">
              <svg
                width="104"
                height="79"
                viewBox="0 0 104 79"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.1642 1.29602C91.0523 0.577042 89.7807 0.142077 88.4613 0.0293564C87.1418 -0.0833642 85.8148 0.129612 84.597 0.649563L44.6915 16.3584C43.7468 16.7428 42.7364 16.9403 41.7164 16.9402H16.1692C14.025 16.9402 11.9686 17.7916 10.4525 19.307C8.93634 20.8225 8.08458 22.8778 8.08458 25.0209V25.6674H0V45.0611H8.08458V45.9015C8.13524 48.0108 9.00932 50.0167 10.52 51.4904C12.0307 52.9641 14.0582 53.7888 16.1692 53.7882L25.8706 74.3455C26.5276 75.7299 27.5618 76.9009 28.8546 77.7242C30.1474 78.5476 31.6462 78.9897 33.1791 79H37.2537C39.3867 78.9829 41.4264 78.1241 42.9286 76.6105C44.4308 75.0969 45.2737 73.0513 45.2736 70.9193V54.564L84.597 70.2728C85.5642 70.6576 86.5958 70.855 87.6368 70.8547C89.2519 70.8286 90.8246 70.3346 92.1642 69.4325C93.228 68.7145 94.1054 67.7538 94.724 66.6296C95.3426 65.5055 95.6845 64.2503 95.7214 62.9679V7.95451C95.7155 6.63908 95.3884 5.34498 94.7684 4.1846C94.1485 3.02422 93.2546 2.03266 92.1642 1.29602ZM37.1891 25.0209V45.9015H16.1692V25.0209H37.1891ZM37.1891 70.9193H33.1144L25.1592 53.7882H37.1891V70.9193ZM47.6667 46.8711C46.8988 46.4789 46.098 46.1544 45.2736 45.9015V24.5684C46.0901 24.4 46.8907 24.1621 47.6667 23.8573L87.6368 7.95451V62.774L47.6667 46.8711ZM95.9154 27.2835V43.4449C98.0596 43.4449 100.116 42.5936 101.632 41.0781C103.148 39.5627 104 37.5074 104 35.3642C104 33.2211 103.148 31.1657 101.632 29.6503C100.116 28.1349 98.0596 27.2835 95.9154 27.2835Z"
                  fill="white"
                />
              </svg>

              <h3 className="text-2xl font-semibold">Marketing</h3>
            </div>
            <div className="flex gap-2 p-4 flex-col items-center justify-center  rounded-lg">
              <svg
                width="96"
                height="79"
                viewBox="0 0 96 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.36364 79C3.12727 79 2.09164 78.5787 1.25673 77.736C0.418909 76.8963 0 75.8546 0 74.6111C0 73.3676 0.418909 72.326 1.25673 71.4862C2.09164 70.6436 3.12727 70.2222 4.36364 70.2222H91.6364C92.8727 70.2222 93.9084 70.6436 94.7433 71.4862C95.5811 72.326 96 73.3676 96 74.6111C96 75.8546 95.5811 76.8963 94.7433 77.736C93.9084 78.5787 92.8727 79 91.6364 79H4.36364ZM13.0909 65.8333C10.6909 65.8333 8.63709 64.9746 6.92946 63.2571C5.21891 61.5366 4.36364 59.4694 4.36364 57.0556V8.77778C4.36364 6.36389 5.21891 4.29672 6.92946 2.57628C8.63709 0.858759 10.6909 0 13.0909 0H82.9091C85.3091 0 87.3644 0.858759 89.0749 2.57628C90.7825 4.29672 91.6364 6.36389 91.6364 8.77778V57.0556C91.6364 59.4694 90.7825 61.5366 89.0749 63.2571C87.3644 64.9746 85.3091 65.8333 82.9091 65.8333H13.0909ZM13.0909 57.0556H82.9091V8.77778H13.0909V57.0556Z"
                  fill="white"
                />
                <path
                  d="M68.4089 25.4147C71.1006 22.7232 69.8732 19.5795 68.4089 18.0507L61.9489 11.591C59.2357 8.8995 56.1133 10.1268 54.5845 11.591L50.9238 15.273H45.3467C41.2553 15.273 38.8867 17.4263 37.6808 19.9025L28.12 29.4628V38.0757L26.5911 39.5829C23.8994 42.296 25.1268 45.4182 26.5911 46.9469L33.0511 53.4066C34.2139 54.5694 35.4629 55 36.6472 55C38.1761 55 39.5757 54.2464 40.4155 53.4066L46.2295 47.5714H53.96C57.6207 47.5714 59.4726 45.289 60.1401 43.0496C62.5734 42.4036 63.9084 40.5519 64.4468 38.7432C67.7844 37.8819 69.0334 34.7166 69.0334 32.4988V26.0391H67.7629L68.4089 25.4147ZM64.7267 32.4988C64.7267 33.4678 64.3176 34.652 62.5734 34.652H60.42V36.8053C60.42 37.7742 60.0109 38.9585 58.2667 38.9585H56.1133V41.1117C56.1133 42.0807 55.7042 43.2649 53.96 43.2649H44.4638L37.4009 50.3275C36.7333 50.9519 36.3457 50.5859 36.1089 50.349L29.6704 43.9324C29.0459 43.2649 29.412 42.8774 29.6488 42.6405L32.4266 39.8413V31.2284L36.7333 26.922V30.3456C36.7333 32.951 38.456 36.8053 43.1933 36.8053C47.9307 36.8053 49.6533 32.951 49.6533 30.3456H64.7267V32.4988ZM65.3512 22.3571L61.6905 26.0391H45.3467V30.3456C45.3467 31.3145 44.9375 32.4988 43.1933 32.4988C41.4491 32.4988 41.04 31.3145 41.04 30.3456V23.8859C41.04 22.8954 41.4061 19.5795 45.3467 19.5795H52.6895L57.5991 14.6701C58.2667 14.0457 58.6543 14.4117 58.8912 14.6486L65.3296 21.0652C65.9541 21.7327 65.588 22.1203 65.3512 22.3571Z"
                  fill="white"
                />
              </svg>

              <h3 className="text-2xl font-semibold">Digital Consulting</h3>
            </div>
            <div className="flex gap-2 p-4 flex-col items-center justify-center  rounded-lg">
              <svg
                width="81"
                height="81"
                viewBox="0 0 81 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.4167 4H10.0833C8.46993 4 6.92261 4.64092 5.78177 5.78177C4.64092 6.92261 4 8.46993 4 10.0833V54.6944C4 56.3078 4.64092 57.8552 5.78177 58.996C6.92261 60.1369 8.46993 60.7778 10.0833 60.7778H70.9167C72.5301 60.7778 74.0774 60.1369 75.2182 58.996C76.3591 57.8552 77 56.3078 77 54.6944V34.4167M40.5 60.7778V77"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M56.7222 4L48.6111 12.1111L56.7222 20.2222M68.8888 4L76.9999 12.1111L68.8888 20.2222M20.2222 77H60.7777"
                  stroke="white"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3 className="text-2xl font-semibold">Development And Design</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="vision" className="flex flex-col gap-3 bg-svg bg-full">
        <div className="container mx-auto min-h-[50vh] flex flex-col gap-3 p-4">
          <p className="text-xl font-semibold text-justify">
            Passionate about Digital Marketing, Programming, Community
            Management and Digital Consultancy through communication through
            communication (visual and written) we love to "get the message
            across". We believe that that all professionals and organizations
            can improve their image, brand, communication, get more attention
            and not necessarily more attention and not necessarily only with
            money. It will change the perception you have of a agency, and you
            will feel us more like your own Marketing department, a specialized
            and professional team working for and and professional team working
            for and for the objectives set by you.
          </p>

          <div className="grid md:grid-cols-3 gap-3">
            <div className="flex items-center justify-center gap-3 flex-col">
              <MdSecurity className="text-6xl" />
              <h4 className="text-center  font-semibold text-lg">Integrity</h4>
              <p className="text-center font-medium">
                We are independent, honest, ethically driven.
                <br /> We are honored by our passion and our commitment to the
                work we undertake as a personal challenge and take full
                responsibility for the responsibility for their ultimate
                success.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 flex-col">
              <MdLocalFireDepartment className="text-6xl" />
              <h4 className="text-center  font-semibold text-lg">Passion</h4>
              <p className="text-center font-medium">
                Passion and courage are the pillars of our organization and the
                drivers of our success. With "Yes we can", our enthusiasm and
                passion Yes We Can", our enthusiasm and passion we will achieve
                extraordinary results in your company.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 flex-col">
              <MdGroups className="text-6xl" />
              <h4 className="text-center  font-semibold text-lg">Teamwork</h4>
              <p className="text-center font-medium">
                We are aware that our greatest virtue and our competitive edge
                is always teamwork. teamwork. That is why we continue to educate
                ourselves, to study, to learn from each other, we share
                information to improve every day throughout the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-svgl bg-full bg-p-blue">
        <div className="container mx-auto grid grid-cols-2 flex-col gap-3 items-center w-5/6">
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-lg md:text-3xl text-center font-bold">
              Contact with us
            </h2>
            <div className="flex gap-3 items-center justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=584121558961&text=Hola!%20Quiero%20generar%20mas%20ventas!"
                className="border-b-p-green border-b-2 hover:bg-white/20 p-2 text-xl md:text-6xl flex aspect-square items-center "
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/universalsim/"
                className="border-b-p-green border-b-2 hover:bg-white/20 p-2 text-xl md:text-6xl flex aspect-square items-center "
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:fabrizhioal.2011@gmail.com"
                className="border-b-p-green border-b-2 hover:bg-white/20 p-2 text-xl md:text-6xl flex aspect-square items-center "
              >
                <MdOutlineMail />
              </a>
            </div>
          </div>
          <img src={Person} alt="" className="self-end" />
        </div>
      </section>
    </div>
  );
}

export default App;
