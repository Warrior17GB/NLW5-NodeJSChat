import { http } from "./http";
import "./websocket/client";

http.listen(8080, () => console.log("Server is running on port 8080"));