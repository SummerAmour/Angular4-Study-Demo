// import { Injectable } from '@angular/core';
// import { HttpClient, HttpParams, HttpHandler } from "@angular/common/http";

// @Injectable()
// export class ReportService {
//     randomUserUrl = 'https://api.randomuser.me/';

//     getUsers(pageIndex = 1, pageSize = 10, sortField, sortOrder, genders){
//         let params = new HttpParams()
//             .append('page', `${pageIndex}`)
//             .append('results', `${pageSize}`)
//             .append('sortField', sortField)
//             .append('sortOrder', sortOrder);
//         genders.forEach(gender => {
//             params = params.append('gender', gender);
//         });
//         return this.http.get(`${this.randomUserUrl}`, {
//             params: params
//         })    
//     }

//     constructor(private http: HttpClient){
        
//     }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ReportService {
    randomUserUrl = 'https://api.randomuser.me/';

    getUsers(pageIndex = 1, pageSize = 10, sortField, sortOrder, genders) {
        let params = new HttpParams()
            .append('page', `${pageIndex}`)
            .append('results', `${pageSize}`)
            .append('sortField', sortField)
            .append('sortOrder', sortOrder);
        genders.forEach(gender => {
            params = params.append('gender', gender);
        });
        console.log(params);
        return this.http.get(`${this.randomUserUrl}`, {
            params: params
        })
    }

    constructor(private http: HttpClient) {
    }
}