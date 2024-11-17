export async function getValue(formData: {
  board: string;
  classLevel: string;
  selectedSubjects: string;
  chapter: string;
  paperType: string;
  hit_count: number;
  is_logedIn: string;
}) {
  try {
    const payload = {
      id: "12345", // Can be dynamic if needed
      Board: formData.board,
      Class: formData.classLevel,
      Subject: formData.selectedSubjects,
      Chapter: formData.chapter,
      Prompt_Type: formData.paperType,
      hit_count: formData.hit_count,
      is_logedIn: formData.is_logedIn,
    };

    console.log("Before fetch:", payload);

    const response = await fetch("http://localhost:8000/get-value", {
      method: "POST", // or GET, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json", // Adjust content type if needed
      },
      body: JSON.stringify(payload), // Sending dynamic formData as the body
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
