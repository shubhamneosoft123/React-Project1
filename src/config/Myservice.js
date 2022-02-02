import  {MAIN_URL}  from "./Url";
import { API_URL } from "./Url";
import axios from "axios";

export function getEmployee(){
    return axios.get(MAIN_URL);
}

export function deleteEmployee(id){
    return axios.delete(`${MAIN_URL}${id}`);
}

export function addEmployee(data){
    return axios.post(MAIN_URL,data)
}

export function getEmployeeById(id){
    return axios.get(`${MAIN_URL}${id}`);
}
export function updateEmployee(id,data){
    return axios.put(`${MAIN_URL}${id}`,data);
}

// Products fech api

export function getProducts(){
    return axios.get(API_URL);
}