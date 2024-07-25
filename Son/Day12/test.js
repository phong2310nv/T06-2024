function findStudentWithHighestScore(students) {
    if (students.length === 0) {
      console.log("Không có học sinh nào trong danh sách.");
      return;
    }
  
    let highestScore = students[0].score; 
    let studentWithHighestScore = students[0].name; 
    for (const student of students) {
      if (student.score > highestScore) {
        highestScore = student.score;
        studentWithHighestScore = student.name;
      }
    }
  
    console.log(`Học sinh có điểm cao nhất là: ${studentWithHighestScore} với điểm ${highestScore}`);
  }
  
  
  const students = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 85 },
    { name: "Carol", score: 95 },
    { name: "David", score: 80 },
    { name: "Eve", score: 92 },
  ];
  
  findStudentWithHighestScore(students);
  