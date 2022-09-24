CREATE TABLE IF NOT EXISTS student (
  id UUID PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS professor (
  id UUID PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS report (
  student_id uuid,
  grade decimal(4,2),
  FOREIGN KEY (student_id) REFERENCES student (id)
);

CREATE TABLE IF NOT EXISTS permission (
  id SERIAL PRIMARY KEY,
  permission_type VARCHAR(50)
);

INSERT INTO permission (permission_type) VALUES ('read');
INSERT INTO permission (permission_type) VALUES ('write');
INSERT INTO permission (permission_type) VALUES ('edit');

CREATE TABLE IF NOT EXISTS permission_x_students (
  student_id uuid,
  permission int,
  FOREIGN KEY (student_id) REFERENCES student (id),
  FOREIGN KEY (permission) REFERENCES permission (id)
);

CREATE TABLE IF NOT EXISTS permission_x_professor (
  professor_id uuid,
  permission int,
  FOREIGN KEY (professor_id) REFERENCES professor (id),
  FOREIGN KEY (permission) REFERENCES permission (id)
);
