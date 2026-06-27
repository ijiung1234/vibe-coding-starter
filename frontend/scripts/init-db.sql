DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (
  name,
  team,
  position,
  uniform_number,
  tagline,
  introduction,
  image_path
) VALUES (
  '이지웅',
  '부산대학교 통계학과',
  '학생회장',
  '3학년',
  '그저 그런 삶을 살아가고 있는 그저 그런 인간입니다.',
  '안녕하세요. 저는 부산대학교 통계학과에 재학 중인 이지웅입니다. 만나서 반갑고 열심히 배우겠습니다.',
  '/images/profile.jpg'
);

INSERT INTO highlights (label) VALUES
  ('귀차니즘'),
  ('스포츠광'),
  ('비정상인');
