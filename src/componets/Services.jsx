const Services = () => {
	return (
          <div className="flex justify-between items-center w-full  mt-5">
            <div className="flex-col justify-between w-full px-4 pt-3 pb-0 bg-white rounded-xl ">
                <div className="flex justify-between items-center">
                  <div className="text-xl text-black font-bold capitalize">
                    Services
                  </div>
                  <div className="text-md text-blue-700 font-bold">
                    See More
                  </div>
                </div>
                <div className="flex justify-between items-center my-0 w-full h-[10rem]">
                    <div className="w-[10rem] h-1/2 flex justify-center items-center rounded-lg p-4 bg-[#0881412B]">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Logo_Alg%C3%A9rie_T%C3%A9l%C3%A9com.svg/497px-Logo_Alg%C3%A9rie_T%C3%A9l%C3%A9com.svg.png" alt="" />
                    </div> 
                    <div className="w-[10rem] h-1/2 ml-2 flex justify-center items-center rounded-lg p-4 bg-[#E20C1A17]">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_Air_Alg%C3%A9rie.svg/752px-Logo_Air_Alg%C3%A9rie.svg.png" alt="" />
                    </div> 
                    <div className="w-[10rem] h-1/2 ml-2 flex justify-center items-center rounded-lg p-4 bg-[#56AF3147]">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ATM_Mobilis.svg/1280px-ATM_Mobilis.svg.png" alt="" />
                    </div> 
                    <div className="w-[10rem] h-1/2 ml-2 flex justify-center items-center rounded-lg p-4 bg-[#E206130F]">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Logo_Djezzy_2015.png" alt="" />
                    </div> 
                </div>
              </div>
          </div>
	)
}
export default Services