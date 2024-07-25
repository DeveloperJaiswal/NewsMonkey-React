import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <div>
          <Navbar />
          <LoadingBar height={3} color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/home"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="General"
                  pageSize={pageSize}
                  country="in"
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Business"
                  pageSize={pageSize}
                  country="in"
                  category="Business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Entertainment"
                  pageSize={pageSize}
                  country="in"
                  category="Entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Sports"
                  pageSize={pageSize}
                  country="in"
                  category="Sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Technology"
                  pageSize={pageSize}
                  country="in"
                  category="Technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Health"
                  pageSize={pageSize}
                  country="in"
                  category="Health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="Science"
                  pageSize={pageSize}
                  country="in"
                  category="Science"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
