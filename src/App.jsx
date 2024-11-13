import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData, setLoading, setError } from './store/data';
import QuizCard from './components/quizcard';
import AppNavbar from './components/Navbar/AppNavbar';
import Sidebar from './components/Sidebar/Sidebar';
import ModuleCard from './components/modules/ModuleCard';
import { FaUserFriends } from 'react-icons/fa';
import VocabularyModule from './components/modules/VocabularyModule';
import GrammarModule from './components/modules/GrammarModule';
import { AppRouter } from './router/AppRouter';




const fetchData = async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const indexResponse = await fetch(`${import.meta.env.BASE_URL}data/index.json`);
    const indexData = await indexResponse.json();
    const { folders } = indexData;

    const promises = folders.map(folder =>
      fetch(`${import.meta.env.BASE_URL}data/${folder}/info.json`).then(res => res.json())
    );

    const results = await Promise.all(promises);
    dispatch(setData(results));
  } catch (error) {
    dispatch(setError(error.toString()));
  } finally {
    dispatch(setLoading(false));
  }
};

function App() {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    fetchData(dispatch);
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

