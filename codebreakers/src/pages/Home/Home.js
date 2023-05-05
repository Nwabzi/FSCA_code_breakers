import storeImage from "../../images/storeBag.png"
import "./Home.css"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const data = [
  {
    name: '01 may',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '15 may',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '18 may',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '22 may',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '27 may',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '29 may',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '30 may',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function Home() {
 
  return (
    <div className="container">
      <div className="">
        
        <p><span><b>Market metrics</b></span>
          <span id="home-metrics">Balance: R 40 000 &nbsp;   &nbsp; &nbsp; Units sold:259 &nbsp;   &nbsp; &nbsp; Inflation rate: 5.75% &nbsp; &nbsp; Interest rate: 10% &nbsp; &nbsp; Rank: 1023</span>
        </p>
      </div>
      <div className="hero">
        <div class="column">
          <img  src={storeImage} className='Home-image' alt=""/>
        </div>
        <div class="column">
          <div class="content">
            <h2>Lebo's Store</h2>
            <p className="home-opener">Welcome to the world of entrepreneurship! Build your dream business from the ground up, make strategic decisions, and compete with other players to become the ultimate business tycoon.</p>
          </div>
        </div>
      </div>
      
      <div>
         <p>Sales for May
         </p>
          <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            // dot={<CustomizedDot />}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            // dot={<CustomizedDot />}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        
      </div>
    
    </div>
  )
}
