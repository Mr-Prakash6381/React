import { UseState } from "../components/UseState";
import { UserDetails } from "../components/UserDetails";
import { RegFrm } from "../components/RegFrm";
import { CounterApp } from "../components/CounterApp";
import { Shop } from "../components/Shop";
import { AdviceApp } from "../components/AdviceApp";
import { Context } from "../components/Context";

function App() {
  return (
    <div className="p-15  ">
      <h1 className="text-2xl p-5">Welcome to Day three</h1>
      <UseState /> 

      <UserDetails/> 

      <RegFrm /> 

       <AdviceApp/> 

     <CounterApp/> 

     <Shop/>

<Context/>
    </div>
  );  
}

export default App;
