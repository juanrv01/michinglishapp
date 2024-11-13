import { Navigate, Route, Routes } from 'react-router-dom';
import QuizCard from '../components/quizcard';

export const AppRouter = () => { 

    return (
        <Routes>
          <Route path="/michinglishapp/testknowledge" element={<QuizCard />} />
       </Routes>
    )

}