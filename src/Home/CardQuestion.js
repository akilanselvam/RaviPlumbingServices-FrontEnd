import { useState } from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";

function CardQuestion() {
  const [answer, setAnswer] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    if (answer === "1234") {
      Navigate("/quotationForm");
    } else if (answer === "12345") {
      Navigate("/viewHR");
    } else {
      alert("Invalid Passcode");
    }
  };

  const handleInputChange = event => {
    setAnswer(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen -mt-36">
      <div className="max-w-md mx-auto bg-custom-green bgr opacity-80 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-black font-semibold">Office access only</div>
            <form onSubmit={handleSubmit}>
              <div className="mt-2 text-white">
                <p>Enter Passcode</p>
                <input
                  type="password"
                  className="mt-2 border text-left border-yellow-400 px-2 py-1 text-black rounded-lg bg-orange-100 bg-opacity-40 flex-grow"
                  value={answer}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 rounded-lg py-2 ml-2 mt-2 px-8 text-black cursor-pointer shadow-lg focus:shadow-xl hover:shadow-xl active:shadow transform hover:-translate-y-0.5 active:translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 duration-300 ease-in-out">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*}
function FreddieMercury() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://via.placeholder.com/150"
              alt="Freddie Mercury"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Result</div>
            <div className="mt-2 text-gray-500">
              <p>This is Freddie Mercury!</p>
            </div>
            <div className="mt-4">
              <Link
                to="/"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
}

export default CardQuestion;
