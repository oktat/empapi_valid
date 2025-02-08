
create database emp4
default character set utf8mb4
default collate utf8mb4_unicode_ci;

grant all 
on emp4.* 
to 'emp4'@'%' 
identified by 'titok';

-- A táblázatok automatikusan létrejönnek