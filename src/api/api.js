import axios from "axios"

const instance = axios.create({
    withCredentials:true,
    headers:{
        "API-KEY": "5b096fd1-168f-49fa-beed-b76a85b01514"
    },
    baseURL:"https://social-network.samuraijs.com/api/1.0/",

});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>response.data)

    },
    unfollowUser(id){
        return instance.delete(`follow/${id}`).then(response =>response.data)

    },
    followUser(id){
        return instance.post(`/follow/${id}`).then(response =>response.data)
    }
}
export const profileAPI = {
    getProfile (userId = 18985)  {
        return instance.get(`profile/`+userId)
            .then(response =>response.data)

    }
}
export const authAPI = {
    getAuth ()  {
        return instance.get(`/auth/me/`)
            .then(response =>response.data)

    }
}
