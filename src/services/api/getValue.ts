import axios from "axios";

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
    // Generate a random ID using Math.random and convert it to a base-36 string
    const randomId = Math.random().toString(36).substr(2, 9);

    const payload = {
      id: randomId,
      Board: formData.board,
      Class: formData.classLevel,
      Subject: formData.selectedSubjects,
      Chapter: formData.chapter,
      Prompt_Type: formData.paperType,
      hit_count: formData.hit_count,
      is_logedIn: formData.is_logedIn,
    };

    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const response = await axios.post(
      apiURL,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response, "response^^^^^^^")
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message || error.response.statusText;
      console.error(
        `HTTP error! status: ${error.response.status}, message: ${errorMessage}`
      );
      throw new Error(
        `HTTP error! status: ${error.response.status}, message: ${errorMessage}`
      );
    } else {
      console.error("Error fetching data:", error.message);
      throw new Error("Error fetching data");
    }
  }
}
