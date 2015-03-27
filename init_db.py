import sqlite3
conn = sqlite3.connect('people.db')
c = conn.cursor()
c.execute("CREATE TABLE people (name, classes)")
c.execute("INSERT INTO people VALUES ('bob', 'Multivariable Calculus')")
c.execute("SELECT * FROM people")
print(c.fetchall())
conn.commit()
conn.close()