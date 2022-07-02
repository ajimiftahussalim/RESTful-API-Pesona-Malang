<p align="center">
  <a href="https://pesonamalang.netlify.app/">
    <img src="https://user-images.githubusercontent.com/100954726/177002575-81335c75-b71f-4b32-9442-c9029e845f67.png" alt="Logo" width=120 height=120>
  </a>
  <h3 align="center">RESTful API Destinasi Wisata Kota Malang</h3>
  <p align="center">
    <i>RESTful API ini dapat diakses melalui core domain <a href="https://pesona-malang-api.herokuapp.com/">https://pesona-malang-api.herokuapp.com</a></i>
  </p>
</p>

<h2 align="left">Core stack used</h2>
<p align="left">
  <a href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://miro.medium.com/max/800/0*cQTv5n6xV7opBBIB" alt="expressjs" height="40"/></a>&ensp;
  <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" alt="nodejs" width="40" height="40"/></a>&ensp;
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress" alt="mongodb" height="40"/></a>&ensp; 
  <a href="https://jwt.io/" target="_blank" rel="noreferrer"> <img src="https://jwt.io/img/pic_logo.svg" alt="jsonwebtoken" height="40"/></a>&ensp;
 </p>

## Table of contents

- [User](#user)
- [Destinasi Wisata](#destinasi-wisata)
- [Credit](#credit)
- [Team Member](#team-member)

## User
| Actions  | Route  | Method | Deploy  | Format Request (Store in MongoDB)  |
| :-------------: | :-------------: | :-------------: | :-------------: | ------------- |
| Signup  | /api/users  | POST  | [https://pesona-malang-api.herokuapp.com/api/users](https://pesona-malang-api.herokuapp.com/api/users)  | {</br>&nbsp;"firstName": String,</br>&nbsp; "lastName": String,</br>&nbsp; "email": String,</br>&nbsp; "password": String</br>}|
| Autentikasi Login  | /api/auth  | POST  | [https://pesona-malang-api.herokuapp.com/api/auth](https://pesona-malang-api.herokuapp.com/api/auth) | {</br>&nbsp; "email": String,</br>&nbsp; "password": String</br>}|


## Destinasi Wisata
| Actions  | Route  | Method | Deploy  | Format Request (Store in MongoDB)   |
| :-------------: | :-------------: | :-------------: | :-------------: | ------------- |
| Tambah Data Destinasi Wisata  | /v1/pesona-malang/tour  | POST  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour)  | {</br>&nbsp;"name": String,</br>&nbsp; "category": String,</br>&nbsp; "address": String,</br>&nbsp; "operationalHour": String</br>&nbsp; "ticket": String,</br>&nbsp; "description": String,</br>&nbsp; "image": String</br>&nbsp; "lat": Number,</br>&nbsp; "long": Number,</br>&nbsp; "rating": Number</br>}|
| Lihat Semua Data Destinasi Wisata (default, menampilkan 100 data per-page)  | /v1/pesona-malang/tours  | GET  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours) | - |
| Lihat Semua Data Destinasi Wisata (setting per-page, berapa data yang perlu ditampilkan)  | /v1/pesona-malang/tours?page={page}&perPage={perPage} | GET  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours?page=${page}&perPage=${perPage}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tours?page=${page}&perPage=${perPage}) | - |
| Lihat Detail Data Destinasi Wisata | /v1/pesona-malang/tour/{id} | GET  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}) | - |
| Update Data Destinasi Wisata  | /v1/pesona-malang/tour/{id}  | PUT  | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id})  | {</br>&nbsp;"name": String,</br>&nbsp; "category": String,</br>&nbsp; "address": String,</br>&nbsp; "operationalHour": String</br>&nbsp; "ticket": String,</br>&nbsp; "description": String,</br>&nbsp; "image": String</br>&nbsp; "lat": Number,</br>&nbsp; "long": Number,</br>&nbsp; "rating": Number</br>}|
| Delete Data Destinasi Wisata | /v1/pesona-malang/tour/{id} | DELETE | [https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}](https://pesona-malang-api.herokuapp.com/v1/pesona-malang/tour/${id}) | - |

**Keterangan:**
- {page} & {perPage}, diisi dengan nilai berformat Number
- {id}, diisi dengan id destinasi wisata

## Credit
- bcrypt
- body-parser
- dotenv
- express
- express-validator
- joi
- joi-password-complexity
- jsonwebtoken
- mongoose
- multer

## Team Member

- [Aji Miftahus Salim](https://www.linkedin.com/in/aji-miftahus-salim-8456a121a/)
- [Dishanubari Pramudia](https://www.linkedin.com/in/dishanubari-pramudia-682409231/)
- [Eko Rahayu Widodo](https://www.linkedin.com/in/eko-rahayu-widodo-989416231/)
- [Mohammad Faisal Ramdhani](https://www.linkedin.com/in/faisalramdhanii/)
