import axios from "axios";

export async function getAnswerKey(formData: {
  board: string;
  classLevel: string;
  selectedSubjects: string;
  chapter: string;
  paperType: string;
  hit_count: number;
  is_logedIn: boolean;
  question_paper: string;
}) {
  try {
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
      answer: true,
      question_paper: formData.question_paper,
    };

    const mode = import.meta.env.MODE;
    console.log("Mode:", mode);
    const apiURL = mode === "development" ? "/api/answer-key" : import.meta.env.VITE_ANSWER_API_BASE_URL;
    console.log("API URL:", apiURL);
    const response = await axios.post(apiURL, payload, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    // The API response sample:
    // {
    //   data: {
    //     id: "...",
    //     result: "The answer key text with **bold** markdown formatting..."
    //   },
    //   ...
    // }
    if (
      response.status === 200 &&
      response.data &&
      response.data.data &&
      response.data.data.result
    ) {
      // Return the answer key text
      return response.data.data.result;
    } else {
      throw new Error("Invalid response format");
    }
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
      console.error("Error fetching answer key:", error.message);
      throw new Error("Error fetching answer key");
    }
  }
}
