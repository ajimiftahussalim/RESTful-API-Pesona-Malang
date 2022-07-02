<p align="center">
  <a href="https://pesonamalang.netlify.app/">
    <img src="https://user-images.githubusercontent.com/100954726/177002575-81335c75-b71f-4b32-9442-c9029e845f67.png" alt="Logo" width=120 height=120>
  </a>
  <h3 align="center">RESTful API Destinasi Wisata Kota Malang</h3>
  <p align="center">
    RESTful API ini dapat diakses <a href="https://pesona-malang-api.herokuapp.com/">di sini</a>
  </p>
</p>

## Table of contents

- [User](#user)
- [Destinasi Wisata](#destinasi-wisata)

## User
| Actions  | Route  | Method | Deploy  | Format Request  |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Signup  | /api/users  | POST  | [https://pesona-malang-api.herokuapp.com/api/users](https://pesona-malang-api.herokuapp.com/api/users)  | {</br>&nbsp;"firstName": String,</br>&nbsp; "lastName": String,</br>&nbsp; "email": String,</br>&nbsp; "password": String</br>}|
| Login + Autentikasi  | /api/auth  | POST  | [https://pesona-malang-api.herokuapp.com/api/auth](https://pesona-malang-api.herokuapp.com/api/auth) | {</br>&nbsp; "email": String,</br>&nbsp; "password": String</br>}|


## Destinasi Wisata
| Actions  | Route  | Method | Deploy  | Format Request  |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Tambah Wisata  | /v1/pesona-malang/tour  | POST  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour)  | {</br>&nbsp;"name": String,</br>&nbsp; "category": String,</br>&nbsp; "address": String,</br>&nbsp; "operationalHour": String</br>&nbsp; "ticket": String,</br>&nbsp; "description": String,</br>&nbsp; "image": String</br>&nbsp; "lat": Number,</br>&nbsp; "long": Number,</br>&nbsp; "rating": Number</br>}|
| Lihat Semua Wisata (default, menampilkan 100 data per-page)  | /v1/pesona-malang/tours  | GET  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours) | - |
| Lihat Semua Wisata (setting per-page berapa data yang perlu ditampilkan)  | /v1/pesona-malang/tours?page={page}&perPage={perPage} | GET  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours?page=${page}&perPage=${perPage}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours?page=${page}&perPage=${perPage}) | - |
| Lihat Data Wisata berdasarkan Id | /v1/pesona-malang/tour/{id} | GET  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}) | - |
| Update Data Wisata  | /v1/pesona-malang/tour/{id}  | PUT  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id})  | {</br>&nbsp;"name": String,</br>&nbsp; "category": String,</br>&nbsp; "address": String,</br>&nbsp; "operationalHour": String</br>&nbsp; "ticket": String,</br>&nbsp; "description": String,</br>&nbsp; "image": String</br>&nbsp; "lat": Number,</br>&nbsp; "long": Number,</br>&nbsp; "rating": Number</br>}|
| Delete Wisata | /v1/pesona-malang/tour/{id} | DELETE | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}) | - |

**Keterangan:**
- {page} & {perPage}, diisi dengan nilai berformat Number
- {id}, diisi dengan id destinasi wisata


