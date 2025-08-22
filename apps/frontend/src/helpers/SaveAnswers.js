export async function saveAnswers(pageType) {
  const token = window.localStorage.getItem("token");

  try {
    let answersKey;
    const answersData = {
      answers: [],
      pageType: ''
    };

    switch (pageType) {
      case 'baselineTraining':
        answersKey = 'baselineTrainingAnswers';
        break;
      case 'baselineTraining2':
          answersKey = 'baselineTraining2Answers';
          break;
      case 'touchTraining':
        answersKey = 'TouchTrainingAnswers';
        break;
      case 'animationTraining':
        answersKey = 'animationTrainingAnswers';
        break;
      case 'touchTest':
        answersKey = 'touchTestAnswers';
        break;
      case 'animationTest':
        answersKey = 'animationTestAnswers';
        break;
      case 'baselineTest':
        answersKey = 'baselineTestAnswers';
        break;
      case 'baselineTest2':
          answersKey = 'baselineTest2Answers';
          break;
      case 'practice':
        answersKey = 'practiceAnswers';
        break;
      default:
        throw new Error('Invalid page type');
    }

    const answers = localStorage.getItem(answersKey);

    if (!answers) {
      console.error(`No answers found for ${pageType}`);
      return;
    }

    // answersData = {
    //    answers : answers,
    //    pageType: answersKey
    // };
    answersData.answers = answers;
    answersData.pageType = answersKey;

    console.log("answerData:", answersData)

    const response = await fetch('/submit/answers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(answersData),
    });

    if (!response.ok) {
      throw new Error(`Failed to send ${pageType} answers to the backend`);
    }

    const data = await response.json();
    console.log(`${pageType} Answers sent successfully:`, data);
  } catch (error) {
    console.error(`Error in storing ${pageType} answers:`, error);
  }
}