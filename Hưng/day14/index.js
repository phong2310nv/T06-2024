// Bài 1: từ mảng student
const students = [
  { name: "Nghiêm 1", scores: [90, 85, 92] },
  { name: "Nghiêm 2", scores: [75, 80, 85] },
  { name: "Nghiêm 3", scores: [90, 95, 89] },
  { name: "Nghiem 4", scores: [100, 100, 100] },
];
// Hiển thị danh sách học sinh có điểm trung bình lớn hơn 90

// Tạo một mảng mới với các thông tin điểm mỗi môn được lưu vào từng key

const newStudents = students.map(function (std) {
  const newstd = {};
  newstd.name = std.name;
  newstd.scores = std.scores;
  //   newstd.isPassed = std.scores >= 90;
  if (std.scores >= 90) {
    newstd.isPassed = "true";
  } else {
    newStd.isPassed = "false";
  }
  return newstd;
});
console.log(newStudents);
