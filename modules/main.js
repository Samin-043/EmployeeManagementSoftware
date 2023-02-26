import { Employee } from "./employee.js";
import { LinkedList } from "./LinkedListImplementation.js";




var count_row = 1;
let employee_name, employee_phone, employee_department, employee_role, employee_email, employee_birthdate, custom_employee, employee_joiningDate;
let employeeSalary, empSalary;

var insert_delete = false;
var check = false;

var totalEmployee = 50;
var employeeCount = 0;

let detailsButtonId = 1;


let list_node = new LinkedList();


var form = document.getElementById('formId');

form.addEventListener('submit', function (e) {

    createAccount(e);
});



function createAccount(event) {

    event.preventDefault()

    custom_employee = new Employee(employee_name, employee_phone, employee_department, employee_role, employee_joiningDate, employee_email, employee_birthdate, employeeSalary);


    custom_employee.name = document.forms["customform"]["f_name"].value;
    custom_employee.email = document.forms["customform"]["f_email"].value;


    employee_name = document.forms["customform"]["f_name"].value;
    custom_employee.phone = document.forms["customform"]["f_phone"].value;



    let departmentSelection = document.getElementById("f_departmentSelection");
    let roleSelection = document.getElementById("f_jobTitleSelection");


    custom_employee.department = departmentSelection.options[departmentSelection.selectedIndex].text;
    custom_employee.role = roleSelection.options[roleSelection.selectedIndex].text;


    employee_email = document.forms["customform"]["f_email"].value;
    custom_employee.birthdate = document.forms["customform"]["f_birthdate"].value;

    custom_employee.joiningDate = document.forms["customform"]["f_dateOfJoining"].value;


    var temp_email = custom_employee.email;
    var ck = list_node.search(temp_email);



    if (ck === false) {

        let parent_value = document.getElementById("employee-list");
        let payList = document.getElementById("employeePayList");


        let employeeIndex = document.createElement("div");
        employeeIndex.className = "row employee-section";
        employeeIndex.id = "employee-section-id";


        let payrollIndex = document.createElement("div");
        payrollIndex.className = "row employee-section";
        payrollIndex.id = "payroll-section-id";



        let checkBoxSection = document.createElement("div");
        checkBoxSection.className = "col check-box-section";
        checkBoxSection.id = "check-box-id";
        let checkbox = document.createElement("input");
        checkbox.type = "radio";
        checkbox.name ="select-employee-radio";
        checkbox.id = count_row;
        checkbox.addEventListener("click", checkStatus);

        checkBoxSection.appendChild(checkbox);



        let nameSection = document.createElement("div");
        nameSection.className = "col name-section";
        nameSection.innerHTML = custom_employee.name;


        let phoneSection = document.createElement("div");
        phoneSection.className = "col phone-section";
        phoneSection.innerHTML = custom_employee.phone;


        let departmentSection = document.createElement("div");
        departmentSection.className = "col department-section";
        departmentSection.innerHTML = custom_employee.department;


        // let designationSection = document.createElement("div");
        // designationSection.className = "col designation-section";
        // designationSection.innerHTML = custom_employee.role;
        // employee_role = custom_employee.role;



        let emailSection = document.createElement("div");
        emailSection.className = "col email-section";
        emailSection.innerHTML = custom_employee.email;




        let birthdaySection = document.createElement("div");
        birthdaySection.className = "col birthdate-section";
        birthdaySection.innerHTML = custom_employee.birthdate;




        employeeIndex.appendChild(checkBoxSection);
        employeeIndex.appendChild(nameSection);
        employeeIndex.appendChild(phoneSection);
        employeeIndex.appendChild(departmentSection);
        employeeIndex.appendChild(emailSection);
        employeeIndex.appendChild(birthdaySection);



        //payroll section
        let nameSectionTwo = document.createElement("div");
        nameSectionTwo.className = "col name-section";
        nameSectionTwo.innerHTML = custom_employee.name;


        let roleSection = document.createElement("div");
        roleSection.className = "col designation-section";
        roleSection.innerHTML = custom_employee.role;

        // console.log(custom_employee.joiningDate);


        const prevDate = new Date(custom_employee.joiningDate);
        const prevYear = prevDate.getFullYear();

        const today = new Date();
        const year = today.getFullYear();


        let diff_year = yearsDiff(year, prevYear);
        console.log(diff_year);


        let num_of_experience = diff_year;
        let salary = document.getElementById("form-salary").value;



        /*experience wise salary update*/
        // if (num_of_experience >= 3) {
        //     salary = salary * 8;
        // }
        // else if (num_of_experience >= 1 && num_of_experience < 3) {
        //     salary = salary * 5;
        // }
        // else if (num_of_experience < 1) {
        //     salary = salary * 3.5;
        // }


        //payroll experience section
        let experienceSection = document.createElement("div");
        experienceSection.className = "col designation-section";
        experienceSection.innerHTML = num_of_experience + " years";



        employeeSalary = salary;
        custom_employee.newSalary.total = employeeSalary;

        console.log("Employee Salary : ");
        console.log(custom_employee.newSalary.total);

        custom_employee.newSalary.basic = (employeeSalary * 60) / 100;
        custom_employee.newSalary.medicalAllowance = (employeeSalary * 5) / 100;
        custom_employee.newSalary.foodAllowance = (employeeSalary * 5) / 100;
        custom_employee.newSalary.houseRent = (employeeSalary * 20) / 100;
        custom_employee.newSalary.conveyance = (employeeSalary * 10) / 100;




        let salarySection = document.createElement("div");
        salarySection.className = "col salary-section";
        let newSalaryButton = document.createElement("button");
        newSalaryButton.innerHTML = "view";
        newSalaryButton.className = "salaryButtonProperties";
        newSalaryButton.id = "salaryButtonId";



        let salaryRangeSection = document.createElement("div");
        salaryRangeSection.className = "col email-section";
        salaryRangeSection.innerHTML = salary;


        let buttonSection = document.createElement("div");
        buttonSection.className = "col button-section";

        let salaryDetails = document.createElement('a');
        salaryDetails.innerHTML = "details";
        salaryDetails.className = "detailsClass";
        salaryDetails.id = "detailsId";
        salaryDetails.href = "#employeeSalaryIndex";

        buttonSection.appendChild(salaryDetails);


        let updatebuttonSection = document.createElement("div");
        updatebuttonSection.className = "col button-section";

        let updateSalary = document.createElement('a');
        updateSalary.innerHTML = "update";
        updateSalary.className = "updateSalaryClass";
        updateSalary.id = "updateSalaryId";
        updateSalary.href = "#salaryUpdateSection";

        updatebuttonSection.appendChild(updateSalary);


        // payrollIndex
        payrollIndex.appendChild(nameSectionTwo);
        payrollIndex.appendChild(roleSection);
        payrollIndex.appendChild(experienceSection);
        payrollIndex.appendChild(salaryRangeSection);
        payrollIndex.appendChild(buttonSection);
        payrollIndex.appendChild(updatebuttonSection);

        
        parent_value.appendChild(employeeIndex);
        payList.appendChild(payrollIndex);

        count_row++;



        //........employee add in the list......//
        document.getElementById("formId").reset();
        list_node.add(custom_employee);

        console.log(list_node.size);
        employeeCount = list_node.size;


        employeeAddNotification();
        
        document.getElementById("totalEmployees").innerHTML = employeeCount;
        document.getElementById("newEmployee").innerHTML = employeeCount;
        document.getElementById("jobApplicants").innerHTML = employeeCount;

    }
    else {
        document.getElementById("formId").reset();
        alert("This employee mail is already there!");

        document.getElementById("totalEmployees").innerHTML = employeeCount;
        document.getElementById("newEmployee").innerHTML = employeeCount;
        document.getElementById("jobApplicants").innerHTML = employeeCount;
    }


    var salaryDetails = document.querySelectorAll("a.detailsClass");
    for (let index = 0; index < salaryDetails.length; index++) {
        salaryDetails[index].addEventListener("click", function () {
            employeeSalaryShow(index);
        });
    }


    var salaryUpdate=document.querySelectorAll("a.updateSalaryClass");
    for(let index=0;index<salaryUpdate.length;index++)
    {
        salaryUpdate[index].addEventListener("click",function(){
            employeeSalaryUpdate(index);
        });
    }
    //list_node.printLinkedList();
}




function yearsDiff(year, prevYear) {
    return year - prevYear;
}




function employeeAddNotification() {
    const toastLiveExample = document.getElementById('liveToast')
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show();

    document.getElementById('formId').style.display="block";
}





var previousEmailButton = document.getElementById("previousEmailId");

previousEmailButton.addEventListener('click', function () {
    prevEmailData();
});


function prevEmailData() {

    document.getElementById("employeeSalaryIndex").style.display = "none";

    var index = 0;
    var email = "example";
    let email_data = document.getElementById("employee-list");
    while (email_data.hasChildNodes()) {

        if (email_data.children[index].children[0].children[0].checked) {
            email = email_data.children[index].children[4].innerHTML;
            break;
        }
        index++;
    }

    console.log("Previous email : ");
    console.log(email);

    document.getElementById("prev-email").value = email;

    document.getElementById('showDeleteUpdateButton').classList.remove('visible');
    document.getElementById('showDeleteUpdateButton').classList.add('not-visible');
}




var deleteButton = document.getElementById("deleteButtonId");

deleteButton.addEventListener('click', function () {
    deleteEmployee();
});



function deleteEmployee() {

    document.getElementById("employeeSalaryIndex").style.display = "none";

    console.log("Print linked list : ");
    list_node.printLinkedList();

    var index = 0;
    var email = "example";
    let value = document.getElementById("employee-list");
    let payList = document.getElementById("employeePayList");


    while (value.hasChildNodes()) {

        if (value.children[index].children[0].children[0].checked) {
            email = value.children[index].children[4].innerHTML;
            value.removeChild(value.children[index]);
            payList.removeChild(payList.children[index]);


            list_node.delete(email);


            let numOfResignedEmployee = document.getElementById("resignedEmployee").innerHTML;
            numOfResignedEmployee++;

            let numOfTotalEmployee = document.getElementById("totalEmployees").innerHTML;
            numOfTotalEmployee--;

            let numOfNewEmployee = document.getElementById("newEmployee").innerHTML
            numOfNewEmployee--;

            document.getElementById("resignedEmployee").innerHTML = numOfResignedEmployee;
            document.getElementById("totalEmployees").innerHTML = numOfTotalEmployee;
            document.getElementById("newEmployee").innerHTML = numOfNewEmployee;

            break;
        }
        index++;
    }

    document.getElementById('showDeleteUpdateButton').classList.remove('visible');
    document.getElementById('showDeleteUpdateButton').classList.add('not-visible');


    console.log("After delete employee from list : ");
    console.log(list_node.size);

    check = false;
}





var searchButton = document.getElementById("formSearchId");
searchButton.addEventListener('submit', function (e) {
    updateFormSearch(e);
});



function updateFormSearch(event) {

    event.preventDefault();

    document.getElementById("employeeSalaryIndex").style.display = "none";

    let prev_email = document.forms["customform-two"]["f_prev_email"].value;
    console.log(prev_email);

    let new_email = document.forms["customform-two"]["f_new_email"].value;
    console.log(new_email);

    list_node.updateLinkedListValue(prev_email, new_email);
    list_node.printLinkedList();


    var i = 0;
    var email = "example";
    let value = document.getElementById("employee-list");


    while (value.hasChildNodes()) {
        let val = value.children[i].children[4].innerHTML;
        if (val == prev_email) {
            value.children[i].children[4].innerHTML = new_email;
            break;
        }
        i++;
    }

    document.getElementById("formSearchId").reset();
}




function checkStatus() {

    document.getElementById("employeeSalaryIndex").style.display = "none";

    var new_index = 0;
    let value = document.getElementById("employee-list");
    let payList = document.getElementById("employeePayList");

    if (check == false) {
        while (value.hasChildNodes()) {

            if (value.children[new_index].children[0].children[0].checked) {
                document.getElementById('showDeleteUpdateButton').classList.remove('not-visible');
                document.getElementById('showDeleteUpdateButton').classList.add('visible');

                check = true;
                break;
            }
            new_index++;
        }
    }
    else {
        document.getElementById('showDeleteUpdateButton').classList.remove('visible');
        document.getElementById('showDeleteUpdateButton').classList.add('not-visible');
        value.children[new_index].children[0].children[0].checked = false;

        check = false;
    }
}



function employeeSalaryShow(index) {

    document.getElementById("salaryUpdateSection").style.display="none";
    document.getElementById("payROllId").style.display = "none";
    document.getElementById("employeeSalaryIndex").style.display = "block";
    


    let parentValue = document.getElementById("employeePayList");

    let name = parentValue.children[index].children[0].innerHTML;
    let experience = parentValue.children[index].children[2].innerHTML;
    let salary = parentValue.children[index].children[3].innerHTML;


    document.getElementById("employeeNameId").innerHTML = name;
    document.getElementById("employeeYearsOfExperienceId").innerHTML = experience;
    document.getElementById("employeeSalaryId").innerHTML = salary;

    let basic = salary * 0.6;
    let medicalAllowance = salary * 0.05;
    let houseRent = salary * 0.2;
    let conveyance = salary * 0.1;
    let foodAllowance = salary * 0.05;


    document.getElementById("employeeBasicId").innerHTML = basic;
    document.getElementById("medicalAllowanceId").innerHTML = medicalAllowance;
    document.getElementById("houseRentId").innerHTML = houseRent;
    document.getElementById("conveyanceId").innerHTML = conveyance;
    document.getElementById("foodAllowanceId").innerHTML = foodAllowance;
}


let prevButton = document.getElementById("salaryBackId");

prevButton.addEventListener("click", function () {
    hideSalaryPage();
});


function hideSalaryPage() {
    document.getElementById("employeeSalaryIndex").style.display = "none";
    document.getElementById("payROllId").style.display = "block";
}




let prevSalary,rememeberIndex;

function employeeSalaryUpdate(index){

    document.getElementById("salaryUpdateSection").style.display="block";
    document.getElementById("payROllId").style.display = "none";

    let parentValue = document.getElementById("employeePayList");
    let salary = parentValue.children[index].children[3].innerHTML;


    document.getElementById("upBasicId").value=salary;
    // document.getElementById("upmedicalAllowanceId").value=medicalAllowance;
    // document.getElementById("uphouseRentId").value=houseRent;
    // document.getElementById("upconveyanceId").value=conveyance;
    // document.getElementById("upfoodAllowanceId").value=foodAllowance;

    prevSalary=salary;
    rememeberIndex=index;
}



var salaryUpdateButton = document.getElementById("salaryUpdateButtonId");
salaryUpdateButton.addEventListener('click', function () {
    salaryUpdateFunction();
});




function salaryUpdateFunction(){

    document.getElementById("payROllId").style.display = "block";

    let parentValue = document.getElementById("employeePayList");
    let salary = parentValue.children[rememeberIndex].children[3].innerHTML;

    console.log("Previous Salary : ");
    console.log(prevSalary);
    
    
    let newSalary=document.getElementById("upBasicId").value;
    console.log(newSalary);


    // let salaryIncrease=newBasic2-prevBasic;
    // console.log("salary increase : ");
    // console.log(salaryIncrease);

    salary=parseInt(salary);
    let newSalary2=parseInt(newSalary);
    salary=newSalary2;

    console.log("After update salary  : ");
    console.log(salary);

    parentValue.children[rememeberIndex].children[3].innerHTML=salary;

    console.log(parentValue.children[rememeberIndex].children[3].innerHTML);

    document.getElementById("salaryUpdateSection").style.display="none";
}



var salaryBackButton=document.getElementById("salaryBackButtonId");
salaryBackButton.addEventListener('click',function(){
    backPrevPage();
});



function backPrevPage(){
    document.getElementById("payROllId").style.display = "block";
    document.getElementById("salaryUpdateSection").style.display = "none";
}




var salaryBackButton=document.getElementById("backHomePageId");
salaryBackButton.addEventListener('click',function(){
    backHomePage();
});



function backHomePage(){
    document.getElementById("payROllId").style.display = "block";
    document.getElementById("salaryUpdateSection").style.display = "none";
}









































































