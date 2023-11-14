
import Tags from "./Components/Tags";
import Random from "./Components/Random";

function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center " >
        <h1 className="bg-white rounded-lg w-11/12 text-center px-10 py-2 text-4xl font-bold mt-[40px] " >RANDOM GIFs</h1>
        <div className="flex flex-col items-center w-full gap-y-10 mt-[30px] " >
          <Random/>
          <Tags/>
        </div>

        <div className=" flex flex-wrap items-center justify-center font-bold text-md mt-5 mb-5 md:text-3xl " >
          <p>Made with ❤️ - Vivek Chaudhary</p>
        </div>
    </div>
  );
}

export default App
