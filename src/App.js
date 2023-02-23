import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

//pages & components
import Home from '../src/pages/Home'
import Botm from '../src/pages/BOTM'

import Brandlist from '../src/pages/brand'
import Bacardi from '../src/pages/Bacardi'
import Campari from '../src/pages/Campari'
import Diageo from '../src/pages/Diageo'
import Goslings from '../src/pages/Goslings'
import Jeffersons from '../src/pages/Jeffersons'
import Dobel from '../src/pages/Dobel'
import Stranahans from '../src/pages/Stranahans'
import Resources from "../src/pages/Resources"
import Royalsalute from "../src/pages/Royalsalute"
import Waterford from "../src/pages/Waterford"
import Wash from "../src/pages/Wash"

// import Login from '../src/components/Login'


import Sidebar from '../src/components/Sidebar'
import Topbar from '../src/components/Topbar'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route exact path="/" element={<Login />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/brand" element={<Brandlist />} />
              <Route path="/BOTM" element={<Botm />} />
              <Route path="/Bacardi" element={<Bacardi />} />
              <Route path="/Goslings" element={<Goslings />} />
              <Route path="/Campari" element={<Campari />} />
              <Route path="/Diageo" element={<Diageo />} />
              <Route path="/Jeffersons" element={<Jeffersons />} />
              <Route path="/Dobel" element={<Dobel />} />
              <Route path="/Resources" element={<Resources />} />
              <Route path="/Royalsalute" element={<Royalsalute />} />
              <Route path="/Stranahans" element={<Stranahans />} />
              <Route path="/Waterford" element={<Waterford />} />
              <Route path="/Wash" element={<Wash />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
