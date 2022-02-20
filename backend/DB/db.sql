CREATE database contacts;
use contacts;
CREATE TABLE user (
username VARCHAR(25) PRIMARY KEY,
password VARCHAR(70)
);

CREATE TABLE contact (
    id int AUTO_INCREMENT PRIMARY KEY,
    contact_number VARCHAR(10) NOT NULL,
    username VARCHAR(25) NOT NULL,
    contact_name VARCHAR (80) NOT NULL,
    FOREIGN KEY (username) REFERENCES user(username)
    ON DELETE CASCADE
     
);