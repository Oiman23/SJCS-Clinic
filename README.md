# SJCS-Clinic Full Stack Development Project
<h2>Project Details</h2>
<h3>Course:</h3> 
&emsp;&emsp; CS 157A Intro to Database Management Systems 
<h3>Contributors:</h3> 
&emsp;&emsp; <b>Joshua</b> (<i>Oiman23</i>), and <b>Jerry</b> (<i>Jareuu</i>)
<h3>Project Goal:</h3> 
&emsp;&emsp; Create a web-application that utilizes a database
<h3>Description:</h3>
&emsp;&emsp; SJCS-Clinic is a simulated hospital website mimicing some basic functions necessary for a real hospital. Any name, place, information, or data used in this project is all fabricated and fictional for the educational purposes of setting up a fullstack project that utilizes MYSQL. 

# Setup
1. Download/ Clone repository
2. Requires MySQL Workbench
  - Create connection and have these settings: host = 'localhost', user = 'root', password = 'password'
  - Create a schema called 'sjcs clinic'
  - run SJCSHOSPITALDatabase.sql on the schema
4. Requires Node.js:
  - Open command prompt and go to the directory Client (cd) and enter 'npm install'
  - Go to the Server directory in command prompt and also do an 'npm install'
5. Go back to the Client directory and do 'npm start run' then, on a new tab of the command prompt (so there is now two running) go to the Server directory and tpye in 'node index.js'

# Division Of Work
ER Diagram, Relational Model, MySQL Database code: Joshua and Jerry <br/>
MedicalStaffInfo: Joshua <br/>
PatientStaffInfo: Jerry<br/>
Signup: Jerry<br/>
Login: Jerry and Joshua<br/>
Client Index: Jerry and Joshua<br/>
Server Index: Joshua and Jerry <br/>
