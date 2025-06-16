// import { Footer } from "../components/Footer";
// import { HomePage } from "../components/HomePage";
// import { ListRender } from "../components/ListRender";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CustomHook } from "../components/CustomHook";

// import { RestApi } from "../components/RestApi";

// import { UseEffect } from "../components/useEffect";

function App() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center p-20">
      <h1 className="text-2xl font-bold text-green-900 ">
        Welcome to Fourth Day
      </h1>
      {/* <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="footer" element={<Footer/>}/>
          <Route path="/listrender" element={<ListRender/>}/>
        </Routes>
      </Router> */}

      {/* <UseEffect /> */}

      {/* <RestApi /> */}

      <CustomHook />
    </div>
  );
}

export default App;
