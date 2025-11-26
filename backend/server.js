import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pkg from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const { PrismaClient } = pkg;

const app = express();
const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

app.use(cors());
app.use(bodyParser.json());

// -------- AUTH ROUTES --------
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return res.status(400).json({ error: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.json({ message: "User registered", userId: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, name: user.name, email: user.email });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Mount auth routes
app.use("/api/auth", authRouter);

// -------- DATA ROUTES --------
app.get("/api/rooms", async (req, res) => {
  try {
    const rooms = await prisma.room.findMany();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/conference", async (req, res) => {
  try {
    const halls = await prisma.conferenceHall.findMany();
    res.json(halls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/services", async (req, res) => {
  try {
    const services = await prisma.service.findMany();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------- BOOKINGS --------
app.post("/api/bookings", async (req, res) => {
  const { userId, hallName, roomName, date, startHour, endHour } = req.body;

  try {
    const booking = await prisma.booking.create({
      data: { userId, hallName, roomName, date: new Date(date), startHour, endHour },
    });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: "Booking failed", details: err.message });
  }
});

app.get("/api/bookings/user/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await prisma.booking.findMany({ where: { userId: parseInt(userId) } });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// -------- START SERVER --------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
