const AddProduct =()=>{
    return(
        <div>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Product</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-red-50 h-[500px]">
    <input className="w-80 mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Product Name" type="text" />
    <input className="w-80 mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Color" type="text" />
    <input className="w-80 mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Capacity" type="text" />
    <input className="w-80 mx-auto bg-white my-4 px-4 py-2" placeholder="Enter Price" type="text" />
    <input className="w-80 mx-auto bg-white my-4 px-4 py-2" placeholder="Enter details" type="text" />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    )
}
export default AddProduct;