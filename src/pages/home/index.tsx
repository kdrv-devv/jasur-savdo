import { Outlet } from "react-router-dom";
import { BsCoin } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";

const HomePage = () => {
  return (
    <section className=" min-h-screen bg-[#001e54] p-3 ">
      <div className="w-[95%] m-auto flex items-start gap-8 ">
        <div className="sidebar sticky top-2   bg-gradient-dark rounded-[20px] w-[24%] px-6 h-screen bg-[#ffff  p-2 flex flex-col gap-4 py-5  ">
          <div className="title pb-3 border-b border-[#d8d5d548]">
            <h1 className="text-xl sm:text-2xl  md:text-3xl font-[600]   leading-[100%] tracking-[0.18em] text-center gradient-text">
              Jasur Savdo
            </h1>
          </div>

          <div className="sidebar-links flex flex-col gap-4">
            <button className="w-full font-[600] flex items-center justify-start pl-6 gap-4 text-lg sm:text-xl text-white h-14 rounded-[15px] shadow-[0_4px_6px_0_rgba(0,0,0,0.02)] bg-[#c6cbe21f]">
              <span className="h-9 rounded-xl w-9 bg-[#0075ff] flex items-center justify-center">
                <BsCoin />
              </span>
              QARZLAR
            </button>

            <button className="w-full font-[600] flex items-center justify-start pl-6 gap-4 text-lg sm:text-xl text-white h-14 rounded-[15px] shadow-[0_4px_6px_0_rgba(0,0,0,0.02)]  hover:bg-[#c6cbe21f]">
              <span className="h-9 rounded-xl w-9 bg-[#0075ff] flex items-center justify-center">
                <FaTruck />
              </span>
              FIRMALAR
            </button>

             <button className="w-full font-[600] flex items-center justify-start pl-6 gap-4 text-lg sm:text-xl text-white h-14 rounded-[15px] shadow-[0_4px_6px_0_rgba(0,0,0,0.02)] hover:bg-[#c6cbe21f]">
              <span className="h-9 rounded-xl w-9 bg-[#0075ff] flex items-center justify-center">
               <LuNotebookPen />


              </span>
              RO'YXAT
            </button>
          </div>
        </div>

        <div className="content w-[70%] ">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
