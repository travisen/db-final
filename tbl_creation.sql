#Character Table Creation
CREATE TABLE Characters
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	f_name VARCHAR(255) NOT NULL,
	l_name VARCHAR(255),
	homeworld INTEGER,
	faction INTEGER,
	ship VARCHAR(255),
	structure VARCHAR(255),
	species INTEGER
);