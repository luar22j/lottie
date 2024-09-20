import React, { useRef, useState } from "react";
import Lottie from "@lottielab/lottie-player/react";

function App() {
  const lottie = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const switchSatate = (stateName) => {
    lottie.current.interactivity?.trigger(stateName);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-10">
      {isLoading && <div>Cargando...</div>}
      <Lottie
        ref={lottie}
        src="https://cdn.lottielab.com/l/CebvQvgnz2FhoB.json"
        onLoad={handleLoad}
      />
      <div className="flex gap-5 w-full items-center justify-center">
        <button
          className="bg-gray-200 hover:bg-gray-300 py-2 px-4 shadow hover:shadow-md rounded-md transition-all"
          onClick={() => switchSatate("StateOne")}
        >
          StateOne
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 py-2 px-4 shadow hover:shadow-md rounded-md transition-all"
          onClick={() => switchSatate("StateTwo")}
        >
          StateTwo
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 py-2 px-4 shadow hover:shadow-md rounded-md transition-all"
          onClick={() => switchSatate("StateThree")}
        >
          StateThree
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 py-2 px-4 shadow hover:shadow-md rounded-md transition-all"
          onClick={() => switchSatate("StateFour")}
        >
          StateFour
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 py-2 px-4 shadow hover:shadow-md rounded-md transition-all"
          onClick={() => switchSatate("StateFive")}
        >
          StateFive
        </button>
      </div>
    </div>
  );
}

export default App;
