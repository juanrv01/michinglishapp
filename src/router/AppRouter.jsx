import { Route, Routes } from 'react-router-dom';
import AdjectivesModule from '../components/modules/AdjectivesModule';
import VocabularyModule from '../components/modules/VocabularyModule';
import VerbsModule from '../components/modules/VerbsModule';
import AdverbsModule from '../components/modules/AdverbsModule';
import LinkingWordsModule from '../components/modules/LinkingWordsModule';
import CheckKnowledge from '../components/modules/CheckKnowledge';
import ModalsPossibilityModule from '../components/modules/ModalsPossibility';
import ModalsDeductionModule from '../components/modules/ModalsDeduction';
import ZeroConditionalModule from '../components/modules/ZeroConditional';
import FirstConditionalModule from '../components/modules/FirstConditional';
import SecondConditionalModule from '../components/modules/SecondConditional';
import ThirdConditionalModule from '../components/modules/ThirdConditional';
import MixedConditionalModule from '../components/modules/MixedConditional';

export const AppRouter = () => { 

    return (
        <Routes>            
          <Route path="/michinglishapp/testknowledge" element={<CheckKnowledge/>} />
          <Route path="/michinglishapp/verbs" element={<VerbsModule/>} />
          <Route path="/michinglishapp/adjectives" element={<AdjectivesModule/>} />
          <Route path="/michinglishapp/vocabulary" element={<VocabularyModule/>} />
          <Route path="/michinglishapp/linking-words" element={<LinkingWordsModule/>} />
          <Route path="/michinglishapp/adverbs" element={<AdverbsModule/>} />
          <Route path="/michinglishapp/modals-of-possibility" element={<ModalsPossibilityModule/>} />     
          <Route path="/michinglishapp/modals-of-deduction" element={<ModalsDeductionModule/>} />
          <Route path="/michinglishapp/zero-conditionals" element={<ZeroConditionalModule/>} />
          <Route path="/michinglishapp/first-conditionals" element={<FirstConditionalModule/>} />
          <Route path="/michinglishapp/second-conditionals" element={<SecondConditionalModule/>} />
          <Route path="/michinglishapp/third-conditionals" element={<ThirdConditionalModule/>} />
          <Route path="/michinglishapp/mixed_conditionals" element={<MixedConditionalModule/>} />
          
        </Routes>
    )

}