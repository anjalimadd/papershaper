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

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/get-value`,
      {
        method: "POST", // or GET, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json", // Adjust content type if needed
        },
        body: JSON.stringify(payload), // Sending dynamic formData as the body
      }
    );
    if (!response.ok) {
      const errorData = await response.json(); // Try to parse error response
      const errorMessage = errorData?.message || response.statusText;
      console.error(
        `HTTP error! status: ${response.status}, message: ${errorMessage}`
      );
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorMessage}`
      ); // Throw a more informative error
    }

    const data = await response.json(); // Parse the response as JSON
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw to let calling functions handle it
  }
}
