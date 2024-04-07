import axios from 'axios';


export function fetchUserProfile(id){
    let user = axios.get(`http://127.0.0.1:8000/api/profile/${id}`)
    return user
}

export function fetchUserDocuments(id){
    let document = axios.get(`http://127.0.0.1:8000/api/mydocuments/getfiles/${id}`)
    return document
}

export function fetchFilePath(id){
    let path = axios.get(`http://127.0.0.1:8000/api/mydocuments/viewfile/${id}`)
    return path
}

