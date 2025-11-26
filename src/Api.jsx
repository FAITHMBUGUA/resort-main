import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;
    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          const res = await axios.post(`${API_BASE}/auth/refresh`, { refreshToken });
          const newToken = res.data?.token;
          if (newToken) {
            localStorage.setItem("token", newToken);
            originalReq.headers.Authorization = `Bearer ${newToken}`;
            return api(originalReq);
          }
        } catch {
          console.error("Refresh token failed");
        }
      }
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      window.location.href = "/login";
    }
    return Promise.reject(error.response?.data || error.message);
  }
);

// ---------- AUTH ----------
export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);

// ---------- ROOMS ----------
export const getRooms = () => api.get("/rooms");
export const getRoomById = (id) => api.get(`/rooms/${id}`);

// ---------- CONFERENCE ----------
export const getConferenceHalls = () => api.get("/conference");
export const getConferenceById = (id) => api.get(`/conference/${id}`);

// ---------- SERVICES ----------
export const getServices = () => api.get("/services");
export const getServiceById = (id) => api.get(`/services/${id}`);

// ---------- BOOKINGS ----------
export const createBooking = (data) => api.post("/bookings", data);
export const getUserBookings = (userId) => api.get(`/bookings/user/${userId}`);
export const cancelBooking = (bookingId) => api.delete(`/bookings/${bookingId}`);

// ---------- PAYMENTS ----------
export const initPayment = (data) => api.post("/payments/init", data);
export const verifyPayment = (ref) => api.get(`/payments/verify/${ref}`);

export default api;
