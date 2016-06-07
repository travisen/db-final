###########################
#######CREATE TABLES#######
###########################

CREATE TABLE Species
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL UNIQUE,
	language VARCHAR(255)
);

CREATE TABLE Factions
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255)
);

#
#CREATE TABLE Ship_types
#(
#	id INTEGER PRIMARY KEY AUTO_INCREMENT,
#	name VARCHAR(255),
#	class VARCHAR(255),
#	crew VARCHAR(255),
#	manufacturer VARCHAR(255),
#	cost INTEGER
#);
#

CREATE TABLE Ships
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) UNIQUE,
	class VARCHAR(255),
	crew VARCHAR(255)
);

CREATE TABLE Characters
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	f_name VARCHAR(255) NOT NULL,
	l_name VARCHAR(255),
	hid INTEGER, #fkey
	FOREIGN KEY (hid) REFERENCES Planets(id)
	ON DELETE RESTRICT ON UPDATE CASCADE,
	fid INTEGER, #fkey
	FOREIGN KEY (fid) REFERENCES Factions(id)
	ON DELETE RESTRICT ON UPDATE CASCADE,
	sid INTEGER, #speciesid
	FOREIGN KEY (sid) REFERENCES Species(id)
	ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE Serves_on
(
	cid INTEGER,
	FOREIGN KEY (cid) REFERENCES Characters(id)
	ON DELETE RESTRICT ON UPDATE CASCADE,
	sid INTEGER,
	FOREIGN KEY (sid) REFERENCES Ships(id)
	ON DELETE RESTRICT ON UPDATE CASCADE,
	PRIMARY KEY (cid, sid)
);

CREATE TABLE Faction_leaders
(
	cid INTEGER,
	FOREIGN KEY (cid) REFERENCES Characters(id)
	ON DELETE RESTRICT ON UPDATE CASCADE,
	fid INTEGER,
	FOREIGN KEY (fid) REFERENCES Factions(id)
	ON DELETE RESTRICT ON UPDATE CASCADE,
	PRIMARY KEY (cid, fid)	
);


CREATE TABLE Planets
(
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL UNIQUE,
	region VARCHAR(255),
	system VARCHAR(255),
	sid INTEGER, #fkey
	FOREIGN KEY (sid) REFERENCES Species(id)
	ON DELETE RESTRICT ON UPDATE CASCADE,
	population INTEGER
);

###########################
#####INSERT CHARACTERS#####
###########################

INSERT INTO `Characters`(`id`,`f_name`,`l_name`,`hid`,`fid`,`sid`)
VALUES (NULL, "Mon", "Mothma", "1", "1","1");

INSERT INTO `Characters`(`id`,`f_name`,`l_name`,`Planets`,`Factions`,`species`)
VALUES (NULL, "Gial", "Ackbar", "Mon Cala", "New Republic","Mon Calamari");

INSERT INTO `Characters`(`id`,`f_name`,`l_name`,`homeworld`,`faction`,`species`)
VALUES (NULL, "Gial", "Ackbar", "Mon Cala", "New Republic","Mon Calamari");

###########################
#####INSERT FACTIONS#######
###########################


###########################
#####INSERT FACTIONS#######
###########################