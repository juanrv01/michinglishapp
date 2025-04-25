# ✨ Michinglish App – Contribution Guide

Welcome to the Michinglish App! This project allows you to collaborate by adding new sets of questions (e.g., **adjectives**, **adverbs**, **modals**, etc.) for English learners. This guide will walk you through how to contribute properly to the app.

---

## ✅ Step 1: Check the Redux Store

First, **verify if the question category you want to contribute to already exists** in the `store`.

Go to the file:
```
src/store/store.js
```
If you **don't see your category** (e.g., `adjectives`, `adverbs`), you must:

1. Create a new folder inside `src/store` (e.g., `adjectives`).
2. Add a `slice` using Redux Toolkit (`createSlice`).
3. Export the reducer from that slice.
4. Register the reducer in the main store (`store.js`).

> Redux is a state management tool used in React to manage global app data like our quiz content.

---

## ✅ Step 2: Load Data in App

Once the store is ready, you need to **fetch and display the data** in the UI.

In `App.jsx`, you’ll find a helper function called `fetchDataHelper` which is used to retrieve the data from the `public/` directory.

Make sure you add a `fetchDataHelper(...)` call with the appropriate `setData`, `setLoading`, and `setError` dispatchers for your category (e.g., `setDataAdjectives`, etc.).

---

## ✅ Step 3: Display Questions in Module

Now you must create or update a module to render the questions.

Go to:
```
src/components/modules/
```
Create a new component like `AdjectivesModule.jsx`. Use the Redux `useSelector` to get the questions, and pass them to the `QuizCard` component.

Example:
```js
const data = useSelector((state) => state.adjectives.data);
```

---

## ✅ Step 4: Add Tests to Validate Your Contribution

Your new folder must be included in the test files located in:
```
src/__tests__/
```

Update `duplicateQuestions.test.js` to include your new category like this:
```js
runDuplicateTestForDirectory('adjectives');
```

These tests check for:
- Repeated questions across folders.
- Proper format and options.
- JSON validity.

Always **run the tests** before submitting:
```bash
npm run test
```

---

## ✅ Step 5: Add Your Questions

1. Go to the corresponding folder inside `public/` (e.g., `public/adjectives`).
2. Create a folder with **your university code** (e.g., `2025458-1234`).
3. Inside that folder, create a file named `info.json`.
4. Add your questions in the required JSON format.

Example JSON structure:
```json
{
  "user": {
    "username": "Fredy Ball",
    "profileImage": "...",
    "socialLink": "@fredyballest"
  },
  "topics": [
    {
      "topic": "adjectives",
      "questions": [
        {
          "question": "Which word is an adjective in the sentence...",
          "options": ["..."],
          "answer": "..."
        }
      ]
    }
  ]
}
```

Also, don't forget to **register your folder** in the `index.json`:
```json
{
  "folders": [
    "2025458-1234"
  ]
}
```

---

## 💌 Thank You!

Thank you so much for contributing to this educational tool.

Your collaboration helps build a great learning platform for others.  
With love,  
**Prof. Fredy** ❤️