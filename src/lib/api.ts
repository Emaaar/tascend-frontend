const API_URL = "http://localhost:8000/api" // Update this to your backend URL

export async function getTasks() {
  const response = await fetch(`${API_URL}/tasks`)
  return await response.json()
}
