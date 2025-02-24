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
            color: #003300;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgba(0, 128, 0, 0.9);
            color: white;
            padding: 15px 30px;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .logo {
            width: 100px;
            margin-right: 15px;
        }
        .logo-container {
            display: flex;
            align-items: center;
        }
        .school-name {
            font-size: 24px;
            font-weight: bold;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
        }
        nav ul li {
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            padding: 10px 15px;
            transition: all 0.3s ease;
            border-radius: 5px;
        }
        nav ul li a:hover {
            background-color: white;
            color: #008000;
        }
        main {
            padding: 100px 20px 20px;
            text-align: center;
        }
        section {
            margin: 50px 0;
            padding: 30px;
            border-radius: 10px;
            background-color: white;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 1s ease forwards;
            color: #003300;
        }
        section:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        .history-section {
            background: url('school_photo.jpg') no-repeat center center/cover;
            color: #f0fff0;
            padding: 60px;
            border-radius: 15px;
            background-attachment: fixed;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 10px;
            background-color: #008000;
            color: white;
            border-radius: 5px;
            text-decoration: none;
            transition: transform 0.3s ease;
        }
        .button:hover {
            background-color: #004d00;
            transform: scale(1.05);
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        footer {
            background-color: #008000;
            color: white;
            text-align: center;
            padding: 10px;
            position: relative;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo-container">
            <img src="fdmnhs_logo.png" alt="FDMNHS Logo" class="logo">
            <span class="school-name">Fe Del Mundo National High School</span>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#ebook">E-Book Learning</a></li>
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
            <a href="ebook.html" class="button">Access E-Book Learning</a>
        </section>

        <section id="announcements">
            <h2>School Announcements</h2>
            <p>Stay updated with the latest news and events.</p>
            <a href="announcements.html" class="button">View Announcements</a>
        </section>

        <section id="achievements">
            <h2>School Achievements</h2>
            <p>Celebrating the milestones and accomplishments of our students and faculty.</p>
            <a href="achievements.html" class="button">View Achievements</a>
        </section>

        <section id="history" class="history-section">
            <h2>History of Fe Del Mundo NHS</h2>
            <p>Fe Del Mundo National High School was established with the goal of academic excellence...</p>
            <a href="history.html" class="button">Read More</a>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Fe Del Mundo National High School. All Rights Reserved.</p>
    </footer>
</body>
</html>
