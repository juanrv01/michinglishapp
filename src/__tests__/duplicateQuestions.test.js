const fs = require('fs');
const path = require('path');

// Extract a unique string for each full question object
function extractAllQuestions(jsonData) {
  const questions = [];

  jsonData.topics.forEach(topic => {
    topic.questions.forEach(question => {
      // Serialize full question structure for comparison
      const uniqueKey = JSON.stringify({
        question: question.question,
        options: question.options,
        answer: question.answer
      });
      questions.push(uniqueKey);
    });
  });

  return questions;
}

// Run duplicate test for a given directory
function runDuplicateTestForDirectory(folderName) {
  const baseDir = path.resolve(__dirname, '..', '..', 'public', folderName);
  const indexPath = path.join(baseDir, 'index.json');
  const indexData = JSON.parse(fs.readFileSync(indexPath));
  const folders = indexData.folders;

  describe(`Checking folder: ${folderName}`, () => {
    const globalQuestions = new Set();

    folders.forEach(subfolder => {
      const infoPath = path.join(baseDir, subfolder, 'info.json');

      test(`Check duplicates in ${folderName}/${subfolder}`, () => {
        const rawData = fs.readFileSync(infoPath);
        const jsonData = JSON.parse(rawData);
        const questions = extractAllQuestions(jsonData);

        const localQuestions = new Set();
        questions.forEach(q => {
          if (localQuestions.has(q)) {
            const parsed = JSON.parse(q);
            throw new Error(`🔁 Duplicate question *within* ${subfolder}:\n"${parsed.question}"\nOptions: ${JSON.stringify(parsed.options)}\nAnswer: ${parsed.answer}`);
          }
          localQuestions.add(q);
        });

        questions.forEach(q => {
          if (globalQuestions.has(q)) {
            const parsed = JSON.parse(q);
            throw new Error(`🌍 Duplicate question *across* ${folderName} folders:\n"${parsed.question}"\nOptions: ${JSON.stringify(parsed.options)}\nAnswer: ${parsed.answer}`);
          }
          globalQuestions.add(q);
        });
      });
    });
  });
}

// Run validations
runDuplicateTestForDirectory('data');
runDuplicateTestForDirectory('linkwords');
runDuplicateTestForDirectory('verbs');
runDuplicateTestForDirectory('adjectives');
runDuplicateTestForDirectory('firstconditional');
