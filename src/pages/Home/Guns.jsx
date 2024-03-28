import { useState } from "react";

const Guns = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleContent = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className=" text-[#ece8e1] text-2xl py-5 text-center font-valorant bg-[rgb(17,17,17)] font-bold">
        <h1 className="font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] bg-gradient-to-r from-[#ff4655] to-red-700 py-2">
          YOUR GUNS
        </h1>
        <div className="px-3 mx-3 mt-3 font-mono text-base text-start drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h3 className="text-lg font-extrabold text-transparent text-balance bg-clip-text bg-gradient-to-l from-white to-gray-200">
            CALIBRATED CARNAGE{" "}
            <span className="ml-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 decoration-white/40 hover:underline">
              PRECISIOIN UNLEASHED
            </span>
          </h3>
          <p className="mt-3 font-sans text-base font-normal">
            In Valorant, a tactical first-person shooter game, the choice of
            weaponry plays a crucial role in determining your effectiveness on
            the battlefield. Here’s a brief overview of the guns available in
            the game:
            <br />
            {showMore && (
              <ol className="ml-4 list-disc">
                <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 ">
                  1. Assault Rifle:
                </h4>
                <li>
                  {" "}
                  <li>Cost: ¤ 2,900</li>
                  <li>Magazine: 25 / 75</li>
                  <li>Wall Penetration: Medium</li>
                  <li>
                    Versatile and effective at all ranges. It can one-shot to
                    the head and is best used with tap firing due to its quick
                    spray reset.
                  </li>
                </li>
                <h4 className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  2. Heavy Machine Gun:
                </h4>
                <li>
                  {" "}
                  <li>Cost: ¤3,200</li>
                  <li>Magazine: 100 / 200</li>
                  <li>Wall Penetration: High</li>
                  <li>
                    A suppressive fire weapon, useful for suppressing enemies
                    and breaking through walls.
                  </li>
                </li>
              </ol>
            )}
          </p>
          <button
            onClick={toggleContent}
            className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-blue-500 hover:underline focus:outline-none"
          >
            {showMore ? "Read less..." : "Read more..."}
          </button>
        </div>
        <div className="mt-3 sm:mt-6">
          <button className="font-mono font-bold transform -translate-x-1/2 top-52 bg-[#ff4655] px-1 text-base cursor-pointer aboslute left-1/2 hover:bg-[#191717] border-b-4 border-red-800 hover:border-cyan-400 rounded text-white ml-32">
            Explore GUNS
          </button>
        </div>
      </div>
    </>
  );
};

export default Guns;