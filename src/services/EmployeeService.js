import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee";

export const getAllEmployees=()=>{
    return axios.get(EMPLOYEE_API_BASE_URL);
}

export const addEmployee=(employee)=>{
    return axios.postost(EMPLOYEE_API_BASE_URL,employee);
}

export const getEmployeeById=(employeeId)=>{
    return axios.getet(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

export const updateEmployee=(employee,employeeId)=>{
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId);
}

export const deleteEmployee=(employeeId)=>{
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId)
}