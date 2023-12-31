-- Active: 1692936835817@@localhost@3306@sesac

use sesac;

create table
    customer (
        custid char(10) primary key not null,
        custname varchar(10) not null,
        addr char(10) not null,
        phone char(11),
        birth date
    );

desc customer;

-- 외래키 제약 조건

-- 두 테이블 사이의 관계를 맺음

-- 다른 테이블의 기본키를 외래키로 연결

-- 기준 테이블: 기본키를 갖는 테이블 (customer)

-- 참조 테이블: 외래키가 있는 테이블 (orders)

-- 형식: foreign key (열_이름) references 기준_테이블(열_이름)

-- on update cascade: 기준 테이블의 데이터가 변경되면 참조 테이블의 데이터도 변경

-- on delete cascade: 기준 테이블의 데이터가 삭제되면 참조 테이블의 데이터도 삭제

create table
    orders (
        orderid int primary key auto_increment,
        custid char(10) not null,
        prodname char(6) not null,
        price int not null,
        amount smallint not null,
        foreign key (custid) references customer(custid) on update cascade on delete cascade
    );

-- 테이블 삭제 순서!

-- customer table, orders table이 customer.custid 를 기준으로 "관계" 맺음

-- customer table 존재하는 회원만 orders 테이블에 데이터를 추가할 수 있음

-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제 (drop) 하면?

-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에 알 수 없음.

-- pk-fk 연결된 테이블은 외래키가 설정된 테이블 (참조 테이블) 먼저 삭제

-- (1) orders 테이블 삭제 -> (2) customer 테이블 삭제

-- INSERT 추가

insert into
    customer (
        custid,
        custname,
        addr,
        phone,
        birth
    )
values (
        'lucky',
        '강해원',
        '미국 뉴욕',
        '01022223333',
        '2002-03-05'
    );

insert into
    customer (
        addr,
        phone,
        birth,
        custid,
        custname
    )
values (
        '대한민국 부산',
        '01098765432',
        '2007-04-28',
        'wow',
        '이지은'
    );

-- 속성을 지정하지 않는다면, 컬럼이 정의된 순서대로 입력

insert into customer
values (
        'happy',
        '최시은',
        '일본 오키나와',
        '01033331234',
        '1970-10-31'
    );

-- 여러 튜플 동시 추가

insert into customer
values (
        'asdf',
        '강세희',
        '대한민국 부산',
        '01033331235',
        '2004-11-11'
    );

insert into customer
values (
        'kiwi',
        '김키위',
        '대한민국 서울',
        '01012341234',
        '1990-03-17'
    );

insert into customer
values (
        'apple',
        '이사과',
        '대한민국 포항',
        '01012344321',
        '1992-06-17'
    );

insert into orders values (NULL, 'kiwi', '프링글스', '3000', 5);

insert into orders values (NULL, 'apple', '프링글스', '3000', 1);

insert into orders values (NULL, 'kiwi', '홈런볼', '2000', 3);

INSERT INTO customer
VALUES (
        'bunny',
        '강해린',
        '대한민국 서울',
        '01012341234',
        '2000-02-23'
    );

INSERT INTO customer
VALUES (
        'hello',
        '이지민',
        '대한민국 포항',
        '01022221234',
        '1999-08-08'
    );

INSERT INTO customer
VALUES (
        'kiwi',
        '최지수',
        '미국 뉴욕',
        '01050005000',
        '1990-12-25'
    );

INSERT INTO customer
VALUES (
        'imminji01',
        '강민지',
        '영국 런던',
        '01060001000',
        '1995-01-11'
    );

INSERT INTO customer
VALUES (
        'lalala',
        '홍수지',
        '미국 로스앤젤레스',
        '01010109090',
        '2007-05-16'
    );

INSERT INTO customer
VALUES (
        'jjjeee',
        '홍은정',
        '대한민국 서울',
        '01099991111',
        '2004-08-17'
    );

INSERT INTO customer
VALUES (
        'wow123',
        '이민혁',
        '일본 삿포로',
        '01011223344',
        '1994-05-31'
    );

INSERT INTO customer
VALUES (
        'minjipark',
        '박민지',
        '프랑스 파리',
        '01088776655',
        '1998-04-08'
    );

INSERT INTO customer
VALUES (
        'jy9987',
        '강지연',
        '일본 삿포로',
        '01012312323',
        '1996-09-01'
    );

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);

INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);

INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);

INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);

INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);

INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);

INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);

INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);

INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);

INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);

INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);

INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);

INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);

INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);

INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);

INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);

INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);

INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);

INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- UPDATE 수정

-- custid가 happy인 고객의 주소를 대한민국 서울로 변경

update customer set addr = '대한민국 서울' where custid = 'happy';

-- DELETE 삭제

-- custid가 happy인 사람의 정보를 테이블에서 삭제

delete from customer where custid = 'happy';

-- 고객 테이블에 'apple' 고객을 삭제했을 때, 주문 테이블에서 'apple' 고객의 주문 정보가 함께 삭제되는지? (on delete cascade)

delete from customer where custid = 'apple';

-- SELECT 조회

select * from customer;

select * from orders;

set FOREIGN_KEY_CHECKS = 0;

truncate table customer;

truncate table orders;

-- 모든 고객의 아이디를 검색

select custid from customer;

-- 모든 고객의 아이디와 생년월일 검색

select custid, birth from customer;

-- 모든 고객의 생년월일과 아이디 검색 (순서 있음)

select birth, custid from customer;

-- 모든 고객의 아이디, 이름, 주소, 전화번호, 생년월일 검색

select custid, custname, addr, phone, birth from customer;

-- * 와일드카드 사용

select * from customer;

-- 고객 테이블에 있는 모든 주소 검색

select addr from customer;

-- 고객 테이블에 있는 모든 주소를 검색하되 중복 제거

-- DISTINCT: 중복 제거

select distinct addr from customer;

-- < WHERE 조건 >

-- 비교: =, <>, <, <=, >, >=

-- 범위: BETWEEN

-- 집합: IN, NOT IN

-- 패턴: LIKE

-- NULL: IS NULL, IS NOT NULL

-- 복합조건: AND, OR, NOT

-- 비교

-- 고객 이름이 강해린인 고객의 생일을 검색

select birth from customer where custname = '강해린';

-- 고객 이름이 강해린 아닌 고객의 생일을 검색

select birth from customer where custname != '강해린';

-- 사전 순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색

select * from customer where custname > '박민지';

-- 범위

-- 1995년이상 2000년 이하 출생 고객 검색

select *
from customer
where
    birth between '1995-01-01' and '2000-12-31';

select *
from customer
where
    birth >= '1995-01-01'
    and birth <= '2000-12-31';

-- 집합

-- 주소가 서울 혹은 런던인 고객 검색

-- 주소가 서울 혹은 런던이 아닌 고객 검색

select * from customer where addr in ('대한민국 서울', '영국 런던');

select * from customer where addr = '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울 혹은 런던이 아닌 고객 검색

select * from customer where addr not in ('대한민국 서울', '영국 런던');

-- 패턴

-- 주소가 '미국 로스앤젤레스'인 고객을 검색

select * from customer where addr like '미국 로스앤젤레스';

-- 주소에 '미국'이 포함되어 있는 고객 검색 (미국에 사는 사람)

-- %: 0개 이상 문자열

select * from customer where addr like '%미국%';

-- 고객 이름 두번째 글자가 '지'인 고객 검색

-- _: 임의의 하나의 문자

select * from customer where custname like '_지%';

-- 참고

select * from customer where custname like '_지';

-- 검색 결과 없음

-- 고객 이름 세번째 글자가 '수'인 고객

select * from customer where custname like '__수%';

-- 참고

select * from customer where custname like '%수';

-- 이름이 몇 자든 마지막 글자가 '수'이면 다 검색

-- 복합조건 (AND, OR, NOT)

-- 주소지가 대한민국이고, 2000년생 이후 출생 고객 검색

select *
from customer
where
    addr like '대한민국%'
    and birth >= '2000-01-01';

-- 주소지가 미국이거나 영국인 고객 검색

select * from customer where addr like '미국%' or addr like '영국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색

select * from customer where phone not like '%_4';

select * from customer;

-- order by

select * from customer ORDER BY custname DESC;

-- where 절과 order by 함께 사용 (단, 이 때 order by가 where 보다 뒤에 위치해야 함)

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색

select *
from customer
WHERE birth >= '2000-01-01'
order by addr DESC;

-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 그리고 아이디를 기준으로 내림차순 검색

select *
from customer
WHERE birth >= '2000-01-01'
order by addr DESC, custid DESC;

select * from customer;

select * from orders;

-- < LIMIT >

-- 행의 개수를 제한

select * from customer where birth >= '2000-01-01' limit 2;

select * from customer limit 3;

-- < 집계 함수 >

-- 계산하여 어떤 값을 리턴하는 "함수"

-- group by 절과 함께 쓰이는 케이스가 많음

-- 주문 테이블에서 총 판매 개수 검색

SELECT sum(amount) FROM orders;

-- 주문 테이블에서 총 판매 개수 검색 + 의미있는 열이름으로 변경

SELECT sum(amount) as 'total_sales' FROM orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색

-- total_amount avg_amount min_price max_price

SELECT
    sum(amount) as 'total_amount',
    avg(amount) as 'avg_amount',
    max(price) as 'min_price',
    min(price) as 'max_price'
from orders;

-- 주문 테이블에서 총 주문 건수 (= 튜플 개수)

select count(*) as 'total_orders' from orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이)

select count(distinct custid) from orders;

-- < GROUP BY >

-- "~별로"

-- 고객별로 주문한 주문 건수 구하기

SELECT custid, count(*) as '주문건수' from orders GROUP BY custid;

-- 고객별로 주문한 상품 총 수량 구하기

select custid, sum(amount) as '주문상품수량' from orders GROUP BY custid;

-- 고객별로 주문한 총 주문액 구하기

select custid, sum(price * amount) from orders GROUP BY custid;

-- 상품별 판매 개수 구하기

select prodname, sum(amount) from orders GROUP BY prodname;

select * from orders;

-- < Having >

-- group by 절 이후 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기

select
    custid,
    sum(amount) as 'total_amount',
    sum(amount * price) as 'total_price'
from orders
GROUP BY custid
having
    sum(price * amount) >= 10000;

/* select custid, sum(amount)
 from orders
 where
 sum(price * amount) >= 10000
 GROUP BY custid;
 --> group 잘못 사용 오류!
 */

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기

-- (단, custid가 'bunny'인 고객은 제외하고 출력)

-- where, group by, having 모두 사용한 예시

select
    custid,
    sum(amount) as 'total_amount',
    sum(amount * price) as 'total_price'
from orders
WHERE custid != 'bunny'
GROUP BY custid
having
    sum(price * amount) >= 10000;

-- group by 주의사항

-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

-- 고객별로 주문한 주문 건수 구하기

select custid, count(*) from orders group by custid;

/* where vs. having
 having
 - 그룹에 대해서 필터링 (그래서 group by 함께 쓰임)
 - group by 보다 뒤에 위치
 - 집계함수랑 함께 사용 가능
 where
 - 각각의 행을 필터링
 - group by 보다 앞에 위치
 - 집계함수를 쓸 수는 있으나 having 처럼 자유롭게 쓸 수는 없음 */

-- < 실습 >

-- departments와 employees 테이블을 생성하고 데이터를 입력해주세요.

-- 아래 문항에 맞는 SELECT 문을 작성해주세요.

CREATE TABLE
    departments (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        location VARCHAR(50)
    );

DESC departments;

CREATE TABLE
    employees (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT,
        department_id INT,
        FOREIGN KEY (department_id) REFERENCES departments(id)
    );

DESC employees;

INSERT INTO
    departments (id, name, location)
VALUES (1, 'Sales', 'New York'), (
        2,
        'Marketing',
        'San Francisco'
    ), (3, 'Engineering', 'Seattle');

INSERT INTO
    employees (id, name, age, department_id)
VALUES (1, 'John Doe', 25, 1), (2, 'Jane Smith', 30, 1), (3, 'Bob Johnson', 40, 2), (4, 'Alice Lee', 35, 3), (5, 'Tom Wilson', 28, 3);

SELECT * from departments;

SELECT * from employees;

-- < 풀이 >

-- 1. 모든 직원을 직원 테이블에 나열합니다.

select * from employees;

-- 2. 나이순으로 직원 테이블에 있는 모든 직원을 나이순(내림차순)으로 나열합니다.

select * from employees ORDER BY age DESC;

-- 3. 직원 테이블에 30세 이상인 직원의 이름과 나이를 나열합니다.

SELECT name, age from employees where age >= 30;

-- 4. 영업부에서 근무하는 직원의 이름과 부서 ID를 직원 표에 나열합니다.

SELECT name, department_id from employees where department_id = 1;

-- 5. 엔지니어링 부서에 근무하고 30세 미만인 직원의 이름과 나이를 직원 테이블에 나열합니다.

select name, age from employees where department_id = 3 and age < 30;

-- 6. 직원 테이블에서 직원 수를 계산합니다.

select count(*) from employees;

-- 7. 직원 테이블에서 각 부서의 직원 수를 계산합니다.

select department_id, count(*) from employees GROUP BY department_id;

-- 8. 직원 평균 나이를 계산합니다.

select avg(age) from employees;

-- 9. 부서별 평균 나이를 계산합니다.

select department_id, avg(age) from employees GROUP BY department_id;

-- 10. 부서 테이블에서 지역 컬럼의 두번째 글자가 e인 부서를 계산합니다.

select name, location from departments where location like '_e%';

-- 11. 부서 테이블에서 지역 컬럼에 공백이 들어가는 부서를 계산합니다.

select name, location from departments where location like '% %';

-- 12. 직원 테이블에서 이름 컬럼에서 마지막 글자가 n인 사원을 계산합니다.

select name from employees where name like '%n';