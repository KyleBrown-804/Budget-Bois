-- Schema for PostgreSQL

-- No passwords will be stored
CREATE TABLE users (
	user_id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT
);

CREATE TABLE transactions (
  	trans_id SERIAL NOT NULL,
	description TEXT NOT NULL,
	amount MONEY NOT NULL,
  	category TEXT,
 	trans_date DATE NOT NULL,
  	fk_users TEXT REFERENCES users(user_id) 
  		ON DELETE SET NULL,
  	PRIMARY KEY (fk_users, trans_id)
);

CREATE TABLE bills (
    bill_id SERIAL NOT NULL,
    name TEXT NOT NULL,
    bill_type TEXT NOT NULL,
    amount MONEY NOT NULL,
    due_date DATE NOT NULL,
    frequency TEXT NOT NULL,
    fk_users TEXT REFERENCES users(user_id)
        ON DELETE SET NULL,
    PRIMARY KEY (fk_users, bill_id)
);
