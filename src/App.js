import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='bg-gray-200 h-screen'>
    <div className=" font-Roboto flex-col px-10 md:px-80 py-6 ">
      <h1 className="text-2xl flex justify-center text-white font-bold bg-indigo-900 px-4 py-6">H's BMI & Calculator App</h1>
      <div className="border-[1px] bg-white mt-8 border-gray-400 rounded-xl  py-16 flex justify-evenly">
      <Link to="/bmi-calculator" className="bg-blue-500 px-4 py-4 rounded-3xl hover:bg-blue-700">BMI Calculator</Link>
      <Link to="/normal-calculator" className="bg-blue-500 px-4 py-4 rounded-3xl  hover:bg-blue-700">Math Calculator</Link>
      </div>
    </div>
    </div>
  );
}

export default App;
