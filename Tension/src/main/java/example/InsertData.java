package example;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

public class InsertData extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            PrintWriter out;
            out = response.getWriter();
            out.print("Successfull");
            Connection conn = DBConnection.initializeDB();
            if (conn != null) {
                out.print("\nCompleted!!!!!");
            } else {
                out.print("\nConnection not established");
            }

            int id = Integer.parseInt(request.getParameter("id"));
            String name = request.getParameter("name");
            int roll = Integer.parseInt(request.getParameter("roll"));
            String div = request.getParameter("div");
            String branch = request.getParameter("branch");
            String gender = request.getParameter("gender");

            out.print("\nid: " + id + " name: " + name + " roll: " + roll + " div: " + div + " branch: " + branch + " gender: " + gender);

            PreparedStatement st = conn.prepareStatement("INSERT INTO tutor(id, name,roll,div,branch,gender) VALUES (?,?,?,?,?,?);");

            st.setInt(1, id);
            st.setString(2, name);
            st.setInt(3, roll);
            st.setString(4, div);
            st.setString(5, branch);
            st.setString(6, gender);

            st.executeQuery();


        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        try {
            Connection conn = DBConnection.initializeDB();
            Statement statement = conn.createStatement();
            String query = "Select * from tutor";
            ResultSet rs = statement.executeQuery(query);
            while (rs.next()) {
                out.println(rs.getInt("id"));
                out.println(rs.getString("name"));
                out.println(rs.getInt("roll"));
                out.println(rs.getString("div"));
                out.println(rs.getString("branch"));
                out.println(rs.getString("gender"));
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        try {
            Connection conn = null;
            conn = DBConnection.initializeDB();
            int id = Integer.parseInt(req.getParameter("id"));
            String name = req.getParameter("name");
            int roll = Integer.parseInt(req.getParameter("roll"));
            String div = req.getParameter("div");
            String branch = req.getParameter("branch");
            String gender = req.getParameter("gender");
            PreparedStatement st = conn.prepareStatement("UPDATE tutor SET  name=?, roll=?, div=?, branch=?, gender=?  WHERE id=?");

            st.setInt(6, id);
            st.setString(1, name);
            st.setInt(2, roll);
            st.setString(3, div);
            st.setString(4, branch);
            st.setString(5, gender);

            st.executeQuery();


        } catch (Exception e) {
            System.out.println(e);
        }

    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            Connection conn = null;
            conn = DBConnection.initializeDB();
            int id = Integer.parseInt(req.getParameter("id"));

            PreparedStatement st = conn.prepareStatement("DELETE FROM tutor WHERE id = ? ");

            st.setInt(1, id);
            st.executeQuery();


        } catch (Exception e) {
            System.out.println(e);
        }
    }
}



