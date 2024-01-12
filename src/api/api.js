import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://6544a7a15a0b4b04436ca955.mockapi.io/',
});
export const userAPI = {
    getUsers() {
        return instance.get(`user`).then(r => r.data).catch(e => e);
    },
    getAll(page = 1) {
        return instance.get(`homeWork/`, {
            params: {
                limit: 9,
                page: page
            }
        }).then(r => r.data).catch(e => e);
    },
    getAllHomeWork() {
        return instance.get(`homeWork/`).then(r => r.data).catch(e => e);
    },
    getHomeWork(id) {
        return instance.get(`homeWork/${id}`).then(r => r.data).catch(e => e);
    },
    getComment(homeWorkId){
        return instance.get(`/homeWork/${homeWorkId}/comments/`).then(r => r.data).catch(e => e);
    },
    updateHomeWork(homeWorkId, complete) {
        return instance.put(`/homeWork/${homeWorkId}`, {complete: !complete}).then(r => r.data).catch(e => e);
    },

    addComment(homeWorkId, comment,time) {
        return instance.post(`/homeWork/${homeWorkId}/comments/`, {homeWorkId, comment,time}).then(r => r.data).catch(error => error);
    },
    ////////React\\\\\\\
    getHomeWorkReact(page = 1) {
        return instance.get(`homeWorkReact/`, {
            params: {
                limit: 9,
                page: page
            }
        }).then(r => r.data).catch(e => e);
    },
    updateHomeWorkReact(homeWorkId, complete) {
        return instance.put(`/homeWorkReact/${homeWorkId}`, {complete: !complete}).then(r => r.data).catch(e => e);
    },
    getReactHW(id) {
        return instance.get(`homeWorkReact/${id}`).then(r => r.data).catch(e => e);
    },
    getCommentReact(homeWorkId){
        return instance.get(`/homeWorkReact/${homeWorkId}/commentReact/`).then(r => r.data).catch(e => e);
    },
    addCommentReact(homeWorkId, comment,time) {
        return instance.post(`/homeWorkReact/${homeWorkId}/commentReact/`, {homeWorkId, comment,time }).then(r => r.data).catch(error => error);
    },

}




