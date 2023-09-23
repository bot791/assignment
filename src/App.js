import React from "react";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.09,
    },
  },
};

export const App = () => {
  return (
    <div className="  sm:m-0 sm:w-full content-center w-[95%]">
      <div className="">
        <div className=" sm:relative sm:top-48 block m-auto">
          <motion.h1
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" font-stylish ml-10 text-3xl font-bold"
          >
            Be a Part of Something Great
          </motion.h1>
          <motion.h4
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="mt-2 font-martian ml-10 text-lg font-semibold"
          >
            Quesque quam felis,volutpat sit amet scelerisque
            <br />
            eget,vestibulum blamditvelit.Nulla vestibulum
          </motion.h4>
        </div>
        <motion.img
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" sm:w-[95%] sm:ml-2 ml-24 w-full relative top-0 right-2"
          src="./images/image 51.png"
          alt=""
        />
      </div>
      <div className=" sm:w-[95%] sm:mt-16 sm:ml-10 flex sm:flex-row flex-col items-center">
        <div className=" sm:basis-1/4 sm:flex sm:flex-col m-4">
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" shadow-lime sm:m-2 m-10 sm:h-[250px] sm:w-[250px] w-[95%] ml-14 border ring-1 ring-emerald-600 rounded-md p-4 bg-white"
          >
            <img
              className=" mt-4 h-[20px] w-[20px]"
              src="./images/Vector-2.png"
              alt=""
            />
            <h2 className=" font-plain mt-5 font-bold text-lg">
              Large Beautiful Office
            </h2>
            <h6 className=" font-plain mt-3 font-semibold text-sm">
              Quesque quam felis,volutpat sit amet scelerisque Quesque quam
              felis,volutpat sit amet scelerisque
            </h6>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="shadow-lime sm:m-2 m-10 sm:h-[250px] sm:w-[250px] w-[95%] ml-14 border ring-1 ring-red-500 rounded-md p-4 bg-white"
          >
            <img
              className=" mt-4 h-[20px] w-[20px]"
              src="./images/Vector-4.png"
              alt=""
            />
            <h2 className=" font-plain mt-5 font-bold text-lg">
              Easy Location
            </h2>
            <h6 className=" font-plain mt-3 font-semibold text-sm">
              Quesque quam felis,volutpat sit amet scelerisque Quesque quam
              felis,volutpat sit amet scelerisque
            </h6>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="shadow-lime sm:m-2 sm:h-[250px] sm:w-[250px] w-[95%] ml-14 border ring-1 ring-pink-500 rounded-md p-4 bg-white"
          >
            <img
              className=" mt-4 h-[20px] w-[20px]"
              src="./images/Group 1000001907.png"
              alt=""
            />
            <h2 className=" font-plain mt-5 font-bold text-lg">
              Performance Award
            </h2>
            <h6 className=" font-plain mt-3 font-semibold text-sm">
              Quesque quam felis,volutpat sit amet scelerisque Quesque quam
              felis,volutpat sit amet scelerisque
            </h6>
          </motion.div>
        </div>
        <div className=" sm:basis-1/4 flex flex-col relative top-10 ">
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" shadow-lime sm:m-2 sm:h-[250px] sm:w-[250px] w-[95%] ml-14 border ring-1 ring-yellow-300 rounded-md p-4 bg-white"
          >
            <img
              className=" mt-4 h-[20px] w-[20px]"
              src="./images/Vector-3.png"
              alt=""
            />
            <h2 className=" font-plain mt-5 font-bold text-lg">
              Great Co-workers
            </h2>
            <h6 className=" font-plain mt-3 font-semibold text-sm">
              Quesque quam felis,volutpat sit amet scelerisque Quesque quam
              felis,volutpat sit amet scelerisque
            </h6>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" shadow-lime sm:m-2 m-6 sm:h-[250px] sm:w-[250px] w-[95%] ml-14 border ring-1 ring-sky-500 rounded-md p-4 bg-white"
          >
            <img
              className=" mt-4 h-[20px] w-[20px]"
              src="./images/Vector-5.png"
              alt=""
            />
            <h2 className=" font-plain mt-5 font-bold text-lg">
              Educational Opportunities
            </h2>
            <h6 className=" font-plain mt-3 font-semibold text-sm">
              Quesque quam felis,volutpat sit amet scelerisque Quesque quam
              felis,volutpat sit amet scelerisque
            </h6>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="shadow-lime sm:m-2 sm:h-[250px] sm:w-[250px] w-[95%] ml-14 border ring-1 ring-blue-700 rounded-md p-4 bg-white"
          >
            <img
              className=" mt-4 h-[20px] w-[20px]"
              src="./images/Vector-6.png"
              alt=""
            />
            <h2 className=" font-plain mt-5 font-bold text-lg">
              Easy Access to Leadership
            </h2>
            <h6 className=" font-plain mt-3 font-semibold text-sm">
              Quesque quam felis,volutpat sit amet scelerisque Quesque quam
              felis,volutpat sit amet scelerisque
            </h6>
          </motion.div>
        </div>
        <div className=" sm:basis-1/2 sm:top-80 mt-20 ml-24">
          <motion.h1
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" font-plain text-3xl font-bold"
          >
            Perks and Benefits
          </motion.h1>
          <motion.h4
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" font-martian font-semibold text-md mt-5"
          >
            Quesque quam felis,volutpat sit amet scelerisque Quesque quam
            felis,volutpat sit amet scelerisque Quesque quam felis,volutpat sit
            amet scelerisque Quesque quam felis,volutpat sit amet scelerisque
          </motion.h4>
          <motion.button
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" font-martian duration-200 ease-in font-bold text-white mt-5 p-4 items-center bg-orange-400 hover:bg-blue-500 ring-2 ring-white rounded-md"
          >
            Learn more
          </motion.button>
        </div>
      </div>
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex flex-row m-20"
      >
        <h1 className=" font-stylish sm:basis-1/3 basis-1/2 text-3xl font-bold">
          We are Looking For Talented People
        </h1>
        <h4 className=" font-plain sm:basis-2/3 ml-20 text-lg font-semibold">
          Quesque quam felis,volutpat sit amet scelerisque Quesque quam
          felis,volutpat sit amet scelerisque Quesque quam felis,volutpat sit
          amet scelerisque Quesque quam felis,volutpat sit amet scelerisque
        </h4>
      </motion.div>
      <div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" shadow-neon relative w-[88%] bg-white sm:block sm:m-auto sm:ml-16 ml-16 p-2 rounded-sm"
        >
          <h1 className=" font-martian absolute top-1 right-2 text-xs font-light">
            25 Jobs Available
          </h1>
          <h2 className=" font-plain text-2xl font-bold p-2 absolute top-0 left-1 ">
            Current Openings
          </h2>
          <div className=" mt-14">
            <input
              className=" m-auto block  p-2 ring-2 ring-yellow-200 w-[70%]"
              type="text"
              placeholder="Search jobs"
            />
          </div>
        </motion.div>
        <div className=" sm:flex mt-16 m-2 sm:space-x-5 sm:justify-evenly sm:ml-0 ml-24">
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" p-5 shadow-neon rounded-md bg-white m-5 "
          >
            <h1 className=" font-bold text-2xl">UI Developer</h1>
            <h2 className=" font-semibold">Labkafe | Full-Time</h2>
            <h5>
              Responsibility:
              <br />
              *dfgd dgcg bfb ydcysg
              <br />
              *dfgd dgcg bfb ydcysg
            </h5>
            <button className=" font-martian ease-in duration-200 mt-4 h-[40px] w-[100px] font-bold p-2 text-white bg-amber-500 hover:bg-teal-500 rounded-full text-center">
              Apply
            </button>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="shadow-neon p-5 rounded-md bg-white m-5"
          >
            <h1 className=" font-bold text-2xl">UI Developer</h1>
            <h2 className=" font-semibold">Labkafe | Full-Time</h2>
            <h5>
              Responsibility:
              <br />
              *dfgd dgcg bfb ydcysg
              <br />
              *dfgd dgcg bfb ydcysg
            </h5>
            <button className=" font-martian ease-in duration-200 mt-4 h-[40px] w-[100px] font-bold p-2 text-white bg-amber-500 hover:bg-teal-500 rounded-full text-center">
              Apply
            </button>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="shadow-neon p-5 rounded-md bg-white m-5"
          >
            <h1 className=" font-bold text-2xl">UI Developer</h1>
            <h2 className=" font-semibold">Labkafe | Full-Time</h2>
            <h5>
              Responsibility:
              <br />
              *dfgd dgcg bfb ydcysg
              <br />
              *dfgd dgcg bfb ydcysg
            </h5>
            <button className=" font-martian ease-in duration-200 mt-4 h-[40px] w-[100px] font-bold p-2 text-white bg-amber-500 hover:bg-teal-500 rounded-full text-center">
              Apply
            </button>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="shadow-neon p-5 rounded-md bg-white m-5"
          >
            <h1 className=" font-bold text-2xl">UI Developer</h1>
            <h2 className=" font-semibold">Labkafe | Full-Time</h2>
            <h5>
              Responsibility:
              <br />
              *dfgd dgcg bfb ydcysg
              <br />
              *dfgd dgcg bfb ydcysg
            </h5>
            <button className=" font-martian  duration-200 ease-in mt-4 h-[40px] w-[100px] font-bold p-2 text-white bg-orange-500 hover:bg-teal-500 rounded-full text-center">
              Apply
            </button>
          </motion.div>
        </div>
        <div>
          <motion.button
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" font-martian  duration-200 ease-in bg-blue-500 hover:bg-blue-400 mt-10  block sm:m-auto ml-32 p-2 rounded-full text-sm font-bold text-center text-white "
          >
            View all openings
          </motion.button>
        </div>
      </div>
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" flex flex-row"
      >
        <div className=" basis-1/2 items-center m-10">
          <h1 className=" font-stylish text-center text-3xl font-bold">
            Fun at
            <br />
            Workplace
          </h1>
        </div>
        <div className=" basis-1/2 items-center m-10">
          <h5 className=" font-mono text-left text-lg font-semibold">
            Quesque quam felis,volutpat sit amet scelerisque Quesque quam
            felis,volutpat sit amet scelerisque Quesque quam felis,volutpat sit
            amet scelerisque Quesque quam felis,volutpat sit amet scelerisque
          </h5>
        </div>
      </motion.div>
      <div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" sm:flex sm:flex-row sm:space-x-2 sm:m-2"
        >
          <div>
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" sm:m-0 m-5 ml-10"
              src="./images/Rectangle 3150.png"
              alt=""
            />
          </div>
          <div>
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" sm:pb-3 sm:m-0 m-5 ml-16"
              src="./images/Rectangle 3152.png"
              alt=""
            />
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" sm:m-0 m-5 ml-16"
              src="./images/Rectangle 3153.png"
              alt=""
            />
          </div>
          <div>
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" sm:m-0 m-5 ml-10"
              src="./images/Rectangle 3151-1.png"
              alt=""
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className=" sm:flex sm:flex-row sm:space-x-2 sm:m-2"
        >
          <div>
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="sm:m-0 m-5 ml-10"
              src="./images/Rectangle 3150-1.png"
              alt=""
            />
          </div>
          <div>
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" sm:m-0 m-5 ml-10"
              src="./images/Rectangle 3151.png"
              alt=""
            />
          </div>
          <div>
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className=" sm:pb-3 sm:m-0 m-5 ml-20"
              src="./images/Rectangle 3154.png"
              alt=""
            />
            <motion.img
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="sm:m-0 m-5 ml-20"
              src="./images/Rectangle 3153-1.png"
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className=" sm:shadow-gray sm:flex sm:flex-row sm:space-x-4 sm:mt-20 sm:bg-white rounded-lg w-[80%] sm:m-auto h-[455px] sm:mb-10"
      >
        <div className=" sm:grid sm:grid-cols-2">
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="col-span-1 bg-purple-300 m-2 h-[200px] sm:w-[200px] w-[415px] rounded-lg border border-purple-700"
          >
            <img
              className=" animate-bounce mt-4 h-[30px] w-[30px] ml-6"
              src="./images/Group.png"
              alt=""
            />
            <h1 className=" font-plain text-lg font-bold ml-6 mt-1">
              Contact Us
            </h1>
            <h2 className=" font-plain text-sm font-semibold mt-2 ml-6">
              We are on a mission to standardize lab education
            </h2>
            <button className=" font-martian duration-200 ease-in text-white mt-2 ml-6 bg-purple-600 text-center p-2 rounded-full ring-1 ring-white hover:bg-purple-500">
              Join us
            </button>
          </motion.div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" col-span-1 bg-lime-300 m-2 h-[200px] sm:w-[200px] w-[415px] rounded-lg border border-lime-700"
          >
            <img
              className=" animate-bounce mt-4 h-[30px] w-[30px] ml-6"
              src="./images/Group-1.png"
              alt=""
            />
            <h1 className=" font-plain text-lg font-bold ml-6 mt-1">
              Call Us!
            </h1>
            <h2 className=" font-plain text-sm font-semibold mt-2 ml-6">
              Speak to our lab exparts we are happy to help
            </h2>
            <button className=" font-martian duration-200 ease-in text-white mt-2 ml-6 bg-lime-700 text-center p-2 rounded-full ring-1 ring-white hover:bg-lime-500">
              Dive in
            </button>
          </motion.div>

          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" col-span-2 bg-orange-300 m-2 h-[220px] w-[415px] rounded-lg border border-lime-700"
          >
            <img
              className=" animate-bounce mt-4 h-[40px] w-[40px] ml-6"
              src="./images/Vector-7.png"
              alt=""
            />
            <h1 className=" font-plain text-lg font-bold ml-6 mt-2">
              Don't like Calls?
            </h1>
            <h2 className=" font-plain text-sm font-semibold mt-4 ml-6">
              We got you covered.Drop a mail or just a chat with us on
              <br />
              Whatsapp.We are available for you
            </h2>
            <button className=" font-martian duration-200 ease-in  text-white mt-2 ml-6 bg-gray-700 text-center p-2 rounded-full ring-1 ring-white hover:bg-gray-500">
              Chat
            </button>
            <button className=" font-martian duration-200 ease-in text-white mt-2 ml-6 bg-orange-700 text-center p-2 rounded-full ring-1 ring-white hover:bg-orange-500">
              I prefer email
            </button>
          </motion.div>
        </div>
        <div>
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" bg-white rounded-lg sm:p-0 p-10 w-full  sm:ml-0 ml-14 sm:mt-0 mt-10  mb-10 "
          >
            <h1 className=" font-plain text-3xl font-bold mt-2 mb-4">
              Let's get in touch
            </h1>
            <form>
              <label className=" mt-4" for="fname">
                First name:
              </label>
              <input
                className=" border-b border-gray-400 mt-4"
                type="text"
                id="fname"
                name="fname"
              />
              <label className=" mt-4" for="lname">
                Last name:
              </label>
              <input
                className=" border-b border-gray-400 mt-4"
                type="text"
                id="lname"
                name="lname"
              />
              <br />
              <label className=" mt-4" for="fname">
                Email:
              </label>
              <input
                className=" border-b border-gray-400 mt-4"
                type="text"
                id="fname"
                name="fname"
              />
              <label className=" mt-4" for="lname">
                Mobile number:
              </label>
              <input
                className=" border-b border-gray-400 mt-4"
                type="text"
                id="lname"
                name="lname"
              />
              <br />
              <p className=" font-bold text-lg mt-5">Select subject:</p>
               
              <input type="radio" id="html" name="fav_language" /> 
              <label for="html">General Inquiry</label>
                <input type="radio" id="css" name="fav_language" /> 
              <label for="css">Complain</label>
              <input type="radio" id="javascript" name="fav_language" /> 
              <label for="javascript">Specific</label>
              <input type="radio" id="javascript" name="fav_language" /> 
              <label for="javascript">Other</label>
              <br />
              <p className=" mt-5">
                <label for="message">Message:</label>
              </p>
              <textarea className=" mt-5 border-b border-gray-400 sm:h-[100px] sm:w-[415px] w-[200px]"></textarea>
              <br />
              <button className=" font-martian duration-200 ease-in p-2 text-center rounded-lg bg-orange-500 hover:bg-orange-400 ring-1 ring-gray-500 text-white font-bold m-2">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default App;
