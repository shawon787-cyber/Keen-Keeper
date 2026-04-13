

const Banner = () => {
  return (
    <div className="bg-gray-50 ">
        <div className="container mx-auto flex flex-col items-center p-6">
            <div className=" p-10 text-center">

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and <br /> nurture the
          relationships that matter most.
        </p>

        <button className="mt-6 bg-green-900 hover:bg-green-800 text-white px-5 py-2 rounded flex items-center gap-2 mx-auto">
          + Add a Friend
        </button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 w-full">

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-green-900">10</h2>
          <p className="text-gray-500 text-sm mt-1">Total Friends</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-green-900">3</h2>
          <p className="text-gray-500 text-sm mt-1">On Track</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-green-900">6</h2>
          <p className="text-gray-500 text-sm mt-1">Need Attention</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-green-900">12</h2>
          <p className="text-gray-500 text-sm mt-1">Interactions This Month</p>
        </div>

      </div>
        </div>
    </div>
  );
};

export default Banner;