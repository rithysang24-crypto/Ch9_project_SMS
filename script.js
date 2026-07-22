let students = []
function addstudent(){
    let stu_id = document.getElementById("studentid").value.trim();
    let stu_name = document.getElementById("studentname").value.trim();
    let stu_gender = document.getElementById("gender").value;
    let stu_course = document.getElementById("course").value;
    let stu_score = Number(document.getElementById("score").value);

    if(stu_id=="" || stu_name=="" || stu_gender=="" || stu_course=="" || isNaN(stu_score)){
        alert("please fill in all fields.");
        return;
    }
    let student = {
        stu_id:stu_id,
        stu_name:stu_name,
        stu_gender:stu_gender,
        stu_course:stu_course,
        stu_score:stu_score
    };
    students.push(student);
    display_students();
    clearform();
}
function calculate_grade(stu_score){
    if(stu_score>=90){
        return "A";
    }
    else if(stu_score>=80){
        return "B";
    }
    else if(stu_score>=70){
        return "C";
    }
    else if(stu_score>=60){
        return "D";
    }
    else{
        return "F";
    }
    
}
function get_status(stu_score){
    if(stu_score>=60){
        return "Pass";
    }
    else{
        return "Fail";
    }
}
function get_course_descriotion(stu_course){
    switch(stu_course){
        case "html":
            return "HTML";
        case "css":
            return "CSS";
        case "js":
            return "JS";
        default:
            return "UNknown";

    }
}
function display_students(){
    let output ="";
    for(let i=0;i<students.length;i++){
    output +=`
    <tr>
        <td>${students[i].stu_id}</td>
        <td>${students[i].stu_name}</td>
        <td>${students[i].stu_gender}</td>
        <td>${students[i].stu_course}</td>
        <td>${get_course_descriotion(students[i].stu_course)}</td>
        <td>${students[i].stu_score}</td>
        <td>${calculate_grade(students[i].stu_score)}</td>
        <td>${get_status(students[i].stu_score)}</td>
    </tr>
    `;
    
    }
    document.getElementById("studenttable").innerHTML = output;
    document.getElementById("total").textContent = students.length;
    
}
function clearform(){
    document.getElementById("studentid").value="";
    document.getElementById("studentname").value="";
    document.getElementById("gender").value="";
    document.getElementById("course").value="";
    document.getElementById("score").value="";
}