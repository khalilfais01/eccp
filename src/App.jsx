//0056A3
//F3F3F3
//FFFFFF
//ECECEC
//FFF00E
//0B0B0B
// FONT DM Sans
import { air, asu, dje, logo, telecom, visa } from "./assets/imgs"
import { card, card2, down, home, not, sms, user, wallet } from './assets/icons/icons'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import Sidebar  from './componets/Sidebar'
import Navbar  from './componets/Navbar'
import Home from './pages/Home'
import React, { useState } from 'react'
import { FaHome, FaWallet, FaEnvelope, FaCreditCard, FaUser } from 'react-icons/fa';
function App() {

  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleOpen = () => {
    setOpen(!open)
    setShow(!show)
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex justify-between items-center w-full">

          <div className={`${show ? 'inline' : 'hidden'} md:inline bg-black w-full md:w-[85px] h-screen`}>
              <aside className="w-full h-screen">
                <div className="h-full w-full px-3 py-4 overflow-y-auto bg-white ">
                  <div className="flex justify-end items-center mb-4">
                    {/*<img src={logo} className="w-full"/>*/}

                  <div className={`inline md:hidden w-[30px] h-[30px] flex justify-center items-center cursor-pointer`} onClick={handleOpen}>
                    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" />

                  </div>

                  </div>
                  <div className="flex justify-center items-center mb-4 cursor-pointer">
                    <Link to="/" className="flex justify-center items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/AlgeriePoste.svg/502px-AlgeriePoste.svg.png" className="w-1/2 h-1/2"/>
                    </Link> 
                  </div>

                    <ul className="flex-col justify-center items-center space-y-2 font-medium">
                      <li className="">
                        <Link
                          to="/"  // Update the "to" prop to the appropriate path
                          className={`flex items-center p-4 mx-auto text-black rounded-lg group w-full ${
                            activeLink === "/" ? "bg-[#0056A3] text-white" : ""
                          }`}
                          onClick={() => handleLinkClick("/")}
                        >
                          <div className="flex justify-center items-center"><FaHome className={`w-[30px] h-[30px] ${
                            activeLink === "/" ? "text-[#fff]" : "text-gray-400"
                          }`}/></div>
                          <span className="md:hidden ml-4">Dashboard</span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/wallet"  // Update the "to" prop to the appropriate path
                          className={`flex items-center p-4 mx-auto text-black rounded-lg group w-full ${
                            activeLink === "wallet" ? "bg-[#0056A3] text-white" : ""
                          }`}
                          onClick={() => handleLinkClick("wallet")}
                        >
                          <div className="flex justify-center items-center">
                            <FaWallet className={`w-[30px] h-[30px] ${
                              activeLink === "wallet" ? "text-[#fff]" : "text-gray-400"
                            }`}/>
                          </div>
                          <span className="md:hidden ml-4">Wallet</span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/sms" 
                          className={`flex items-center p-4 mx-auto text-black rounded-lg group w-full ${
                            activeLink === "sms" ? "bg-[#0056A3] text-white" : ""
                          }`}
                          onClick={() => handleLinkClick("sms")}
                        >
                          <div className="flex justify-center items-center">
                            <FaEnvelope className={`w-[30px] h-[30px] ${
                              activeLink === "sms" ? "text-[#fff]" : "text-gray-400"
                            }`}/>
                          </div>
                          <span className="md:hidden ml-4">SMS Notification</span>
                        </Link>
                      </li>

                      <li className="">
                        <Link
                          to="/gold" 
                          className={`flex items-center p-4 mx-auto text-black rounded-lg group w-full ${
                            activeLink === "gold" ? "bg-[#0056A3] text-white" : ""
                          }`}
                          onClick={() => handleLinkClick("gold")}
                        >
                          <div className="flex justify-center items-center">
                            <FaCreditCard className={`w-[30px] h-[30px] ${
                              activeLink === "gold" ? "text-[#fff]" : "text-gray-400"
                            }`}/>
                          </div>
                          <span className="md:hidden ml-4">Golden Card</span>
                        </Link>
                      </li>

                      <li className="">
                        <Link
                          to="/check" 
                          className={`flex items-center p-4 mx-auto text-black rounded-lg group w-full ${
                            activeLink === "check" ? "bg-[#0056A3] text-white" : ""
                          }`}
                          onClick={() => handleLinkClick("check")}
                        >
                          <div className="flex justify-center items-center">
                            <FaCreditCard className={`w-[30px] h-[30px] ${
                              activeLink === "check" ? "text-[#fff]" : "text-gray-400"
                            }`}/>
                          </div>
                          <span className="md:hidden ml-4">CheckBook</span>
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/profile" 
                          className={`flex items-center p-4 mx-auto text-black rounded-lg group w-full ${
                            activeLink === "profile" ? "bg-[#0056A3] text-white" : ""
                          }`}
                          onClick={() => handleLinkClick("profile")}
                        >
                          <div className="flex justify-center items-center">
                            <FaUser className={`w-[30px] h-[30px] ${
                              activeLink === "profile" ? "text-[#fff]" : "text-gray-400"
                            }`}/>
                          </div>
                          <span className="md:hidden ml-4">Profile</span>
                        </Link>
                      </li>

                    </ul>
                </div>
            </aside>
          </div>
          <div className={`${open ? 'hidden' : 'inline'} bg-gray-100 w-full h-screen`}>
            <div className="flex justify-between ml-[2px] py-1 px-1 items-center w-full bg-white">
                 <div className="inline md:hidden w-[30px] h-[30px] flex justify-center items-center cursor-pointer" onClick={handleOpen}>
                    
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" />

                  </div>
                <div className="text-md md:text-xl font-bold tracking-[1px] pl-1 text-center text-black">
                  Welcome, Ahmed!
                </div>
                <div className="flex justify-center items-center px-5">
                  <div className="flex justify-center items-center pr-2 md:pr-7">
                    <img src={not} className=""/>
                    <span className="pl-2 text-[#6b6b6b] hidden md:inline">Notification</span>
                  </div>
                  <div className="flex justify-center items-center h-[70px] pl-2 md:pl-7 border-l-2 border-gray-200">
                    <div className="w-[38px] h-[38px] rounded-full bg-black p-5">

                    </div>
                    <div className="hidden md:flex-col justify-center items-center pl-1 md:pl-4">
                      <h2 className="text-xl text-black">
                        Ahmed
                      </h2>
                      <h2 className="text-sm text-[#6b6b6b]">
                        002292**
                      </h2>
                    </div>
                    <div className="pl-2 md:pl-5">
                      <img src={down} alt="" />
                    </div>
                  </div>          
                </div>
            </div>
            <div className={`${open ? 'hidden' : 'inline'} md:inline md:block md:flex w-full justify-start w-full bg-gray-100 h-screen`}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="wallet" element={<><h1>wallet</h1></>} />
                  <Route path="sms" element={<><h1>sms</h1></>} />
                  <Route path="gold" element={<><h1>gold</h1></>} />
                  <Route path="check" element={<><h1>CheckBook</h1></>} />
                  <Route path="profile" element={<><h1>Profile</h1></>} />
                  <Route path="*" element={<><h1>Notfound</h1></>} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
