

import { swal } from 'sweetalert';
import { useLoaderData } from 'react-router-dom';


const Updated = () => {
    const update = useLoaderData();
// console.log(update);

    const {id,photo,name,brandname,type,price,description,rating} = update || {};

    const handleUpdateProduct = event =>{
        event.preventDefault();
          const form=event.target;
      
          const photo= form.photo.value;
          const name= form.name.value;
          const brandname= form.brandname.value;
          const type= form.type.value;
          const price= form.price.value;
          const description= form.description.value;
          const rating= form.rating.value;
          
          
         const updateProduct={photo,name,brandname,type,price,description,rating}
         console.log(updateProduct);
      
      
         //    send data to the server
      fetch(`https://assigntment-ten-server-6ef5vsbua.vercel.app/products/${id}`,{
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(updateProduct)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount){
          swal({
            title: "Good job!",
            text: "Product added Successfully",
            icon: "success",
            button: "Cool!",
          });
        }
      })
      }


    return (
        <div className="bg-slate-200 p-24">
      <h2 className="text-3xl font-extrabold">Update a Product: {name}</h2>
      <form onSubmit={handleUpdateProduct}>
      
     {/* form photo row */}
     <div className="mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group ">
              <input
              defaultValue={photo}
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
              defaultValue={name}
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
              defaultValue={brandname}
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
              defaultValue={type}
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
              defaultValue={price}
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
              defaultValue={description}
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
              defaultValue={rating}
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
         value="Update Product"  />
       </div>
      </form>
    </div>
    );
};

export default Updated;