import storeImage from "../../images/bank.png"
import "./Loans.css"

export default function Loans() {

  return (
    <div className="container">
        <div className="">
        
        <p><span><b></b></span>
          <span id="home-metrics"> Interest rate: 10% &nbsp; &nbsp; debt owed: R 40 000</span>
        </p>
      </div>
      <div className="hero">
        <div class="column">
          <img  src={storeImage} className='Home-image' alt=""/>
        </div>
        <div class="column">
          <div class="content">
            <h2>Take out a loan</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lorem sed sapien interdum vehicula. Proin varius mauris eget metus aliquet malesuada. Etiam eget tellus vel neque laoreet viverra. Duis sed eros et magna finibus ullamcorper vitae vel dolor.</p>
          </div>
        </div>
      </div>
     
       
    
    </div>
  )
}
