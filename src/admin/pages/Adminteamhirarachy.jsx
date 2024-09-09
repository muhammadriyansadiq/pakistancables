// import React, { useEffect, useState } from "react";
// import Admindasjboardcomponents from "../components/Admindashboardcomponents";
// import { Button, Dropdown, Space } from 'antd';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { BiSolidCategory } from "react-icons/bi";
// import { MdOutlineLocalPostOffice } from "react-icons/md";
// import { FaFirstOrder } from "react-icons/fa";
// import { MdOutlineProductionQuantityLimits } from "react-icons/md";
// import Chart from "react-apexcharts";
// import PakistanMap from "../components/Map";
// import AdminNavbar from "../components/AdminNavbar";
// import { useSelector } from "react-redux";
// import { IoIosArrowUp } from "react-icons/io";
// import CircularProgressBar from "../components/Circularprogreessbar";
// import "../../App.css";
import Orgchart from "./Orgchart";
// const Adminteamhirarachy = () => {
//   console.log("inner width", window.outerWidth);

//   const collapsed = useSelector((state) => state.counter.collapsed);
//   const see = useSelector((state) => state.counter.see);

// //   let percentage = 39;

//   // bar chart data
// //   const chartData = {
// //     series: [
// //       {
// //         name: "Clicks",
// //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 345, 23, 34], // Example data for clicks
// //       },
// //       {
// //         name: "Page Views",
// //         data: [80, 100, 90, 120, 100, 130, 150, 170, 200, 234, 54, 234], // Example data for page views
// //       },
// //     ],
// //     options: {
// //       chart: {
// //         type: "bar",
// //         height: 350,
// //       },
// //       plotOptions: {
// //         bar: {
// //           horizontal: false,
// //           columnWidth: "55%",
// //           endingShape: "rounded",
// //         },
// //       },
// //       dataLabels: {
// //         enabled: false,
// //       },
// //       stroke: {
// //         show: true,
// //         width: 2,
// //         colors: ["transparent"],
// //       },
// //       xaxis: {
// //         categories: [
// //           "Jan",
// //           "Feb",
// //           "Mar",
// //           "Apr",
// //           "May",
// //           "Jun",
// //           "Jul",
// //           "Aug",
// //           "Sep",
// //           "oct",
// //           "nov",
// //           "dec",
// //         ],
// //       },
// //       yaxis: {
// //         title: {
// //           text: "Count",
// //         },
// //       },
// //       fill: {
// //         opacity: 1,
// //       },
// //       tooltip: {
// //         y: {
// //           formatter: (val) => `${val} clicks`,
// //         },
// //       },
// //     },
// //   };

// //   useEffect(() => {
// //     // Initialize AOS
// //     AOS.init({
// //       duration: 1000,
// //       once: false, // Set to false so that animations run on every scroll
// //     });

// //     // Add scroll event listener to refresh AOS animations
// //     const handleScroll = () => {
// //       AOS.refresh(); // Refresh AOS on scroll
// //     };

// //     window.addEventListener('scroll', handleScroll);

// //     // Clean up the event listener on component unmount
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);
//   return (
//     <>
//       <div className="flex w-full shadow-lg mb-[-26px]">
//         {/* ====This see state function on small width side bar hide ==== side bar unhide by the toggle btn click */}
//         {see ? <Admindasjboardcomponents collapsed={collapsed} /> : ""}
//         <div
//           className={` overflow-hidden relative homeright right min-h-screen  xs: ${
//             see ? "w-[88%]" : "w-[100%]"
//           }  lg:w-full  bg-[#f4f5f8] `}
//         >
//           <AdminNavbar />

//             <div className="  ">
// <Orgchart />
//             </div>

//           <div className=" text-center py-2 absolute bottom-0 left-[10%]">
//         2024 © Rasket. Crafted by Techzaa
//       </div>
//         </div>

//       </div>

//     </>
//   );
// };

// export default Adminteamhirarachy;




import React, { useEffect, useState } from "react";
import Admindasjboardcomponents from "../components/Admindashboardcomponents";
import { Button, Dropdown, Space } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import Chart from "react-apexcharts";
import PakistanMap from "../components/Map";
import AdminNavbar from "../components/AdminNavbar";
import { useSelector } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";
import CircularProgressBar from "../components/Circularprogreessbar";
import "../../App.css";
const Adminteamhirarachy = () => {
  console.log("inner width", window.outerWidth);

  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);

  let percentage = 39;

  // bar chart data
  const chartData = {
    series: [
      {
        name: "Clicks",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 345, 23, 34], // Example data for clicks
      },
      {
        name: "Page Views",
        data: [80, 100, 90, 120, 100, 130, 150, 170, 200, 234, 54, 234], // Example data for page views
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "oct",
          "nov",
          "dec",
        ],
      },
      yaxis: {
        title: {
          text: "Count",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: (val) => `${val} clicks`,
        },
      },
    },
  };

  console.log("collapsed", collapsed)
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false, // Set to false so that animations run on every scroll
    });

    // Add scroll event listener to refresh AOS animations
    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS on scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="relative flex w-full shadow-lg mb-[-26px] ">
        {/* ====This see state function on small width side bar hide ==== side bar unhide by the toggle btn click */}
        <div className=" left">
          {see ? <Admindasjboardcomponents collapsed={collapsed} /> : ""}
        </div>


        <div
          className={`transition-all overflow-x-hidden duration-700 ease-in-out  homeright right min-h-screen ml-[-1px] w-[100%]   bg-[#f4f5f8] ${see ? "xs:ml-[60px]" : "ml-[0px]"}  ${collapsed ? "lg:ml-[60px]" : "lg:ml-[250px]"}  }  `}
        >
        
          <AdminNavbar />
          <div className=" content w-full">
            <Orgchart />
          </div>
          <div className=" text-center py-2 ">
            2024 © Rasket. Crafted by Techzaa
          </div>
        </div>

      </div>

    </>
  );
};

export default Adminteamhirarachy;



