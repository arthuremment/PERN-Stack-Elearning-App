const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const jwt = require('jsonwebtoken')
//const bodyParser = require('body-parser');

const app = express();

const secretKey = 'secretKey'

//middleware
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(express.json())
//app.use(bodyParser.json())

//Configuration de la gestion de session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

const pool = new Pool({
    user: "postgres",
    password: "postgre",
    host: "localhost",
    port: 5432,
    database: "skull_db"
});

//CONNEXION TO THE DATABASE
pool.connect((err) => {
    if (err) {
        console.error("Error during the connection with the database:", err)
        return;
    }
    console.log("Connected to the database :)")
});

//ROUTES
//COURSES PART

// Create a course
// app.post("/courses", async (req, res) => {
    
//     try {
//         // console.log(req.body);
//         const { chapter, description, course } = req.body;
//         const newCourse = await pool.query("INSERT INTO courses (chapter, description, course) VALUES($1, $2, $3) RETURNING *",
//             [chapter, description, course]
//         );

//         res.json(newCourse.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//     }
// })

//Get all courses
app.get("/courses", async (req, res) => {
    try {
        const allCourses = await pool.query("SELECT * FROM courses")
        res.json(allCourses.rows);
        console.log(allCourses.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//Get a course
// app.get("/courses/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const course = await pool.query("SELECT * FROM courses WHERE course_id = $1",
//             [id]);

//         res.json(course.rows[0])
//     } catch (err) {
//         console.error(err.message)
//     }
// })

//Update a course
// app.put("/courses/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { chapter, description, course } = req.body;
//         const updateCourse = await pool.query("UPDATE course SET chapter = $2, description = $3, course = $4 WHERE course_id = $1",
//             [id, chapter, description, course]);

//         res.json("Course was updated !")
//     } catch (error) {
//         console.error(error.message);
//     }
// })

//Delete a course
// app.delete("/courses/:id", async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleteCourse = await pool.query('DELETE FROM courses WHERE course_id = $1',
//             [id]);

//         res.json("Course was deleted !")
//     } catch (error) {
//         console.error(error.message);
//     }
// })

//USERS PART

//Create an user
app.post("/signup", async (req, res) => {  
    try {
        // console.log(req.body);
        const { username, password } = req.body;
        const newUser = await pool.query("INSERT INTO users (username, password) VALUES($1, $2) RETURNING *",
            [username, password]
        );

        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Authentification
app.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        pool.query("SELECT * FROM users WHERE username = $1 AND password = $2",
        [username, password],
        (error, results) => {
            if (error) {
                throw error;
            }
            if (results.rows.length > 0) {
                //Authentification réussie

                //Génération du token JWT
                const token = jwt.sign({ username: username }, secretKey, { expiresIn: '1h'});
                //Stocker le nom d'utilisateur dans la session
                req.session.authentificated = true;
                req.session.username = req.body.username;


                //Envoi du token en tant que réponse
                res.json({ token: token, message: 'Authentification réusie', username: username });
            } else {
                //Erreur d'authentification
                res.status(401).json({  message: "Nom d'utilisateur ou mot de passe incorrect" });
            }
        })
    } catch (error) {
        console.error(error.message);
    }
})

//QUIZZ PART
//Get all quizz
app.get("/quizz", async (req, res) => {
    try {
        const allQuizz = await pool.query("SELECT * FROM quizz")
        res.json(allQuizz.rows);
        console.log(allQuizz.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//Get a quizz
app.get("/quizz/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const quizz = await pool.query("SELECT * FROM quizz WHERE quizz_id = $1",
            [id]);

        res.json(quizz.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//FORUM PART
//Create a message
app.post("/forum", async (req, res) => {  
    try {
        // console.log(req.body);
        const { message, author, date, heure } = req.body;
        const newMessage = await pool.query("INSERT INTO forum (message, author, date, heure) VALUES($1, $2, $3, $4) RETURNING *",
            [message, author, date, heure]
        );

        res.json(newMessage.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//Get all messages
app.get("/forum", async (req, res) => {
    try {
        const allMessages = await pool.query("SELECT * FROM forum")
        res.json(allMessages.rows);
        console.log(allCourses.rows)
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(4000, () => {
    console.log("Server has started on port 4000");
});