import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// Keep track of all connected turtles
const turtles = new Set();

wss.on("connection", function connection(ws, req) {
	turtles.add(ws);
	console.log("New client connected. Total turtles: " + turtles.size);

	ws.send("Hello from server!");

	ws.on("message", function incoming(message) {
		const data = JSON.parse(message);
		console.log(data);
	});

	ws.on("close", function close() {
		turtles.delete(ws);
		console.log("Turtle disconnected. Total turtles: " + turtles.size);
	});
});

// server.listen(25594);
console.log("Server running!");
