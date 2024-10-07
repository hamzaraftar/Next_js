import Input from "./components/Input";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar />
        <Input />
      </div>
    </>
  );
}
