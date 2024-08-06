CREATE TABLE Users(
    UID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(30),
    LastName VARCHAR(30),
    SecurityLevel INT,
    UserName VARCHAR(50),
    UserPassword VARCHAR(50),
    Email VARCHAR(30),
    PhoneNumber CHAR(12),
    Gender CHAR(1)
);

CREATE TABLE MedicalStaff(
    UID INT PRIMARY KEY,
    StaffType VARCHAR(20),
    FOREIGN KEY(UID) REFERENCES Users(UID) ON DELETE CASCADE
);

CREATE TABLE Patients(
    UID INT PRIMARY KEY,
    StreetNum INT,
    StreetName VARCHAR(30),
    City VARCHAR(20),
    State CHAR(2),
    ZipCode CHAR(5),
    Income INT,
    SSN VARCHAR(11),
    BirthDate DATE,
    Age INT,
    FOREIGN KEY(UID) REFERENCES Users(UID) ON DELETE CASCADE
);

CREATE TABLE MakesAppointment(
    AID INT,
    PatientUID INT,
    AppTime VARCHAR(8),
    DMY DATE,
    PRIMARY KEY(AID, PatientUID),
    FOREIGN KEY(PatientUID) REFERENCES Patients(UID) ON DELETE CASCADE
);

CREATE TABLE HasAppointment(
    AID INT,
    PatientUID INT,
    MedicalUID INT,
    PRIMARY KEY(AID, PatientUID, MedicalUID),
    FOREIGN KEY(AID) REFERENCES MakesAppointment(AID) ON DELETE CASCADE,
    FOREIGN KEY(PatientUID) REFERENCES Patients(UID) ON DELETE CASCADE,
    FOREIGN KEY(MedicalUID) REFERENCES MedicalStaff(UID) ON DELETE CASCADE
);

CREATE TABLE TreatmentPlan(
    TPID INT PRIMARY KEY,
    TreatmentType VARCHAR(30),
    PriceDue INT
);

CREATE TABLE HasTreatmentPlan(
    TPID INT,
    PatientUID INT,
    PRIMARY KEY(TPID, PatientUID),
    FOREIGN KEY(TPID) REFERENCES TreatmentPlan(TPID) ON DELETE CASCADE,
    FOREIGN KEY(PatientUID) REFERENCES Patients(UID) ON DELETE CASCADE
);

CREATE TABLE AssignsTreatmentPlan(
    TPID INT,
    MedicalUID INT,
    PRIMARY KEY(TPID, MedicalUID),
    FOREIGN KEY(TPID) REFERENCES TreatmentPlan(TPID) ON DELETE CASCADE,
    FOREIGN KEY(MedicalUID) REFERENCES MedicalStaff(UID) ON DELETE CASCADE
);

CREATE TABLE Medicines(
    MDID INT PRIMARY KEY,
    MedName VARCHAR(100),
    Quantities INT,
    Price INT
);

CREATE TABLE UsesMedicine(
    MDID INT,
    TPID INT,
    PRIMARY KEY(MDID, TPID),
    FOREIGN KEY(MDID) REFERENCES Medicines(MDID) ON DELETE CASCADE,
    FOREIGN KEY(TPID) REFERENCES TreatmentPlan(TPID) ON DELETE CASCADE
);

CREATE TABLE Room(
    RID INT,
    PatientUID INT,
    MedicalUID INT,
    PRIMARY KEY(RID, PatientUID, MedicalUID),
    FOREIGN KEY(PatientUID) REFERENCES Patients(UID) ON DELETE CASCADE,
    FOREIGN KEY(MedicalUID) REFERENCES MedicalStaff(UID) ON DELETE CASCADE
);

CREATE TABLE FinancialData(
    PatientUID INT PRIMARY KEY,
    Tax INT,
    Insurance VARCHAR(30),
    Benefits VARCHAR(30),
    FOREIGN KEY(PatientUID) REFERENCES Patients(UID) ON DELETE CASCADE
);

CREATE TABLE Influences(
    PatientUID INT,
    TPID INT,
    PRIMARY KEY(PatientUID, TPID),
    FOREIGN KEY(PatientUID) REFERENCES Patients(UID) ON DELETE CASCADE,
    FOREIGN KEY(TPID) REFERENCES TreatmentPlan(TPID) ON DELETE CASCADE
);
-- Populate with data
INSERT INTO users (FirstName, LastName, SecurityLevel, UserName, UserPassword, Email, PhoneNumber, Gender) VALUES 
('Josh','T',3,'Oiman','password','Example@gmail.com','408-111-2020','M'),
('Joe', 'Smith', 0, 'JoeSmith', 'TestingPasswordEx', 'JoeSmith@gmail.com', '408-554-8293', 'M'),
('Alice', 'Johnson', 1, 'AliceJohnson', 'AlicePass2024', 'AliceJohnson@gmail.com', '408-123-4567', 'F'),
('Bob', 'Williams', 2, 'BobWilliams', 'BobPass4567', 'BobWilliams@gmail.com', '408-234-5678', 'M'),
('Carol', 'Davis', 0, 'CarolDavis', 'CarolD123!', 'CarolDavis@yahoo.com', '408-345-6789', 'F'),
('David', 'Miller', 3, 'DavidMiller', 'DavidM2024$', 'DavidMiller@yahoo.com', '408-456-7890', 'M'),
('Emma', 'Taylor', 1, 'EmmaTaylor', 'EmmaT2024!', 'EmmaTaylor@yahoo.com', '408-567-8901', 'F');

INSERT INTO Patients (UID, StreetNum, StreetName, City, State, ZipCode, Income, SSN, Birthdate, Age) VALUES 
(1, '82', 'Ranch', 'San Jose', 'CA', '92202', '10000', '333-22-4122', '2000-01-01', '24'),
(2, '123', 'Maple St', 'Los Angeles', 'CA', '90001', '55000', '444-55-6666', '1985-03-15', '39'),
(3, '456', 'Oak Ave', 'San Francisco', 'CA', '94102', '75000', '555-66-7777', '1978-07-22', '46'),
(4, '789', 'Pine Rd', 'Sacramento', 'CA', '95814', '62000', '666-77-8888', '1990-11-30', '33'),
(5, '101', 'Elm Blvd', 'San Diego', 'CA', '92101', '43000', '777-88-9999', '1983-05-05', '41'),
(6, '202', 'Cedar Ln', 'Fresno', 'CA', '93701', '52000', '888-99-0000', '1987-09-09', '36');
