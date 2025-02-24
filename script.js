<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fe Del Mundo National High School</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
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
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .logo {
            width: 80px;
            margin-right: 15px;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
        }
        nav ul li a:hover {
            color: yellow;
        }
        main {
            padding: 20px;
            text-align: center;
        }
        section {
            margin: 20px auto;
            padding: 20px;
            max-width: 800px;
            border: 2px solid #008000;
            border-radius: 10px;
            background-color: white;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        section:hover {
            background-color: #e6ffe6;
            transform: scale(1.02);
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
        <img src="logo.png" alt="FDMNHS Logo" class="logo">
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="ebook.html">E-Book Learning</a></li>
                <li><a href="announcements.html">Announcements</a></li>
                <li><a href="achievements.html">Achievements</a></li>
                <li><a href="history.html">History</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Welcome to Fe Del Mundo National High School</h1>
            <p>"Where Excellence is Our Virtue"</p>
        </section>

        <section id="ebook">
            <h2><a href="ebook.html">E-Book Learning - Pre-Calculus</a></h2>
            <p>Explore our interactive e-books and resources to excel in Pre-Calculus.</p>
        </section>

        <section id="announcements">
            <h2><a href="announcements.html">School Announcements</a></h2>
            <p>Stay updated with the latest news and events.</p>
        </section>

        <section id="achievements">
            <h2><a href="achievements.html">School Achievements</a></h2>
            <p>Celebrating the milestones and accomplishments of our students and faculty.</p>
        </section>

        <section id="history">
            <h2><a href="history.html">History of Fe Del Mundo NHS</a></h2>
            <p>Fe Del Mundo National High School, established in Barangay Fe Del Mundo, Mansalay, Oriental Mindoro, was named in honor of Dr. Fe Del Mundo, a renowned Filipino pediatrician. Dr. Del Mundo was born on November 27, 1911, in Intramuros, Manila. She was a trailblazer in pediatric medicine, dedicating her life to the health and well-being of children. Her commitment to medical excellence and education serves as the foundation of our school's values and mission.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Fe Del Mundo National High School. All Rights Reserved.</p>
    </footer>
</body>
</html>
