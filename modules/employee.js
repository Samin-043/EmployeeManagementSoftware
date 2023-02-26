import { Salary } from "./salary.js";

//const newSalary=new Salary();



class Employee{

    newSalary=new Salary();
    
    constructor(name,phone,department,role,joiningDate,email,birthdate,newSalary) {
        this.name = name;
        this.phone=phone;
        this.department=department;
        this.role=role;
        this.joiningDate=joiningDate;
        this.email = email;
        this.birthdate=birthdate;
        
        this.newSalary.total=newSalary;
    }
}



export {Employee};
