import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Health endpoint to keep the Render server active
const healthEndpoint = "https://stockspy.onrender.com/health"; // Replace with your actual Render health endpoint URL

// Function to ping the health endpoint
async function pingHealthEndpoint() {
  try {
    const response = await fetch(healthEndpoint);
    if (response.ok) {
      console.log(`Health endpoint ping successful: ${new Date().toLocaleString()}`);
    } else {
      console.log(`Health endpoint ping failed: ${response.status} - ${new Date().toLocaleString()}`);
    }
  } catch (error) {
    console.error("Error pinging health endpoint:", error);
  }
}

// Start Deno server for monitoring purposes
serve(() => new Response("Deno ping server running"), { port: 8000 });
console.log("Deno server is running and will ping the Render server health endpoint every 5 minutes");

// Set interval to ping the health endpoint every 5 minutes (300,000 ms)
// setInterval(pingHealthEndpoint, 300000);

// Set interval to ping the health endpoint every 30 seconds (30,000 ms)
setInterval(pingHealthEndpoint, 30000);
