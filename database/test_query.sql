insert into users values('gono2g92ugowv', 'Bob Daniels', 'bobbydanny42@gmail.com');
insert into users values('wjbvgu933vrsl', 'John Moore', 'johnm4228@yahoo.com');
insert into transactions values (DEFAULT, 'mcdondalds', 4.20, 'food', '8/22/2021', 'gono2g92ugowv');
insert into bills values (DEFAULT, 'Electrical', 'Utility', 86.43, '9/1/2021', 'Monthly', 'gono2g92ugowv');
insert into bills values (DEFAULT, 'Rent Money', 'Rent', 1300.56, '9/2/2021', 'Monthly', 'gono2g92ugowv');


select * from transactions;
select * from users;
select * from bills;