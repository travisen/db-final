#Characters Table Creation
CREATE TABLE Characters
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	f_name VARCHAR(255) NOT NULL,
	l_name VARCHAR(255),
	homeworld INTEGER,
	faction INTEGER,
	ship VARCHAR(255),
	species INTEGER
);
#Characters Insert

INSERT INTO `Characters`(`id`,`f_name`,`l_name`,`homeworld`,`faction`,`ship`,`structure`,`species`)
VALUES (NULL, "Mon", "Mothma", "Chandrila", "New Republic", NULL, NULL, "Human");

INSERT INTO `Characters`(`id`,`f_name`,`l_name`,`homeworld`,`faction`,`ship`,`structure`,`species`)
VALUES (NULL, "Gial", "Ackbar", "Mon Cala", "New Republic","Home One", NULL, "Mon Calamari");

INSERT INTO `Characters`(`id`,`f_name`,`l_name`,`homeworld`,`faction`,`ship`,`structure`,`species`)
VALUES (NULL, "Gial", "Ackbar", "Mon Cala", "New Republic","Home One", NULL, "Mon Calamari");

