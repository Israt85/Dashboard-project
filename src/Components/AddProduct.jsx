import axios from "axios";
import { useState } from "react";


const AddProduct =({users})=>{
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const color = form.color.value;
        const capacity = form.capacity.value;
        const price = form.price.value;
        const details = form.details.value;
        const id1 = users.length +1;
      
        const obj = {
            id: id1,
            name: name,
            data: {
              color: color,
              capacity: capacity,
              price: price,
              details: details,
            },
          };
        console.log(obj);
      
        axios.post('https://api.restful-api.dev/objects', obj)
        .then(res =>{
			console.log(res.data.id)
			if(res.data){
				alert(`Added Product successfully & the Id is ${res.data.id} `)
			}
		}) 
      
      };
      
    return(
        <div>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Product</button>
<dialog id="my_modal_1" className="modal">
  <form onSubmit={handleSubmit} action="">

  <div className="modal-box bg-red-50 mx-auto h-[500px]">
    <input name="name" className="lg:w-80 w-full mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Product Name" type="text" />
    <input name="color"  className="lg:w-80 w-full mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Color" type="text" />
    <input name="capacity" className="lg:w-80 w-full mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Capacity" type="text" />
    <input name="price" className="lg:w-80 w-full mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Price" type="text" />
    <input name="details" className="lg:w-80 w-full mx-auto bg-white my-4 px-4 py-2" placeholder="Enter details" type="text" />
    <button type="submit" className="btn modal-action">Submit</button>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
  </form>
</dialog>
        </div>
    )
}
export default AddProduct;