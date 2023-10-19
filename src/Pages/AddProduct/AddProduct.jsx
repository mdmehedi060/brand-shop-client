

const AddProduct = () => {
const handleAddProduct = event =>{
    const form=event.target;

    const name= form.name.value;
    const quantity= form.quantity.value;
    const supplier= form.supplier.value;
    const test= form.test.value;
    const category= form.category.value;
    const details= form.details.value;
    const photo= form.photo.value;
   const newCoffee={name,quantity,supplier,test,category,details,photo,}
   console.log(newCoffee);
}



    return (
        <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add a Coffe</h2>
      <form onSubmit={handleAddProduct}>
        {/* form name & quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffe Name</span>
            </label>
            <label className="input-group ">
              <input
                name="name"
                type="text"
                placeholder="Coffe Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Available Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supllier & test row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier Name</span>
            </label>
            <label className="input-group ">
              <input
                name="supplier"
                type="text"
                placeholder="Supplier Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Test</span>
            </label>
            <label className="input-group">
              <input
                name="test"
                type="text"
                placeholder="Test"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category & details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group ">
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                type="text"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
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
        
        <input className="btn btn-block bg-orange-400 text-white" type="submit" value="Add Coffee"  />
      </form>
    </div>
    );
};

export default AddProduct;