
/* 1. File System Operations:
Task: Create a Node.js script that reads a text file, modifies its content, and writes it to a new file. */


const fs = require('fs');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}


async function modifyFile(inputFilePath, outputFilePath) {
    try {
        const content = await readFile(inputFilePath);

        const modifiedContent = content.toUpperCase();

        await writeFile(outputFilePath, modifiedContent);

        console.log('File modification successful!');
    } catch (error) {
        console.error('Error modifying file:', error);
    }
}


const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

if (!inputFilePath || !outputFilePath) {
    console.error('Usage: node script.js <input-file> <output-file>');
} else {
    modifyFile(inputFilePath, outputFilePath);
}



/* 2. Requirements: Use Node.js built-in modules like fs to perform file system operations such as
reading and writing files. */


const fs = require('fs');

function readFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


function writeFile(filePath, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}


async function modifyFile(inputFilePath, outputFilePath) {
    try {
        const content = await readFile(inputFilePath);

        const modifiedContent = content.toUpperCase();

        await writeFile(outputFilePath, modifiedContent);

        console.log('File modification successful!');
    } catch (error) {
        console.error('Error modifying file:', error);
    }
}


const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

if (!inputFilePath || !outputFilePath) {
    console.error('Usage: node script.js <input-file> <output-file>');
} else {
    modifyFile(inputFilePath, outputFilePath);
}



/* 3. Express.js Basics:
Task: Create a simple Express.js application with routes for handling GET and POST requests.
Requirements: Use the Express.js framework to define routes and handle HTTP requests. */


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



/* 4. Middleware Implementation:
Task: Implement custom middleware in an Express.js application to log request details like URL and
method.
Requirements: Understand the concept of middleware in Express.js and how to use it to modify
request and response objects. */


const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}`);
    console.log(`Request Method: ${req.method}`);
    next();
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



/* 5. RESTful API Development:
Task: Develop a RESTful API with CRUD operations for a resource (e.g., users, products) using
Express.js.
Requirements: Define routes for handling CRUD operations (GET, POST, PUT, DELETE) on the
specified resource. */


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let users = [];

app.use(bodyParser.json());


app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});


app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name, email } = req.body;
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], name, email };
        res.json(users[userIndex]);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.sendStatus(204); // No content
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


/* 6. Authentication with JWT:
Task: Implement user authentication using JSON Web Tokens (JWT) in an Express.js application.
Requirements: Use libraries like jsonwebtoken to generate and verify JWT tokens and protect routes
that require authentication. */

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = 'your_secret_key'; // Change this to a secret key of your choice


function generateToken(user) {
    return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
}


function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
}

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}


async function comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

module.exports = { generateToken, verifyToken, hashPassword, comparePassword };

const express = require('express');
const bodyParser = require('body-parser');
const { generateToken, verifyToken, hashPassword, comparePassword } = require('./auth');

const app = express();
const port = 3000;

let users = [];

app.use(bodyParser.json());


function authenticate(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const decodedToken = verifyToken(token);
    if (!decodedToken) {
        return res.status(401).json({ error: 'Invalid token' });
    }
    req.user = decodedToken;
    next();
}


app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = { id: users.length + 1, email, password: hashedPassword };
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const user = users.find(user => user.email === email);
    if (!user || !(await comparePassword(password, user.password))) {
        return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = generateToken(user);
    res.json({ token });
});


app.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'Protected route accessed successfully', user: req.user });
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



/* 7. Database Integration with Database of your choice:
Task: Integrate Database with an Express.js application and perform CRUD operations on a
collection/table.
Requirements: Use libraries like Mongoose/pg/Your fav one to connect to a database and define
models for interacting with collections. */


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;


app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});


const User = mongoose.model('User', userSchema);


app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



/* 8. Error Handling and Logging:
Task: Implement error handling middleware and logging in an Express.js application.
Requirements: Handle errors gracefully using Express.js middleware and log error details to a file or
console. */

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;


app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});


app.get('/error', (req, res, next) => {
    try {
        throw new Error('This is a simulated error');
    } catch (error) {
        next(error); 
    }
});


function logErrorToFile(err) {
    const errorLogPath = path.join(__dirname, 'error.log');
    const errorMessage = `${new Date().toISOString()}: ${err.stack}\n`;
    fs.appendFile(errorLogPath, errorMessage, (error) => {
        if (error) {
            console.error('Error logging to file:', error);
        }
    });
}

app.use((err, req, res, next) => {
    logErrorToFile(err);
    next(err); 
});


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});



/* 9. Asynchronous Control Flow:
Task: Implement asynchronous control flow using async/await or promises in a Node.js application.
Requirements: Write asynchronous code to perform multiple operations in parallel or sequentially
and handle errors appropriately. */



const fetch = require('node-fetch');

async function fetchDataFromAPI1() {
    try {
        const response = await fetch('https://api.example.com/data1');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data from API 1: ' + error.message);
    }
}


async function fetchDataFromAPI2() {
    try {
        const response = await fetch('https://api.example.com/data2');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching data from API 2: ' + error.message);
    }
}


async function processData() {
    try {
        const dataFromAPI1 = await fetchDataFromAPI1();
        console.log('Data from API 1:', dataFromAPI1);


        const dataFromAPI2 = await fetchDataFromAPI2();
        console.log('Data from API 2:', dataFromAPI2);

        const processedData = {
            combinedData: {
                ...dataFromAPI1,
                ...dataFromAPI2
            }
        };
        console.log('Processed Data:', processedData);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

processData();



/* 10. Scheduled Tasks with Node.js Cron:
Task: Schedule recurring tasks (e.g., sending email notifications) using Node.js Cron.
Requirements: Use the node-cron library to define cron jobs and execute tasks at specified intervals. */


const cron = require('node-cron');

const task = cron.schedule('* * * * *', () => {
    console.log('Running task...');
});

task.start();



/* 11. Payload Validation Middleware:
Task: Create middleware to validate request payloads (e.g., JSON bodies) in an Express.js
application.
Requirements: Implement middleware to validate incoming request payloads against a defined
schema or set of rules. Use libraries like joi, express-validator, etc to define validation schemas and
handle validation errors. */

const { validationResult } = require('express-validator');

const validatePayload = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = validatePayload;


const express = require('express');
const { body } = require('express-validator');
const validatePayload = require('./validatePayload');

const app = express();

app.use(express.json());

app.post('/users', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
], validatePayload, (req, res) => {
    const { name, email } = req.body;
    res.status(200).json({ message: 'User created successfully', name, email });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
