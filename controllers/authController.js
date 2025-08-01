import fs from 'fs';
import path from 'path';

const usersPath = path.resolve('users/users.json');

function readUsers() {
  if (!fs.existsSync(usersPath)) return [];
  return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
}

function writeUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}

export const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }
  let users = readUsers();
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'User exists' });
  }
  users.push({ username, password });
  writeUsers(users);
  res.json({ message: 'Registered successfully' });
};

export const login = (req, res) => {
  const { username, password } = req.body;
  let users = readUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (user) res.json({ message: 'Login successful' });
  else res.status(401).json({ message: 'Invalid credentials' });
};