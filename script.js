<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fe Del Mundo National High School</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0fff0;
            color: #004d00;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #008000;
            color: white;
            padding: 15px;
            text-align: center;
        }
        .logo {
            width: 100px;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            text-align: center;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            padding: 10px 15px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        nav ul li a:hover {
            background-color: #004d00;
            color: yellow;
            border-radius: 5px;
        }
        main {
            padding: 20px;
            text-align: center;
        }
        section {
            margin: 30px 0;
            padding: 20px;
            border: 2px solid #008000;
            border-radius: 10px;
            background-color: white;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        section:hover {
            transform: scale(1.02);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        footer {
            background-color: #008000;
            color: white;
            text-align: center;
            padding: 10px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <img src="fdmnhs_logo.png" alt="FDMNHS Logo" class="logo">
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#ebook">E-Book Learning - Pre-Calculus</a></li>
                <li><a href="#announcements">Announcements</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#history">History</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Welcome to Fe Del Mundo National High School</h1>
            <p>"Where Excellence is Our Virtue"</p>
        </section>

        <section id="ebook">
            <h2>E-Book Learning - Pre-Calculus</h2>
            <p>Explore our interactive e-books and resources to excel in Pre-Calculus.</p>
            <a href="ebook.html">Access E-Book Learning</a>
        </section>

        <section id="announcements">
            <h2>School Announcements</h2>
            <p>Stay updated with the latest news and events.</p>
            <a href="announcements.html">View Announcements</a>
        </section>

        <section id="achievements">
            <h2>School Achievements</h2>
            <p>Celebrating the milestones and accomplishments of our students and faculty.</p>
            <a href="achievements.html">View Achievements</a>
        </section>

        <section id="history">
            <h2>History of Fe Del Mundo NHS</h2>
            <p>Fe Del Mundo National High School was established with the goal of academic excellence and holistic student development. Over the years, it has produced outstanding graduates and contributed significantly to education. The school continues to innovate and uphold its values of integrity, discipline, and excellence.</p>
            <a href="history.html">Read More</a>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Fe Del Mundo National High School. All Rights Reserved.</p>
    </footer>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const links = document.querySelectorAll("nav ul li a");
            links.forEach(link => {
                link.addEventListener("mouseover", function() {
                    this.style.backgroundColor = "#004d00";
                    this.style.color = "yellow";
                });
                link.addEventListener("mouseout", function() {
                    this.style.backgroundColor = "transparent";
                    this.style.color = "white";
                });
            });
        });
    </script>
</body>
</html>
