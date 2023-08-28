-- 이모지, 특수 문자를 사용할 수 있는 인코딩

CREATE DATABASE
    sesac2 CHARACTER SET utf8mb4 collate utf8mb4_unicode_ci;

use sesac2;

CREATE TABLE
    visitor (
        id int PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(10) NOT NULL,
        comment MEDIUMTEXT
    );

DESC visitor;

INSERT INTO visitor VALUES (1, '홍길동', '내가 왔다.');

INSERT INTO visitor VALUES (2, '이찬혁', '으라차차');

INSERT INTO visitor VALUES (3, '이수현', '안뇽') 

SELECT * FROM visitor;

-- MySQL 사용자 추가하기 (user라는 새로운 계정 생성)

CREATE USER
    'user' @'%' IDENTIFIED
WITH
    mysql_native_password BY 'Qwer1234!@#$';

-- user 계정에 대해서 모든 권한 부여 = (DCL 중 grant)

GRANT ALL PRIVILEGES ON *.* to 'user'@'%' WITH GRANT OPTION;

-- mysql 캐시 새로고침

FLUSH PRIVILEGES;

SHOW DATABASES;

SELECT * FROM mysql.user;

TRUNCATE TABLE visitor;