import { Route, Routes } from 'react-router-dom';
import QuizCard from '../components/quizcard';
import AdjectivesModule from '../components/modules/AdjectivesModule';
import VocabularyModule from '../components/modules/VocabularyModule';
import VerbsModule from '../components/modules/VerbsModule';
import AdverbsModule from '../components/modules/AdverbsModule';
import LinkingWordsModule from '../components/modules/LinkingWordsModule';

export const AppRouter = () => { 

    return (
        <Routes>
          <Route path="/michinglishapp/testknowledge" element={<QuizCard />} />
          <Route path="/michinglishapp/verbs" element={<VerbsModule/>} />
          <Route path="/michinglishapp/adjectives" element={<AdjectivesModule/>} />
          <Route path="/michinglishapp/vocabulary" element={<VocabularyModule/>} />
          <Route path="/michinglishapp/linking-words" element={<LinkingWordsModule/>} />
          <Route path="/michinglishapp/adverbs" element={<AdverbsModule/>} />
          
       </Routes>
    )

}