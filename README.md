![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# PROGRAD PROJECT BUILDER | NODE | MONGOOSE - SUBDOCUMENT | QUIZ STAGE 4

## Learning Goals

In this exercise, you will learn how to create REST api end points:

- Building a RESTful API.
- Creating subdocuments
- Writing API endpoints.

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Introduction

Use Node.js and Express to build an API that performs subdocument operations on quiz.

- Add a `.gitignore` file appropriate for `node.js` projects.
- Add a new `package.json`.
- Add a `server` script to `package.json` that runs the API using `nodemon`.

### PROGRESSION 1 | ESTABLISH CONNECTION
Your task in this iteration is to create a
- `EXPRESS` server.
- An account in `Mongo Atlas`
- connection between node and atlas using mongoose.

### PROGRESSION 2 | REUSE AND MODIFY MODEL CLASSES
Reuse the model classes created in the day-3 project builder and modify the classes so that 
- Questions schema should contain the option and answers as the subdocument
    - Options
    - Answers

### PROGRESSION 3 | CREATE AN ENDPOINT TO MAP THE SCHEMAS

The question schema should embed the options and answers. Use options id and answers id to map these two with the corresponding question. Create your own api end points

### PROGRESSION 4 | DISPLAY ALL DETAILS USING SINGLE ENDPOINT
In this progression, display all the questions, options and corresponding answers together by creating a end point.

### BONUS | POPULATE THE DATA
Try to populate the values instead of displaying as an object id. Use  `populate` method in mongoose to achieve this.

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!
