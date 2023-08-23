create database sesac default character set utf8 collate utf8_general_ci;

show databases;

use sesac;

create table member (
	id varchar(20) primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2)
);

alter table member add interest varchar(100);
alter table member modify id varchar(10);
alter table member drop age;
desc member;

create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);

desc user;

insert into user values ('hong1234', '804bkg', '홍길동', 'M', '1990-01-31', 33);
insert into user values ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
insert into user values ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
insert into user values ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
insert into user values ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47);
insert into user values ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into user values ('jungkrat', '4ifha7f', '정크랫', 'M', '1990-11-11', 24);

select * from user;

-- 실습. SELECT 문
-- 1.
select * from user order by birthday asc;

-- 2.
select * from user where gender = 'M' order by name desc;

-- 3.
select id, name from user where birthday like '199%';

-- 4.
select * from user where birthday like '%-06-%';

-- 5.
select * from user where gender = 'M' and birthday like '197%';

-- 6.
select * from user order by age desc limit 3;

-- 7.
select * from user where age between 25 and 50;

-- 8.
update user set pw = '12345678' where id = 'hong1234';
select * from user where id = 'hong1234';

-- 9.
delete from user where id = 'jungkrat';
select * from user;