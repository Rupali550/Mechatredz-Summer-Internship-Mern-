import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => setInput("");
  const handleDelete = () => setInput(input.slice(0, -1));
  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">
        {/* Display */}
        <div className="mb-4 p-4 bg-gray-200 rounded text-right text-2xl font-mono">
          {input || "0"}
        </div>

        {/* First row -> C + DEL */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          <button
            onClick={handleClear}
            className="col-span-2 bg-red-400 text-white rounded-xl p-3 hover:bg-red-500"
          >
            C
          </button>
          <button
            onClick={handleDelete}
            className="col-span-2 bg-yellow-400 text-white rounded-xl p-3 hover:bg-yellow-500"
          >
            DEL
          </button>
        </div>

        {/* Number + Operators grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("/")} className="btn">/</button>

          {/* Row 2 */}
          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("*")} className="btn">*</button>

          {/* Row 3 */}
          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={() => handleClick("-")} className="btn">-</button>

          {/* Row 4 */}
          <button onClick={() => handleClick("0")} className="col-span-2 btn">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
          <button onClick={() => handleClick("+")} className="btn">+</button>

          {/* Row 5 */}
          <button
            onClick={handleCalculate}
            className="col-span-4 bg-green-400 text-white rounded-xl p-3 hover:bg-green-500"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

// Tailwind button class (reuse)
const btnClass = "bg-gray-300 rounded-xl p-3 hover:bg-gray-400 text-lg font-semibold";
