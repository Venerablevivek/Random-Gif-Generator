import Tags from "./Components/Tags";
import Random from "./Components/Random";

export default function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center " >
        <h1 className="bg-white rounded-lg w-11/12 text-center px-10 py-2 text-4xl font-bold mt-[40px] " >RANDOM GIFs</h1>
        <div className="flex flex-col items-center w-full gap-y-10 mt-[30px] " >
          <Random/>
          <Tags/>
        </div>
    </div>
  );
}
