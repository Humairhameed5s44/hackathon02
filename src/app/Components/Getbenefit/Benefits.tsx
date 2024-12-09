const ClubSignup: React.FC = () => {
    return (
      <div className="flex w-full h-[481px] justify-center items-center  bg-[#F9F9F9]">
        <div className="bg-white w-[1273px] h-[364px] shadow-md rounded-lg p-8  max-w-md">
          <h1 className="text-2xl font-bold mb-4">Join the club and get the benefits</h1>
          <p className="mb-6">Sign up for our newsletter and receive exclusive offers on new </p>
            <p className="mb-6"> ranges, sales, pop up stores and more</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border-gray-300 border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-[#2A254B] hover:bg-[#2A254B] text-white font-medium rounded-r-lg px-4 py-2">
              Sign up
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ClubSignup;