# Djangular (Django 1.11 + Angular 7) Seed Project

## Instructions to Setup Seed Project

### 1. CLONE REPO
	- git clone https://github.com/shubhamkandiyal0101/djangular-seed-project.git

### 2. INSTALL REQUIRED PACKAGES (FOR FRONTEND)
	- cd  **djangular-seed-project/frontend**
	- npm install

### 3. INSTALL REQUIRED PACKAGES (FOR BACKEND)
	- Setup Virtual Environment: **virtualenv -p python3 env**
	- Activate Virtual Environment: **source env/bin/activate**
	- cd  **djangular-seed-project/backend**
	- pip install -r requirements.txt

### 4. Start Backend & Frontend Server in Different Terminal
	- Activate Virtual Environment: **source env/bin/activate**
	- Navigate to Backend Project: cd  djangular-seed-project/backend
	- Run Project: python manage.py runserver
	- Navigate to Frontend Project: cd  djangular-seed-project/frontend
	- Run Project: npm start

### 5. Open Frontend URL, Its might be localhost:4200 (According to Angular 7 ~ Ubuntu)


## IMPORTANT THINGS

### PORTS INFO:
	- Backend Port must be **8000**, If backend server is not running in **Port 8000**, then Please change your backend server Port value in __**frontend/src/proxy.conf.json**__ file
	- Frontend Port must be **4200**, If Frontend server is not running in **Port 4200**, then Please change your frontend server Port value in __**frontend/src/app/app.component.ts**__ file

### PROJECT INFO:
	- This is Seed Project of Django 1.11 and Angular 7
	- I call backend with same frontent Port in Ajax Request in app.component.ts with the help of __**proxyConfig**__
	- I modify  **frontend/package.json** start command to Config proxyConfig, thats why I am using **npm start** instead of **ng serve**

### HOW TO CALL BACKEND DJANGO FUNCTION VIA ANGULAR FRONTEND:
	- All the UI and Routing will be used by Angular 7. Its means we use Angular Routing and we dont use Django Template (Jinja) Approach.
	-  We just use Backend Django as API. Like we just call Django as API via endpoint which might be like Post Request on **/signup**, **/login** and etc.
	- We call **localhost:4200/api/{DjangoFunctionURL}** (e.g, POST request on **localhost:4200/api/signup** with Data). Its automatically forward request to **localhost:8000/signup** and send back response to Frontend. Its all be done with the help of **proxyConfig**


