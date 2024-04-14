import axios from 'axios';


export function fetchUserProfile(id){
    let user = axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
    return user
}

export function fetchUserDocuments(id){
    let document = axios.get(`http://127.0.0.1:8000/api/mydocuments/getfiles/${id}`)
    return document
}
export function fetchMedications(id){
    let fun = axios.get(`http://127.0.0.1:8000/api/medications/${id}`)
    return fun
}
export function fetchAppointments(id){
    let fun = axios.get(`http://127.0.0.1:8000/api/appointments/${id}`)
    return fun
}

export function fetchFilePath(id){
    let path = axios.get(`http://127.0.0.1:8000/api/mydocuments/viewfile/${id}`)
    return path
}
export function fetchChronicConditions(id){
    let path = axios.get(`http://127.0.0.1:8000/api/profile/chronic/get/${id}`)
    return path
}

export function deleteDocument(id){
    let fun = axios.delete(`http://127.0.0.1:8000/api/mydocuments/delete/${id}`)
    return fun
}

export function deleteMedication(id){
    let fun = axios.delete(`http://127.0.0.1:8000/api/medications/delete/${id}`)
    return fun
}

export function deleteAppointments(id){
    let fun = axios.delete(`http://127.0.0.1:8000/api/appointments/delete/${id}`)
    return fun
}
export function deleteChronicCondition(id){
    let fun = axios.delete(`http://127.0.0.1:8000/api/profile/chronic/delete/${id}`)
    return fun
}

export function addMedication(data){
    console.log(data);
    let fun = axios.post(`http://127.0.0.1:8000/api/medications/add/`,data,{headers: {'Content-Type': 'application/json'}})
    return fun
}

export function addAppointments(data){
    console.log(data);
    let fun = axios.post(`http://127.0.0.1:8000/api/appointments/add/`,data,{headers: {'Content-Type': 'application/json'}})
    return fun
}

export function addChronicCondition(data){
    console.log(data);
    let fun = axios.post(`http://127.0.0.1:8000/api/profile/chronic/add`,data,{headers: {'Content-Type': 'application/json'}})
    return fun
}



export function createUser(data){
    console.log(data);
    let fun = axios.post(`http://127.0.0.1:8000/api/profile/createuser/add`,data,{headers: {'Content-Type': 'application/json'}})
    return fun
}

export function updateUser(data){
    console.log(data);
    let fun = axios.put(`http://127.0.0.1:8000/api/profile/updateuser/update`,data,{headers: {'Content-Type': 'application/json'}})
    return fun
}

export function getUserId(data){
  
    let fun = axios.post(`http://127.0.0.1:8000/api/profile/user/login`,data,{headers: {'Content-Type': 'application/json'}})
    return fun
}
