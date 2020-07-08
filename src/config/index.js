const config = require("./config.json");

export default config;

export function GetEnv(){
	return process.env.NODE_ENV || "production"
}