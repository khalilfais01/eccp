<div className="flex justify-start  w-full">
      
<div className="flex w-[70%] p-5 h-full">
  <div className="flex-col w-full h-full">
    <div className="flex justify-start w-full h-auto">
      <div className="flex-col justify-between w-[70%] px-4 pt-3 pb-0 bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <div className="text-xl text-black font-bold capitalize">
            Total Revenue
          </div>
          <div className="text-md text-blue-700 font-bold">
            See More
          </div>
        </div>
        <div className="flex justify-between items-center my-8">
          <div className="block justify-center text-6xl text-black font-bold capitalize">
            10800.00 <span className="text-[30px] pl-1">DA</span>
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
      <div className="flex-col ml-3 items-center justify-between w-1/6 h-auto bg-slate-200  border-2 border-white p-5 rounded-xl">
        <div className="text-xl font-normal text-black text-start">
          Send
        </div>
        <div className="flex justify-center text-center my-7 mx-auto">
          <svg className="text-blue-500" enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect fill="none" height="50" width="50"/><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="9" x2="41" y1="25" y2="25"/><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="25" x2="25" y1="9" y2="41"/></svg>
        </div>
        <div className="text-sm text-[#6b6b6b] font-bold capitalize">
          Quick Way
        </div>
      </div>
      {/* <div className="flex-col items-center justify-between w-[40%] h-auto bg-white  border-2 border-white p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="text-xl text-black font-bold capitalize">
            Total Revenue
          </div>
          <div className="text-md text-blue-700 font-bold">
            Setting
          </div>
        </div>
        <div className="flex justify-center text-center mt-1 mx-auto">
          <img src={visa} alt="" className="w-full h-[12rem]"/>
        </div>
      </div>       */}
    </div>

    <div className="flex justify-between w-full h-auto mt-5">
      <div className="flex-col items-center justify-between pb-5 h-[20rem] w-[86.666667%] bg-white  border-2 border-white p-5 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="text-xl text-black font-bold capitalize">
          Revenues / Expenses
          </div>
          <div className="flex justify-between text-md text-[#6b6b6b]">
            <div className="p-1">
              day
            </div>
            <div className="ml-4 p-1 px-3 bg-[#0056A3] text-white rounded-xl">
              Month
            </div>
            <div className="ml-4 p-1">
              Year
            </div>
          </div>
        </div>
        <div className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
              width={500} 
              height={300} 
              data={data} 
              margin={{
                top:20, 
                right:10, 
                left:-10, 
                bottom:5
              }}>
                <CartesianGrid strokeDasharray="3 3 0 0" vertical="false"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Expenses" fill="#FFF00E"/>

                <Bar dataKey="Revenues" fill="#0056A3"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
      </div>   
    </div>
    <div className="flex justify-between items-center w-[86.666667%]  mt-5 bg-white">
      <div className="flex-col justify-between w-full px-4 pt-3 pb-0 bg-white rounded-xl">
          <div className="flex justify-between items-center">
            <div className="text-xl text-black font-bold capitalize">
              Services
            </div>
            <div className="text-md text-blue-700 font-bold">
              See More
            </div>
          </div>
          <div className="flex justify-between items-center my-5 w-full h-[10rem]">
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
  </div>

</div>
<div className="flex justify-items-center w-full h-full bg-red p-5">
test
</div>
</div>