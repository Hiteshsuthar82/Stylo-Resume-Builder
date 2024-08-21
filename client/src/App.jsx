import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { useDispatch } from "react-redux";
import loadingimg from './assets/loading-logo.gif'

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //call get current user api
  }, []);
  return !loading ? (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  ) : (
    <div className="h-screen w-full flex justify-center items-center bg-purple-400 text-center">
      <img className="size-[200px]" src={loadingimg} alt="" />
    </div>
  );
}

export default App;
