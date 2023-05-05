import storeImage from "../../images/market.png"
import "./SignUp.css"
export default function SignUp() {

  return (
    <div class="container-signup">
    <div class="form-column">
      <form>
        <label for="business-type">Business Type:</label>
        <select id="business-type" name="business-type">
          <option value="restaurant">Restaurant</option>
          <option value="bakery">Bakery</option>
          <option value="grocery-store">Grocery Store</option>
        </select>
  
        <label for="business-name">Business Name:</label>
        <input type="text" id="business-name" name="business-name"/>
  
        <label for="about-business">About Business:</label>
        <textarea id="about-business" name="about-business"></textarea>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  
    <div class="image-column">
      <img src={storeImage}  alt="Business "/>
    </div>
  </div>
  
  )
}
