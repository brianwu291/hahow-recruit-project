## **Environment Required:**
* Unix-like system
* Node 10.13.0
* Node Version Manager(nvm)
* Yarn 1.19.1

## **Running Command:**
### **Development**<br>
First, clone this project:
```
$ git clone https://github.com/brianwu291/hahow-recruit-project.git
```
Then using node on 10.13.0 and install dependencies by yarn. 
```
$ nvm use 10.13.0
$ yarn install
$ yarn dev
```
It will automatically open the browser on http://localhost:3000

### **Production:<br/>**
Build the production file:
```
$ yarn build
```
#### *Make sure you got node version on 10.13.0 and have install all dependencies by yarn.*<br>
To check node version:
```
$ node -v
```
Use node on 10.13.0:
```
$ nvm use 10.13.0
```
Install by yarn: 
```
$ yarn install
```
### **Test Production Version On Localhost**:<br>
After build succeed, you can run following command to test the production version on local.<br>
```
$ yarn start
```
Then open your browser on http://localhost:3000.