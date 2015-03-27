drop table if exists people;
create table people (
	  id integer primary key autoincrement,
	  title text not null,
	  text text not null
);
