import { useState } from "react";
// import "./App.css";

function App() {
  const [Color, setColor] = useState({
    Hori: 10,
    Veri: 10,
    Blur: 10,
    bgColor: "#454956",
    shadowColor: "#000000",
  });
  const [Inset, setInset] = useState(false);

  console.warn("INSET VALUES: ", Inset);

  return (
    <>
      <div className="flex flex-wrap h-screen justify-around items-center">
        {/* CONTROLS */}
        <div className="w-screen md:w-1/3">
          <div className="flex justify-around items-center px-5">
            <table className="border-collapse border border-slate-500 w-screen">
              <tr>
                <td className="w-screen text-right py-2">
                  <label className="mr-3 block text-gray-700 text-sm font-bold mb-2">Horizontal Length</label>
                </td>
                <td className="w-screen py-2">
                  <input
                    type="range"
                    min="-200"
                    max="200"
                    value={Color.Hori}
                    onChange={(e) =>
                      setColor({ ...Color, Hori: e.target.value })
                    }
                  />
                </td>
              </tr>

              <tr>
                <td className="w-screen text-right py-2">
                  <label className="mr-3 block text-gray-700 text-sm font-bold mb-2">Vertical Length</label>
                </td>
                <td className="w-screen py-2">
                  <input
                    type="range"
                    min="-200"
                    max="200"
                    value={Color.Veri}
                    onChange={(e) =>
                      setColor({ ...Color, Veri: e.target.value })
                    }
                  />
                </td>
              </tr>

              <tr>
                <td className="w-screen text-right py-2">
                  <label className="mr-3 block text-gray-700 text-sm font-bold mb-2">Blur</label>
                </td>
                <td className="w-screen py-2">
                  <input
                    type="range"
                    min="-200"
                    max="200"
                    value={Color.Blur}
                    onChange={(e) =>
                      setColor({ ...Color, Blur: e.target.value })
                    }
                  />
                </td>
              </tr>

              <tr>
                <td className="w-screen text-right py-2">
                  <label className="mr-3 block text-gray-700 text-sm font-bold mb-2">Shadow Color</label>
                </td>
                <td className="w-screen py-2">
                  <input
                    type="color"
                    value={Color.shadowColor}
                    onChange={(e) =>
                      setColor({ ...Color, shadowColor: e.target.value })
                    }
                  />
                </td>
              </tr>

              <tr>
                <td className="w-screen text-right py-2">
                  <label className="mr-3 block text-gray-700 text-sm font-bold mb-2">Background Color</label>
                </td>
                <td className="w-screen py-2">
                  <input
                    type="color"
                    value={Color.bgColor}
                    onChange={(e) =>
                      setColor({ ...Color, bgColor: e.target.value })
                    }
                  />
                </td>
              </tr>

              <tr>
                <td className="w-screen text-right py-2">
                  <label className="mr-3 block text-gray-700 text-sm font-bold mb-2">Inset Shadow?</label>
                </td>
                <td className="w-screen py-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={(e) => setInset(!Inset)}
                  />
                </td>
              </tr>
            </table>
          </div>

          <div className="border-collapse border border-slate-500 mt-4 p-5 bg-gray-700 text-white">
            <p className="px-5">
              {`box-shadow: ${
                Inset
                  ? `${Color.Hori}px ${Color.Veri}px ${Color.Blur}px ${Color.shadowColor} inset`
                  : `${Color.Hori}px ${Color.Veri}px ${Color.Blur}px ${Color.shadowColor}`
              } `}
            </p>
            <p className="px-5">{`background-color: ${Color.bgColor}`}</p>
          </div>
        </div>

        {/* BOX OUTPUT */}
        <div className="">
          <div
            className="w-[300px] md:w-[35vw] h-[45vh]"
            style={{
              boxShadow: `${
                Inset
                  ? `${Color.Hori}px ${Color.Veri}px ${Color.Blur}px ${Color.shadowColor} inset`
                  : `${Color.Hori}px ${Color.Veri}px ${Color.Blur}px ${Color.shadowColor}`
              } `,
              backgroundColor: `${Color.bgColor}`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
