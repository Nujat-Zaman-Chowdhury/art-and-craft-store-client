

const AllArtCraft = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="text-base">
      <tr>
        <th></th>
        <th>Item Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Processing Time</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td></td>
        <td></td>
        <td><button className="btn text-orange-400 bg-transparent border-orange-500 hover:bg-transparent">View Details</button></td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllArtCraft;