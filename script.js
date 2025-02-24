<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fe Del Mundo National High School</title>
    <style>
        /* General Styling */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }

        body {
            background-color: #f8f9f5;
            color: #2c5f2d;
            text-align: center;
        }

        /* Navigation Bar */
        nav {
            background-color: #2c5f2d;
            padding: 15px;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            text-decoration: none;
            color: white;
            font-size: 18px;
            font-weight: bold;
            transition: 0.3s;
        }

        nav ul li a:hover {
            color: yellow;
        }

        /* Interactive Section Panels */
        section {
            padding: 100px 20px;
            margin-top: 60px;
            transition: transform 0.3s ease-in-out;
            background-color: white;
            border-radius: 15px;
            width: 80%;
            margin: auto;
            box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
        }

        section:hover {
            transform: scale(1.02);
        }

        /* Home Section */
        #home {
            background: url('https://source.unsplash.com/1600x900/?school,classroom') center/cover no-repeat;
            height: 400px;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
        }

        #home h1 {
            font-size: 40px;
            background: rgba(0, 0, 0, 0.7);
            padding: 10px 20px;
            border-radius: 10px;
        }

        /* About and Contact Sections */
        #about, #contact {
            background-color: #ffffff;
            padding: 50px;
            border-radius: 10px;
            width: 80%;
            margin: auto;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
        }

        #about:hover, #contact:hover {
            transform: translateY(-10px);
        }

        /* Footer */
        footer {
            background: #2c5f2d;
            color: white;
            padding: 10px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <!-- Navigation Bar -->
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Home Section -->
    <section id="home">
        <h1>Welcome to Fe Del Mundo National High School</h1>
        <p>Empowering students for a brighter future.</p>
    </section>

    <!-- About Section -->
    <section id="about">
        <h2>About Our School</h2>
        <p>Fe Del Mundo National High School is dedicated to providing high-quality education with modern facilities and excellent teachers. We believe in nurturing young minds to become future leaders.</p>
    </section>

    <!-- Contact Section -->
    <section id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@fdelmundo-nhs.edu.ph</p>
        <p>Phone: +63 912 345 6789</p>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Fe Del Mundo National High School. All rights reserved.</p>
    </footer>

</body>
</html>
