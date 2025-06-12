import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import Ipchecker from "./Ipchecker";

function App() {
  const notify = (data) => toast.success(data);
  return (
    <>
      <div>
        <button onClick={() => notify("User Logged Succussfully")}>
          Make me a toast
        </button>
        <Toaster position="top-right" reverseOrder={false} />
        <Ipchecker/>
      </div>
    </>
  );
}

export default App;
