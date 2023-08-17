import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Revenues: 4000,
    Expenses: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Revenues: 3000,
    Expenses: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    Revenues: 2000,
    Expenses: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Revenues: 2780,
    Expenses: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Revenues: 1890,
    Expenses: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    Revenues: 2390,
    Expenses: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    Revenues: 3490,
    Expenses: 4300,
    amt: 2100,
  },
];
const Chart = () => {

	return (

          <div className="flex justify-between w-full h-[20rem] mt-5">
            <div className="flex-col items-center justify-between pb-5 h-full w-full bg-white  border-2 border-white p-5 rounded-xl">
              <div className="flex w-full justify-between items-center">
                <div className="text-lg w-full text-black font-bold capitalize">
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
              <div className="w-full h-full pb-5">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                    width={800} 
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

	)
}
export default Chart