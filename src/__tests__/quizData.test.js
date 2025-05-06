const fs = require('fs');
const path = require('path');

// Function to validate the structure of the JSON
function validateJsonStructure(jsonData) {
  expect(jsonData).toHaveProperty('user');
  expect(jsonData.user).toHaveProperty('username');
  expect(jsonData.user).toHaveProperty('profileImage');
  expect(jsonData.user).toHaveProperty('socialLink');

  expect(jsonData).toHaveProperty('topics');
  expect(Array.isArray(jsonData.topics)).toBe(true);

  jsonData.topics.forEach(topic => {
    expect(topic).toHaveProperty('topic');
    expect(topic).toHaveProperty('questions');
    expect(Array.isArray(topic.questions)).toBe(true);

    topic.questions.forEach(question => {
      expect(question).toHaveProperty('question');
      expect(question).toHaveProperty('options');
      expect(Array.isArray(question.options)).toBe(true);
      expect(question).toHaveProperty('answer');
    });
  });
}

// Folder name pattern: 7 digits, hyphen, 4 digits
function validateFolderNamePattern(folderName) {
  const regexPattern = /^\d{7}-\d{4}$/;
  return regexPattern.test(folderName);
}

// Generic validation runner for any folder like "data", "linkwords", "verbs"
function validateFolderCategory(baseFolderName) {
  const baseDir = path.resolve(__dirname, '..', '..', 'public', baseFolderName);
  const indexFilePath = path.join(baseDir, 'index.json');
  const indexJson = JSON.parse(fs.readFileSync(indexFilePath));
  const indexFolders = indexJson.folders;

  const subfolders = fs.readdirSync(baseDir).filter(folder =>
    fs.lstatSync(path.join(baseDir, folder)).isDirectory()
  );

  describe(`Validation for folder category: ${baseFolderName}`, () => {

    test('All folders listed in index.json should exist in the filesystem', () => {
      indexFolders.forEach(folder => {
        const folderPath = path.join(baseDir, folder);
        expect(fs.existsSync(folderPath)).toBe(true);
      });
    });

    test('All folders in the filesystem should be listed in index.json', () => {
      subfolders.forEach(folder => {
        expect(indexFolders).toContain(folder);
      });
    });

    test('All folder names should follow the pattern #######-####', () => {
      subfolders.forEach(folder => {
        expect(validateFolderNamePattern(folder)).toBe(true);
      });
    });

    subfolders.forEach(subfolder => {
      const jsonFilePath = path.join(baseDir, subfolder, 'info.json');

      test(`Folder ${subfolder} should contain a valid info.json`, () => {
        expect(fs.existsSync(jsonFilePath)).toBe(true);
      });

      test(`Validate structure of info.json in ${subfolder}`, () => {
        const rawData = fs.readFileSync(jsonFilePath);
        const jsonData = JSON.parse(rawData);
        validateJsonStructure(jsonData);
      });
    });
  });
}

// Run validations for all folders
validateFolderCategory('data');
validateFolderCategory('linkwords');
validateFolderCategory('verbs');
validateFolderCategory('adjectives');
validateFolderCategory('firstconditional');