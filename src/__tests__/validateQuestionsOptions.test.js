const fs = require('fs');
const path = require('path');

// Validate that a question has exactly 4 options
function validateQuestionOptions(question) {
  expect(Array.isArray(question.options)).toBe(true);
  expect(question.options.length).toBe(4);
}

// Validate that the answer is one of the options
function validateAnswerInOptions(question) {
  expect(question.options).toContain(question.answer);
}

// Extract all question objects from the JSON
function extractAllQuestions(jsonData) {
  const questions = [];
  jsonData.topics.forEach(topic => {
    topic.questions.forEach(question => {
      questions.push(question);
    });
  });
  return questions;
}

// Run validations for a folder like "data", "linkwords", "verbs"
function validateFolderQuestions(folderName) {
  const baseDir = path.resolve(__dirname, '..', '..', 'public', folderName);
  const indexFilePath = path.join(baseDir, 'index.json');
  const indexJson = JSON.parse(fs.readFileSync(indexFilePath));
  const subfolders = indexJson.folders;

  describe(`Validate options and answers in folder: ${folderName}`, () => {
    subfolders.forEach(subfolder => {
      const jsonFilePath = path.join(baseDir, subfolder, 'info.json');

      test(`Check options and answers in ${subfolder}`, () => {
        const rawData = fs.readFileSync(jsonFilePath);
        const jsonData = JSON.parse(rawData);
        const questions = extractAllQuestions(jsonData);

        questions.forEach(question => {
          validateQuestionOptions(question);
          validateAnswerInOptions(question);
        });
      });
    });
  });
}

// Run validations for all folders
validateFolderQuestions('data');
validateFolderQuestions('linkwords');
validateFolderQuestions('verbs');
validateFolderQuestions('adjectives');
validateFolderQuestions('firstconditional');