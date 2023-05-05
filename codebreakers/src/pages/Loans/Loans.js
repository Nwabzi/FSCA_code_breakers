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
            <p>You can explore various loan options available for your business. By taking out a business loan, you can secure the necessary funds to finance your growth plans or manage cash flow during difficult times. With competitive interest rates and flexible repayment terms, taking out a business loan can help you achieve your business goals while maintaining financial stability.</p>
          </div>
        </div>
      </div>
     
       
    
    </div>
  )
}
