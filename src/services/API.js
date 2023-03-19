import axios from "axios";

const BASE_URL = "https://api.wisey.app";
const VERSION = "/api/v1";

axios.defaults.baseURL = `${BASE_URL}${VERSION}`;

export async function getToken() {
  const response = await axios.get("/auth/anonymous?platform=subscriptions");
  localStorage.setItem("token", response.data.token);
  return response.data.token;
}

export async function getPreviewListCourses() {
  const token = localStorage.getItem("token");
  const response = await axios.get("/core/preview-courses", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data.courses;
}

export async function getPreviewCourse(id) {
  const token = localStorage.getItem("token");
  const response = await axios.get(`/core/preview-courses/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}
