<?php
// Database credentials
$servername = "sql108.byetcluster.com";
$username = "if0_36292212";
$password = "143143Ss";
$dbname = "if0_36292212_grw_us";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process registration form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["regUsername"];
    $email = $_POST["regEmail"];
    $password = $_POST["regPassword"];

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // SQL to create users table if not exists
    $create_table_sql = "CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
    )";

    // Execute the table creation query
    if ($conn->query($create_table_sql) === TRUE) {
        // SQL to insert user data into the table
        $insert_sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";
        
        // Execute the insertion query
        if ($conn->query($insert_sql) === TRUE) {
            // Redirect to the target webpage after successful registration
            header("Location:https://www.grw-us.great-site.net/sign%20in%20&%20up%20page/login_page.html");
            exit(); // Terminate the current script
        } else {
            echo "Error: " . $insert_sql . "<br>" . $conn->error;
        }
    } else {
        echo "Error creating table: " . $conn->error;
    }
}

// Close connection
$conn->close();
?>
