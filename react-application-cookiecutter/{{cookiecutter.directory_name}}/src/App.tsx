import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import appPages from "./appPages";
import Person from "./features/person/Person";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <p>Header</p>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  Home page{" "}
                  <p>
                    <Link to={`${appPages.person}/15`}>Person 15</Link>
                  </p>
                </div>
              }
            ></Route>
            <Route path={`${appPages.person}/:id`} element={<Person />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
