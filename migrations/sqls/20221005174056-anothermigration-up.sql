/* Replace with your SQL commands */
CREATE TABLE data (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    area VARCHAR(50)
);

INSERT INTO data (name, area) 
VALUES
    ('PayLoad', 'Kano'),
    ('Opay', 'Abuja'),
    ('Kuda', 'Baraje'),
    ('InterSwitch', 'Imo');