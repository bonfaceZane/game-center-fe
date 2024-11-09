import { ExpoRequest, ExpoResponse } from "expo-router/server";

export function GET() {
  return ExpoResponse.json({ hello: "world get " });
}
export function POST() {
  return ExpoRequest.json({ hello: "world" });
}
