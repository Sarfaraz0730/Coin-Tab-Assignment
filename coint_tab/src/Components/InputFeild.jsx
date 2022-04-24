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
 <input type="number"  value ={form.pincode} onChange={handleChange} name="pincode" id="" placeholder="Enter Pincode" required className='input' />
 <br /><br />
  <select name="rate_type"   value ={form.rate_type} onChange={handleChange}   >
    
    
  <option> Select </option>
    <option value="Forward"  > Forward </option>
    <option value="Forward & RTO"  > Forward & RTO </option>
    
  </select>
 <Button variant="contained" onClick={handleSubmit} >Contained</Button>

</form>

 {!!totalPrice && `Your Total Prize is ${totalPrice}`}
     </div>
    </div>
  )
}

export default InputFeild
