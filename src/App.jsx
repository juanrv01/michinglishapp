import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData as setDataData, setLoading as setLoadingData, setError as setErrorData } from './store/data';
import { setData as setDataLinkwords, setLoading as setLoadingLinkwords, setError as setErrorLinkwords } from "./store/linkwords";
import { setData as setDataVerbs, setLoading as setLoadingVerbs, setError as setErrorVerbs } from "./store/verbs";
import AppNavbar from './components/Navbar/AppNavbar';
import Sidebar from './components/Sidebar/Sidebar';
import { fetchDataHelper } from "./helpers/fetchDataHelper";
import { AppRouter } from './router/AppRouter';



function App() {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetchDataHelper(
      dispatch,
      setLoadingData,
      setDataData,
      setErrorData,
      `${import.meta.env.BASE_URL}data`
    );

    // Fetch for `linkwords`
    fetchDataHelper(
      dispatch,
      setLoadingLinkwords,
      setDataLinkwords,
      setErrorLinkwords,
      `${import.meta.env.BASE_URL}linkwords`
    );

    // Fetch for `Verbs`
    fetchDataHelper(
      dispatch,
      setLoadingVerbs,
      setDataVerbs,
      setErrorVerbs,
      `${import.meta.env.BASE_URL}verbs`
    );
  }, [dispatch]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <>
      <AppNavbar onToggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} onClose={toggleSidebar} />

      <div className="mt-5">             

        <AppRouter />


      </div>
    </>
  );
}

export default App;

