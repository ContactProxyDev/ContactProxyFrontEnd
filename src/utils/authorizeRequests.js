import axios from "axios"

const SERVER_URL = 'http://37.192.52.216:1104'

export const authorizeRequests = {
    authorization(email, name, surname, password) {
        return axios({
            method: 'post',
            url: SERVER_URL + '/contact-proxy/authorize/register',
            data: {
                email: email,
                name: name,
                surname: surname,
                password: password,
            }
        })
    },

    login(email, password) {
        return axios({
            method: 'post',
            url: SERVER_URL + '/contact-proxy/authorize/login',
            data: {
                email: email,
                password: password,
            }
        })
    },

    restorePassword(email) {
        return axios({
            mathod: 'post',
            url: SERVER_URL + '/contact-proxy/authorize/forgotPassword',
            data: {
                email: email
            }
        })
    },

    changePassword() {
        return axios({
            mathod: 'post',
            url: SERVER_URL + '/contact-proxy/authorize/changePassword/' + id,
            data: {
                id: id,
                password: newPassword,
            }
        })
    }
}