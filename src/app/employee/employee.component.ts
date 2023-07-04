import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = new Employee();
  selectedEmployee: Employee | null = null;
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      },
      (error: any) => {
        console.error(error);
        // Optionally, you can display an error message or perform any other desired action.
      }
    );
  }

  addEmployee(): void {
    this.errorMessage = '';
    // Validate form inputs
    if (!this.newEmployee.id || !this.newEmployee.name || !this.newEmployee.position) {
      this.errorMessage = 'Please enter all required fields.';
      return;
    }

    this.employeeService.addEmployee(this.newEmployee).subscribe(
      () => {
        this.employees.push(this.newEmployee);
        this.newEmployee = new Employee();
        // Optionally, you can display a success message or perform any other desired action.
      },
      (error: any) => {
        console.error(error);
        // Optionally, you can display an error message or perform any other desired action.
      }
    );
  }

  deleteEmployee(employee: Employee): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(employee).subscribe(
        () => {
          const index = this.employees.findIndex(emp => emp.id === employee.id);
          if (index !== -1) {
            this.employees.splice(index, 1);
          }
          // Optionally, you can display a success message or perform any other desired action.
        },
        (error: any) => {
          console.error(error);
          // Optionally, you can display an error message or perform any other desired action.
        }
      );
    }
  }

  openEditModal(employee: Employee): void {
    this.selectedEmployee = { ...employee };
  }

  updateEmployee(): void {
    this.errorMessage = '';
    // Validate form inputs
    if (!this.selectedEmployee?.name || !this.selectedEmployee?.position) {
      this.errorMessage = 'Please enter all required fields.';
      return;
    }

    this.employeeService.updateEmployee(this.selectedEmployee).subscribe(
      () => {
        const index = this.employees.findIndex(emp => emp.id === this.selectedEmployee!.id);
        if (index !== -1) {
          this.employees[index] = { ...this.selectedEmployee! };
        }
        this.selectedEmployee = null;
        
      },
      (error: any) => {
        console.error(error);
        
      }
    );
  }
}
