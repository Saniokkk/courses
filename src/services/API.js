import axios from "axios";

const BASE_URL = "https://api.wisey.app";
const VERSION = "/api/v1";

axios.defaults.baseURL = `${BASE_URL}${VERSION}`;

function addTokenToAxios(token) {
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
}

export async function getToken() {
  const response = await axios.get("/auth/anonymous?platform=subscriptions");
  addTokenToAxios(response.data.token);
  return response.data.token;
}

export async function getPreviewListCourses() {
  const response = await axios.get("/core/preview-courses");
  return response.data.courses;
}

export async function getPreviewCourse(id) {
  const response = await axios.get(`/core/preview-courses/${id}`);
  return response.data;
}
