import { card, card2, down, home, not, sms, user, wallet } from '../assets/icons/icons'
import { air, asu, dje, logo, telecom, visa } from "../assets/imgs"
const Navbar = () => {
	return (
      <div className="flex justify-between ml-[2px] py-1 px-1 items-center w-full bg-white">
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
	)
}
export default Navbar