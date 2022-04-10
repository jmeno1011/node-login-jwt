-- railway에서 DB 구조들이 확인 안되서 아래와 같은 쿼리문이 필요

-- userTable 테이블 구조 확인 
DESC userTable

-- 컬럼 위치 변경
ALTER TABLE 테이블명 MODIFY COLUMN 컬럼명 자료형 AFTER 다른컬럼;
ALTER TABLE userTable MODIFY COLUMN user_id character(25) AFTER seq;