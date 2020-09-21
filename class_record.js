/*
Question: 
- 1. calculate individual student score and define which letter equivalent
-2. calculate the average, minumum and max of each exam
argument: an object of student data(obj)
return: an object with two arrays - studentGrades (strings), exams (objs)

Think abstraction:
  1. - compute individual student exams avg. 
     - compute individual student exercises
     - compute average score
     - check letter equivalent
     - combine score and letter to a string, and add to studentGrades arr
  2. - extract exams to an array of exams (nest array)
     - iterate through exams, at each iteration calculate total, average, min, and max 
     - add each exam result as obj to an array (exams) 
*/

function generateClassRecordSummary(scoresData) {
  let allexams = extractSingleKeyValueOfScores(scoresData, 'exams');   // [ [88, 65,...], ]
  let allExercises = extractSingleKeyValueOfScores(scoresData, 'exercises')

  let allStudentComputedGrades = generateAllStudentGrade(allexams, allExercises);
  let allExamSummary = generateAllExamsAnalysis(allexams);

  return {
    studentGrades: allStudentComputedGrades,
    exams: allExamSummary,
  }
}

function generateAllExamsAnalysis(exams) {
  let totalExamSummary = [];
  let totalExams = exams[0].length;

  for(let idx = 0; idx < totalExams; idx += 1 ) {
    let examAnalysis = generateExamAnalysis(exams, idx)
    totalExamSummary.push(examAnalysis);
  }
  
  return totalExamSummary;
}

function generateExamAnalysis(exams, index) {
  let examSet = [];
  exams.forEach(examScores => {
    examSet.push(examScores[index])
  })
  let averageScore = averageExamScores(examSet);
  let minmumScore = findMinimum(examSet);
  let maxScore = findMaximum(examSet);
  
  return  {
    average: averageScore,
    minimum: minmumScore,
    maximum: maxScore,
  }
}

function findMinimum(scores) {
  let smallest = scores[0];
  scores.forEach(score => {
    smallest = smallest > score ? score : smallest; 
  })
  return smallest;
}

function findMaximum(scores) {
  let largest = scores[0];
  scores.forEach(score => {
    largest = largest > score ? largest : score; 
  })
  return largest;
}


function generateAllStudentGrade(exams, exercises) {
  let studentGrades = [];
  for (let idx = 0; idx < exams.length; idx += 1) {
    let result = generateStudentgrade(exams[idx], exercises[idx])
    studentGrades.push(result);
  }
  return studentGrades;
}

function generateStudentgrade(exams, exercises) {
 
  let examAverage = averageExamScores(exams);
  let totalExercise = TotalScores(exercises);
  let finalPercentGrade = studentFinalPercentGrade(examAverage, totalExercise);
  let letterGrade = matchLetterGrade(finalPercentGrade);

  return finalPercentGrade.toString() + '(' + letterGrade + ')';
 
}

function averageExamScores(scores) {
  let total = TotalScores(scores);
  return total / scores.length;
}

function TotalScores(scores) {
  return scores.reduce((sum, score) => sum + score);
}

function studentFinalPercentGrade(exam, exercise) {
  const examWeight = .65;
  const exerciseWeight = .35;
  return Math.round(exam * examWeight + exercise * exerciseWeight);
}

function matchLetterGrade(score) {
  if (score >= 93 && score <= 100) {
    return 'A';
  } else if (score >= 85 && score <= 92) {
    return 'B';
  } else if (score >= 77 && score <= 84) {
    return 'C';
  } else if (score >= 69 && score <= 76) {
    return 'D';
  } else if (score >= 60 && score <= 68) {
    return 'E';
  } else {
    return 'F';
  }
}

function extractSingleKeyValueOfScores(scoresData,key) {
  return Object.keys(scoresData).map(student => scoresData[student].scores[key]);
}




let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

let exams = [  [ 90, 95, 100, 80 ],
[ 50, 70, 90, 100 ],
[ 88, 87, 88, 89 ],
[ 100, 100, 100, 100 ],
[ 50, 80, 60, 90 ]];

let exercises = [ [ 20, 15, 10, 19, 15 ],
[ 0, 15, 20, 15, 15 ],
[ 10, 20, 10, 19, 18 ],
[ 10, 15, 10, 10, 15 ],
[ 10, 0, 10, 10, 0 ]];

//console.log(generateAllStudentGrade(exams, exercises))
console.log(generateClassRecordSummary(studentScores))
//console.log(extractSingleKeyValueOfScores(studentScores, 'exams'))