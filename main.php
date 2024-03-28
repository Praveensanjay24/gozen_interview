<?php

// Calculate total marks
function calculateTotalMarks($marks) {
    return array_sum($marks);
}

// Calculate average marks
function calculateAverageMarks($marks) {
    return array_sum($marks) / count($marks);
}

// Calculate date of birth
function calculateAge($dob) {
    $dobObj = new DateTime($dob);
    $now = new DateTime();
    $age = $now->diff($dobObj);
    return $age->y;
}

// Input student details
$students = array();
$student_count = 2; // Change this value to add more students

for ($i = 1; $i <= $student_count; $i++) {
    echo "Enter details for Student $i:\n";
    $name = readline("Name: ");
    $dob = readline("Date of Birth (YYYY-MM-DD): ");
    $marks = array();
    for ($j = 1; $j <= 3; $j++) {
        $marks[] = intval(readline("Enter mark $j: "));
    }

    $students[] = array(
        "name" => $name,
        "dob" => $dob,
        "marks" => $marks
    );
}

// Output
foreach ($students as $key => $student) {
    echo "Student " . ($key + 1) . ": \n";
    echo "Name: " . $student['name'] . "\n";
    echo "Date of Birth: " . $student['dob'] . "\n";
    echo "Age: " . calculateAge($student['dob']) . "\n";
    echo "Marks: " . implode(", ", $student['marks']) . "\n";
    echo "Total Marks: " . calculateTotalMarks($student['marks']) . "\n";
    echo "Average Marks: " . calculateAverageMarks($student['marks']) . "\n\n";
}
?>
