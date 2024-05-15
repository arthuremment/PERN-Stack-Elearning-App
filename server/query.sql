CREATE TABLE courses(
	course_id SERIAL PRIMARY KEY,
	chapter VARCHAR(50),
	description text,
	course text
);

CREATE TABLE quizz (
	quizz_id INT NOT NULL,
	question VARCHAR(255) NOT NULL, 
	answerOne VARCHAR(255) NOT NULL, 
	answerTwo VARCHAR(255) NOT NULL, 
	answerThree VARCHAR(255) NOT NULL, 
	answerFour VARCHAR(255) NOT NULL, 
	correctAnswer VARCHAR(255) NOT NULL
);

CREATE TABLE forum (
	forum_id SERIAL PRIMARY KEY,
	message VARCHAR(255) NOT NULL, 
	author VARCHAR(255) NOT NULL, 
	date VARCHAR(255) NOT NULL, 
	heure VARCHAR(255) NOT NULL
);

INSERT INTO forum
VALUES (
  1,
  'J''ai beaucoup aimé le cours sur les verbes et les noms, j''aimerais avoir plus de quizz dessus',
  'Jean',
  '16/04/2024',
  '16:23'
);

INSERT INTO quizz (quizz_id, question, answerOne, answerTwo, answerThree, answerFour, correctAnswer)
VALUES (
  1, 
  'Comment forme-t-on une phrase négative en anglais?',
  'Sujet + verbe + complément + "not"',
  'Verbe + sujet + complément + "not"',
  'Sujet + "not" + verbe + complément',
  'Verbe + "not" + sujet + complément',
  'Sujet + verbe + complément + "not"'
);

INSERT INTO quizz (quizz_id, question, answerOne, answerTwo, answerThree, answerFour, correctAnswer)
VALUES (
  1, 
  'Quel est l''ordre des mots correct pour une question en anglais?',
  'Verbe + sujet + complément',
  'Sujet + complément + verbe',
  'Complément + verbe + sujet',
  'Sujet + verbe + complément',
  'Sujet + verbe + complément'
);
