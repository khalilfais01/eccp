import { card, card2, down, home, not, sms, user, wallet } from '../assets/icons/icons'
import { air, asu, dje, logo, telecom, visa } from "../assets/imgs"

const Sidebar = () => {
	return (

	    <aside className="w-full h-screen">

	      <div className="h-full w-full px-3 py-4 overflow-y-auto bg-white ">
	        <div className="flex justify-center items-center mb-4">
	          <img src={logo} className="w-full"/>
	        </div>

	          <ul className="flex-col justify-center items-center space-y-2 font-medium">
	            <li className="">
	                <a href="#" className="flex items-center p-4 mx-auto text-white rounded-lg bg-[#0056A3] group w-full">
	                  <img src={home} />
	                  <span className="hidden ml-4">Dashboard</span>
	                </a>
	            </li>
	            <li className="">
	                <a href="#" className="flex items-center p-4 mx-auto text-black rounded-lg  group w-full">
	                  <img src={wallet}/>
	                  <span className="hidden ml-4">Wallet</span>
	                </a>
	            </li>
	            <li className="">
	                <a href="#" className="flex items-center p-5 mx-auto text-black rounded-lg group w-full">
	                  <img src={sms}/>
	                  <span className="hidden ml-4">SMS Notification</span>
	                </a>
	            </li>
	            <li className="">
	                <a href="#" className="flex items-center p-4 mx-auto text-black rounded-lg  group w-full">
	                  <img src={card}/>
	                  <span className="hidden ml-4">Golden Card</span>
	                </a>
	            </li>
	            <li className="">
	                <a href="#" className="flex items-center p-4 mx-auto text-black rounded-lg  group w-full">
	                  <img src={card2} alt="" />
	                  <span className="hidden ml-4">CheckBook</span>
	                </a>
	            </li>
	            <li className="">
	                <a href="#" className="flex items-center p-4 mx-auto text-black rounded-lg  group w-full">
	                  <img src={user} alt="" />
	                  <span className="hidden ml-4">Profile</span>
	                </a>
	            </li>
	          </ul>
	      </div>
    </aside>

	)
}
export default Sidebar