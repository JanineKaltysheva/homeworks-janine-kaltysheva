    import {
    Http
} from './../core/http.service'
import {
    ENV
} from './../config/env'

export class AuthSignService {
    //оставляю объект чтоб понимать логику
    signup({email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year}) {
        const http = new Http()

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, {
                email,
                password,
                nickname, 
                first_name, 
                last_name, phone, 
                gender_orientation, 
                city, country, 
                date_of_birth_day, 
                date_of_birth_month, 
                date_of_birth_year
            }).then((res) => {
                // Если нет авторизации - рареджектим промис, чтобы отстрелил catch
                // либо сразу дернем reject(es.message) и catch нам не нужен
                if (!res.auth) return Promise.reject(res.message)
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        })
    }

    //public/auth/signup

}