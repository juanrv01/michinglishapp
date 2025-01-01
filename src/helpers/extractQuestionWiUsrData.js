export function extractQuestionsWithUserData(data) {
  const allQuestions = [];
  data.forEach((userData) => {
    const { user, topics } = userData;
    topics.forEach((topic) => {
      const { questions } = topic;
      questions.forEach((question) => {
        allQuestions.push({
          ...question,
          profileImage: user.profileImage,
          socialLink: user.socialLink,
          username: user.username
        });
      });
    });
  });
  return allQuestions;
}