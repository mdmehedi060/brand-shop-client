
import swal from 'sweetalert';

const AddProduct = () => {
const handleAddProduct = event =>{
  event.preventDefault();
    const form=event.target;

    const photo= form.photo.value;
    const name= form.name.value;
    const brandname= form.brandname.value;
    const type= form.type.value;
    const price= form.price.value;
    const description= form.description.value;
    const rating= form.rating.value;
    
    
   const newProduct={photo,name,brandname,type,price,description,rating}
   console.log(newProduct);


   //    send data to the server
fetch('http://localhost:5000/products',{
  method:'POST',
  headers:{
      'content-type' : 'application/json'
  },
  body:JSON.stringify(newProduct)
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.insertedId){
    swal({
      title: "Good job!",
      text: "Product added Successfully",
      icon: "success",
      button: "Aww yiss!",
    });
  }
})
}



    return (
        <div className="bg-slate-200 p-24">
      <h2 className="text-3xl font-extrabold">Add a Product</h2>
      <form onSubmit={handleAddProduct}>
      
     {/* form photo row */}
     <div className="mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group ">
              <input
                name="photo"
                type="text"
                placeholder="Photo RRL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
       
        </div>


        {/* form name & quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group ">
              <input
                name="name"
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                name="brandname"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supllier & test row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group ">
              <input
                name="type"
                type="text"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category & details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group ">
              <input
                name="description"
                type="text"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                name="rating"
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
      
        
       <div>
       <input className="btn btn-block bg-orange-400 text-white" type="submit"
         value="Add Product"  />
       </div>
      </form>
    </div>
    );
};

export default AddProduct;