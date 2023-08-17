const Revenue = () => {
	return (

          <div className="flex justify-start w-full h-[11rem]">
            <div className="flex-col justify-between w-full px-4 pt-3 pb-0 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <div className="text-xl text-black font-bold capitalize">
                  Total Revenue
                </div>
                <div className="text-md text-blue-700 font-bold">
                  See More
                </div>
              </div>
              <div className="flex justify-between items-center my-6">
                <div className="block justify-center text-3xl md:text-6xl text-black font-bold capitalize">
                  10800.00 <span className="text-[20px] pl-1">DA</span>
                </div>
                <div className="text-md text-green-600 font-normal">
                  +24.3%
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-[#6b6b6b] font-bold capitalize">
                  08/13/2023 12:45
                </div>
                <div className="text-sm text-[#6b6b6b] font-bold">
                  29687128
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-3 items-center justify-between w-1/3 md:w-1/5 h-auto bg-slate-200  border-2 border-white p-[4px] rounded-xl">
              <div className="text-xl font-normal text-black text-start">
                Send
              </div>
              <div className="flex justify-center text-center my-5 mx-auto">
                <svg className="text-blue-500" enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="9" x2="41" y1="25" y2="25"/><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="25" x2="25" y1="9" y2="41"/></svg>
              </div>
              <div className="text-[13px] md:text-sm text-center w-full text-[#6b6b6b] font-bold capitalize">
                Quick Way
              </div>
            </div>
          </div>
		
	)
}
export default Revenue