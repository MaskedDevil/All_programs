const marks = [80,80,50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    let sumMarks = 0;
    for(num of marks)
        sumMarks += num;
    let avgMarks = sumMarks/marks.length;
    if(avgMarks >= 1 && avgMarks <60) return 'F';
    if(avgMarks <70) return 'D';
    if(avgMarks <80) return 'C';
    if(avgMarks <90) return 'B';
    if(avgMarks <=100) return 'A';
}