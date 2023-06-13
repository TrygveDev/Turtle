import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 25594 });

// Keep track of all connected turtles
const turtles = new Set();

wss.on("connection", function connection(ws, req) {
	ws.send(JSON.stringify({ type: "message", data: "Connection successful!" }));
	ws.on("message", function incoming(message) {
		console.log(message);
	});
});

// server.listen(25594);
console.log("Server running!");
