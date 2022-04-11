-- railway에서 DB 구조들이 확인 안되서 아래와 같은 쿼리문이 필요

-- userTable 테이블 구조 확인 
DESC userTable

-- 컬럼 위치 변경
ALTER TABLE 테이블명 MODIFY COLUMN 컬럼명 자료형 AFTER 다른컬럼;
ALTER TABLE userTable MODIFY COLUMN user_id character(25) AFTER seq;

-- 컬럼 자료형 변경
ALTER TABLE 테이블명 CHANGE 컬럼명 컬럼명 새자료형;
ALTER TABLE userTable CHANGE user_id user_id varchar(25) not null;
ALTER TABLE userTable CHANGE user_pw user_pw varchar(255) not null;
ALTER TABLE userTable CHANGE email email varchar(100) not null;
ALTER TABLE userTable CHANGE name name varchar(50) not null;

-- 발생 에러
-- code: 'ER_NOT_SUPPORTED_AUTH_MODE',
-- errno: 1251,
-- sqlMessage: 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',
-- sqlState: '08004',
-- 아래 해결 코드
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
-- user 설정 보기
SELECT Host,User,plugin,authentication_string FROM mysql.user;