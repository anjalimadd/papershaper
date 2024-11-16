export async function getValue() {
  try {
    const payload = {
      id: "12345",
      Board: "CBSE",
      Class: "Class 12th",
      Subject: "Maths",
      Chapter: "Vector Algebra",
      Prompt_Type: "Mock Paper",
      hit_count: 2,
      is_logedIn: "True",
    };
    console.log("Before fetch:", payload);
    const response = await fetch("http://localhost:8000/get-value", {
      // <-- Check this URL
      method: "POST", // or GET, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json", // Adjust content type if needed
      },
      body: JSON.stringify(payload), // If sending data
    });

    console.log("After fetch:", response);

    if (!response.ok) {
      const errorData = await response.json(); // Try to parse error details
      console.error(
        "Network response was not ok:",
        response.status,
        response.statusText,
        errorData
      );
      throw new Error(`HTTP error! status: ${response.status}`); // Re-throw for better handling
    }

    const data = await response.json(); // Parse the response
    return data;
  } catch (error) {
    console.error("Error fetching data:", error); // Log the error with more context
    throw error; // Re-throw to let calling functions handle it
  }
}
