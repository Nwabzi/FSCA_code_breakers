import storeImage from "../../images/storeBag.png"
import "./Home.css"
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
            <h2>Your Business</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lorem sed sapien interdum vehicula. Proin varius mauris eget metus aliquet malesuada. Etiam eget tellus vel neque laoreet viverra. Duis sed eros et magna finibus ullamcorper vitae vel dolor.</p>
          </div>
        </div>
      </div>
     
       
    
    </div>
  )
}
