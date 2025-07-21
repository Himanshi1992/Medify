import './App.css';
import Footer from "../src/components/Footer";
import DownloadApp from "../src/components/Section/DownloadApp";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
