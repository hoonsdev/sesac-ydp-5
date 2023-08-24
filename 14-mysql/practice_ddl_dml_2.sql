use sesac;

-- 선택 실습

create table
    authors (
        author_id int primary key,
        first_name varchar(50),
        last_name varchar(50),
        email varchar(50)
    );

create table
    books (
        book_id int primary key,
        title varchar(100),
        author_id int,
        publication_date date,
        foreign key (author_id) references authors(author_id) on update cascade on delete cascade
    );

create table
    orders (
        order_id int primary key,
        book_id int,
        customer_name varchar(50),
        order_date date,
        foreign key (book_id) references books(book_id) on update cascade on delete cascade
    );

desc authors;

desc books;

desc orders;

-- 선택 실습. 데이터 추가

-- Add data to the authors table

INSERT INTO
    authors (
        author_id,
        first_name,
        last_name,
        email
    )
VALUES (
        1,
        'J.K.',
        'Rowling',
        'jkrowling@gmail.com'
    ), (
        2,
        'George R.R.',
        'Martin',
        'grmartin@yahoo.com'
    ), (
        3,
        'Stephen',
        'King',
        'sking@hotmail.com'
    );

-- Add data to the books table

INSERT INTO
    books (
        book_id,
        title,
        author_id,
        publication_date
    )
VALUES (
        1,
        'Harry Potter and the Philosopher''s Stone',
        1,
        '1997-06-26'
    ), (
        2,
        'A Game of Thrones',
        2,
        '1996-08-06'
    ), (
        3,
        'The Shining',
        3,
        '1977-01-28'
    );

-- Add data to the orders table

INSERT INTO
    orders (
        order_id,
        book_id,
        customer_name,
        order_date
    )
VALUES (
        1,
        1,
        'John Smith',
        '2022-02-15'
    ), (2, 2, 'Jane Doe', '2022-02-16'), (
        3,
        3,
        'Bob Johnson',
        '2022-02-17'
    );

SELECT * FROM authors;

SELECT * FROM books;

SELECT * FROM orders;

-- 1.

update authors set email = 'jkrowling@yahoo.com' where author_id = 1;

-- 2.

delete from books where book_id = 2;

-- 3.

insert into books values (4, 'The Stand', 3, '1978-01-01');

-- 4.

update books set publication_date = '1997-06-30' where book_id = 1;

-- 5.

delete from orders where order_date < '2022-02-17';

-- 6.

insert into orders values (4, 1, 'Sarah Johnson', '2022-02-18');

-- 7.

update orders set customer_name = 'Jack Smith' where order_id = 1;

-- 8.

insert into authors
values (
        4,
        'agatha',
        'christie',
        'agatha.christie@example.com'
    );

-- 9.

update authors set first_name = 'Martinez' where author_id = 2;

-- 10.

delete from books where author_id = 3;

drop table orders;

drop table books;

drop table authors;