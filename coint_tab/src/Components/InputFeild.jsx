import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios'

import './InputFeild.css'
const InputFeild = () => {
 const [totalPrice, setTotalPrice] = useState(null)
  const [form, setForm] = useState({
    weight:'',
    pincode:'',
    rate_type:''

  })

  


  const handleChange = (e)=>{
    setForm( (prev) =>({
       ...prev,
       [e.target.name] :e.target.value
       
    }))
  }



  const  handleSubmit = async(e)=>{
   console.log(form)
  try{
    const response = await axios.post("http://localhost:12345/getdata",form)
    
   console.log(response.data)

    setTotalPrice(response.data.TotalPrice)

  }catch(err){
    console.log(err)
  }
  
  }
  return (
    <div>
     

     <div className="form">
     <form >

<input type="text"  value ={form.weight} onChange={handleChange} name="weight" id="" placeholder="product Weight" required className='input' />
 <br /><br />
 <input type="number"  value ={form.pincode} onChange={handleChange} name="pincode" id="" placeholder="Enter Pincode  507101" required className='input' />
 <br /><br />
  <select name="rate_type"    className='input' value ={form.rate_type} onChange={handleChange}   >
    
    
  <option className='input'> Select </option>
    <option value="Forward"   > Forward </option>
    <option value="Forward & RTO"  > Forward & RTO </option>
    
  </select>
  <br /><br />
 <Button variant="contained" onClick={handleSubmit} > Price </Button>

</form>
<br /><br /><br />
 {!!totalPrice && `Your Total Prize is  $ ${totalPrice.toFixed(2)}`}
     </div>
    </div>
  )
}

export default InputFeild
