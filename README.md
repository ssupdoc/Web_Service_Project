# Web_Services_Project

a [Sails](http://sailsjs.org) application

##Overview

The web service is built using the following technologies only:

* Node.js with the Sails.js framework [Sails.js](http://sailsjs.org/)
* MongoDB database

## Web Service Requirements
The human resource management software allows a HR manager to manage a list of employees within their company. The software allows for the following roles, each with different levels of permissions:

1. Administrators - They are the root level users in the system and have access to do everything. Only administrators can create managers.
2. Managers - Managers can only view / edit / delete employees.
3. Employees - Employees are records in the database and do not have the power to do anything.

While there are many features in the application, APIs are create for the following features only:

* API to allow an administrator to create a manager
* 3 APIs to allow managers & administrators to view / edit / delete employees

**Note:** Administrators can perform all the functions of the manager but managers cannot perform the function of the administrator (create new managers).

**Note:** Since only the requried the APIs as per the web service requirements are provided, there maybe difficulty in testing the code. Hence a dump of teh database collections I used for development is in teh directory '/db/web_service'. Make use of it if required. Don't forget to run 'npm install' if you are testing the web service.

**Note:** Since secure tokens cannot be generated as those APIs are not required and are removed, if you are using the 'web_service' database you may make use of the following JWT tokens for verification:

* Usable Admin Tokens :

 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJ3ZWJfc2VydmljZSIsImFkbWluSWQiOiI1OGI4NTZmYTdmNGU3NzFjMDgwOTUyNTkiLCJpYXQiOjE0ODg0NzU4OTh9.pkbtiUUi1B3KLiufeYDABzpV6QG3GYpCJ_8t-mRQWWs"

 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJ3ZWJfc2VydmljZSIsImFkbWluSWQiOiI1OGI4NTllNjdmNGU3NzFjMDgwOTUyNWEiLCJpYXQiOjE0ODg0NzY2NDZ9.msjRr9jYh6uE0DyzelPOxDYUktzCijZN2dCBHn5uT0Q"

 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJ3ZWJfc2VydmljZSIsImFkbWluSWQiOiI1OGI4NTlmMjdmNGU3NzFjMDgwOTUyNWIiLCJpYXQiOjE0ODg0NzY2NTh9.9OplPdKUpeNdKl93MSgxqjtB7-c4Lqk93vd-mfiOHO4"

* Usable Manager Tokens :

  M01 Rahul Malhotra  : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJ3ZWJfc2VydmljZSIsIm1hbmFnZXJJZCI6IjU4Yjg2YTU5Nzg5ZDUxNDAxYjgxMDA0NCIsImlhdCI6MTQ4ODQ4MDg1N30.wBeR5JBYjhc6oMJOk_FvRv7MxIhORNI1yj4vepl2Bno"

  M02 Anjana Seth :
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJ3ZWJfc2VydmljZSIsIm1hbmFnZXJJZCI6IjU4Yjg2YWFkNzg5ZDUxNDAxYjgxMDA0NSIsImlhdCI6MTQ4ODQ4MDk0MX0.qEGyll3nIrp9DbSZXbWmQtO-2A99XPAdT4bDbtGNvNg"

  M03 Anirudh Rohith :
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJ3ZWJfc2VydmljZSIsIm1hbmFnZXJJZCI6IjU4Yjg3OTRiZTFjN2JmZjAyMmJlZTQyNSIsImlhdCI6MTQ4ODQ4NDY4M30.DCBPCPOPI_aKaUxvl99yRDEYr7dlU7ekDdzqMNdRubU"

  **Final Note:** All functionalities, features and APIs thought to be out of the problem statement are removed as felt unrequried for the same. All [Sails.js](http://sailsjs.org/) default files generated during 'sails new <project_name>' are left as such for development at later stages. 
