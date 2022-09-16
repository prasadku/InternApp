package example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    protected static Connection initializeDB() throws SQLException, ClassNotFoundException {
        String dbName = "jdbc:postgresql://localhost:5432/student";
        String dbDriver = "org.postgresql.Driver";
        String username = "postgres";
        String password = "changeme@123";

        Class.forName(dbDriver);
        Connection conn = DriverManager.getConnection(dbName, username, password);

        return conn;
    }
}