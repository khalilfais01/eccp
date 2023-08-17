import Revenue from '../componets/Revenue'
import Chart from '../componets/Chart'
import Services from '../componets/Services'
import { air, asu, dje, logo, telecom, visa } from "../assets/imgs"
import { card, card2, down, home, not, sms, user, wallet } from '../assets/icons/icons'

const Home = () => {
	return(

<>
    <div className="w-full md:w-[60%] h-auto p-5 ">
        <Revenue />
        <Chart />
        <Services />
      </div>
      <div className="w-full bg-gray-100 p-5  ">
        <div className="flex-col w-full h-auto bg-gray-100">
            <div className="flex-col items-center justify-between w-full h-auto bg-white  border-2 border-white p-5 rounded-xl">
              <div className="flex justify-between items-center">
                <div className="text-xl text-black font-bold capitalize">
                  Total Revenue
                </div>
                <div className="text-md text-blue-700 font-bold">
                  Setting
                </div>
              </div>
              <div className="flex w-full h-full justify-center text-center mt-1 mx-auto">
                <img src={visa} alt="" className="w-full h-[9rem]"/>
              </div>
            </div>           
        </div>
            <div className="flex-col mt-5 h-[10rem] justify-between w-full px-4 pt-3 pb-0 bg-white rounded-xl">
              <div className="flex justify-between items-center py-2">
                <div className="text-xl text-black font-bold capitalize">
                  Send To
                </div>
                <div className="text-md text-blue-700 font-bold">
                  See More
                </div>
              </div>
              <div className="flex items-center justify-between w-full mt-2">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[44px] h-[44px] p-5 bg-black rounded-full">

                  </div>
                  <div className="text-sm font-normal text-[#6b6b6b]">
                    20/20/2023
                  </div>
                  <div className="text-sm font-bold text-black">
                    Khalil Djaariri
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[44px] h-[44px] p-5 bg-black rounded-full">

                  </div>
                  <div className="text-sm font-normal text-[#6b6b6b]">
                    20/20/2023
                  </div>
                  <div className="text-sm font-bold text-black">
                    Khalil Djaariri
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div className="w-[44px] h-[44px] p-5 bg-black rounded-full">

                  </div>
                  <div className="text-sm font-normal text-[#6b6b6b]">
                    20/20/2023
                  </div>
                  <div className="text-sm font-bold text-black">
                    Khalil Djaariri
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-col mt-5 h-auto justify-between w-full px-4 pt-3 pb-0 bg-white rounded-xl">
              <div className="flex justify-between items-center py-2">
                <div className="text-xl text-black font-bold capitalize">
                Last Activities
                </div>
                <div className="text-md text-blue-700 font-bold">
                  See All
                </div>
              </div>        
              <div className="flex-col justify-start items-center">
               <div className="flex w-full justify-between items-center">
                <div className="flex my-4 w-full justify-start items-center">
                    <div className="w-[44px] h-[44px] p-5 bg-black rounded-full">

                    </div>
                    <div className="flex-col w-full ml-2 justify-center items-center">
                      <div className="text-md text-black font-bold">
                        Mobilis
                      </div>
                      <div className="text-xs text-[#9b9b9b] font-normal">
                        20/12/2023
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end text-lg w-full font-bold text-red-600">
                    -8000 DA
                  </div>
               </div>
               <div className="flex w-full justify-between items-center">
                <div className="flex my-4 w-full justify-start items-center">
                    <div className="w-[44px] h-[44px] p-5 bg-black rounded-full">

                    </div>
                    <div className="flex-col w-full ml-2 justify-center items-center">
                      <div className="text-md text-black font-bold">
                        Hoda Farah
                      </div>
                      <div className="text-xs text-[#9b9b9b] font-normal">
                        20/12/2023
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end text-lg w-full font-bold text-red-600">
                    -8000 DA
                  </div>
               </div>
               <div className="flex w-full justify-between items-center">
                <div className="flex my-4 w-full  justify-start items-center">
                    <div className="w-[44px] h-[44px] p-5 bg-black rounded-full">

                    </div>
                    <div className="flex-col w-full ml-2 justify-center items-center">
                      <div className="text-md text-black font-bold">
                        Book Store
                      </div>
                      <div className="text-xs text-[#9b9b9b] font-normal">
                        20/12/2023
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end text-lg w-full font-bold text-red-600">
                    -8000 DA
                  </div>
               </div>

               <div className="flex w-full justify-between items-center">
                <div className="flex my-4 w-full  justify-start items-center">
                    <div className="w-[44px] h-[44px] p-5 bg-black rounded-full">

                    </div>
                    <div className="flex-col w-full ml-2 justify-center items-center">
                      <div className="text-md w-full text-black font-bold">
                        Watter Bill
                      </div>
                      <div className="text-xs text-[#9b9b9b] font-normal">
                        20/12/2023
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end text-lg w-full font-bold text-red-600">
                    -8000 DA
                  </div>
               </div>



              </div>        
            </div>

      </div>

</>

	)
}
export default Home