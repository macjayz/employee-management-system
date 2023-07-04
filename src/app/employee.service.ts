import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://your-api-endpoint.com/employees'; // Replace with your API endpoint URL

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  deleteEmployee(employee: Employee): Observable<any> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.delete(url);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Employee>(url, employee);
  }
}
