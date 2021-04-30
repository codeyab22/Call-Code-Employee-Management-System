USE company_db;
INSERT INTO department (dept_name) VALUES ('Back of House'), ('Front of House'), ('Management');
USE company_db;
INSERT INTO company_role (title, salary, dept_id) VALUES
('General Manager', 80000.00, 3), 
('Head Chef', 60000.00, 1),
('Sous Chef', 30000.00, 1),
('Cook', 30000.00, 1 ),
('Dishwasher', 20000.00, 1),                
('Front of House Manager', 40000.00, 2),
('Host', 30000.00, 2),
('Server', 20000.00, 1);
USE company_db;
INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
('Adia', 'Bevel', 1, null),
('Quebe', 'Jenner', 6, 1),
('Denise', 'Winnie', 2, null);


