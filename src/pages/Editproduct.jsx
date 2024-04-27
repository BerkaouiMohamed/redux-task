import React from "react";

function EditProduct() {
    const handleUpdate =()=>{

    }
    const handleChange =()=>{}
  return (
   

    <div>
      <h1>edit Product</h1>

      <form onSubmit={handleUpdate}>
        title <input type="text" name="title" id=""  value="" onChange={handleChange} />
        price <input type="text" name="price" id=""  value="" onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default EditProduct;
