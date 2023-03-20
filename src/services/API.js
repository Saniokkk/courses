import axios from "axios";

const BASE_URL = "https://api.wisey.app";
const VERSION = "/api/v1";

axios.defaults.baseURL = `${BASE_URL}${VERSION}`;

export async function getToken() {
  try {
    const response = await axios.get("/auth/anonymous?platform=subscriptions");
    localStorage.setItem("token", response.data.token);
    return response.data.token;
  } catch (error) {
    console.error("An error occurred while fetching the token:", error);
    throw error;
  }
}

export async function getPreviewListCourses() {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/core/preview-courses", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.courses;
  } catch (error) {
    if (error.response) {
      console.log(`Request failed with status code ${error.response.status}`);
    } else if (error.request) {
      console.log("Request failed to send");
    } else {
      console.log(`Error: ${error.message}`);
    }
  }
}

export async function getPreviewCourse(id) {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`/core/preview-courses/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}
