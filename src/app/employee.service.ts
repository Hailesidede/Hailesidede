import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  
  constructor(private httpClient: HttpClient){ }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/findAll`)
  }

  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}/add`,employee)
  }
  getEmployeeById(id: number) : Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${id}`,employee);
  }

  deleteEmployee(id: number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }




  
  
}
