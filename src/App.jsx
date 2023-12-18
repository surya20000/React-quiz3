import React from "react";
import './App.css'
import { Link , Route, Routes } from "react-router-dom";
import Body from "./Component/Body";
import Start from "./Component/Start";
import Result from "./Component/Result";

class Quiz extends React.Component {

  render() {

    return (
      <>
        {/* <Start /> */}
              <Routes>
                <Route path="/" element = {<Start/>}></Route>
                <Route path="/Body" element= {<Body/>}></Route>
                {/* <Route path="/Result/" element= {<Result/>}></Route> */}
              </Routes>
      </>
    )
  }
}

export default Quiz;