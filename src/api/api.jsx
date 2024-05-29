import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://127.0.0.1:8000";

const Api = axios.create({
    baseURL: API_URL,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

const setAuthToken = (token) =>{
    if(token){
        Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        Cookies.set("token", token);
    } else {
        delete Api.defaults.headers.common["Authorization"];
        Cookies.remove("token");
    }
};

Api.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");
        if(token){
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (email, password) => {
    const response = await Api.post("/api/login", { email, password}).catch(
        (error) => {
            throw error;
        }
    );

    const { token } = response.data;

    setAuthToken(token);
    Cookies.set("token", token);
    Cookies.set("user", JSON.stringify(response.data.user));
    Cookies.set("permissions", JSON.stringify(response.data.permissions));
    return response.data;
}

export const logout = async () => {
//   await Api.post("/api/logout").catch((error) => {
//     throw error;
//   });
  Cookies.remove("token");
  Cookies.remove("user");
  Cookies.remove("permissions");
  window.location = "/login";
};

export const fetchBuku = async () => {
  const response = await Api.get("/api/data-buku");
  return response.data.data;
};

export const fetchAnggota = async () => {
    const response = await Api.get("api/user");
    return response.data.data;
}

export const postPeminjaman = async (peminjamandata) => {
  const response = await Api.post("/api/peminjaman", peminjamandata);
  return response.data.data;
}

export const fetchPeminjaman = async () => {
    const response = await Api.get("/api/peminjaman");
    return response.data.data;
}

export const fetchDenda = async () => {
    const response = await Api.get("/api/denda");
    return response.data.data;
} 

export const postBuku = async (bukuData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await Api.post("/api/data-buku", bukuData);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

    export const deleteBuku = async (bukuId) => {
    await Api.delete(`/api/data-buku/${bukuId}`).catch((error) => {
        throw error;
    });
    };

    export const updateBuku = async (bukuId, updatedBook) => {
      const response = await Api.post(
        `/api/data-buku/${bukuId}`,
        updatedBook
      ).catch((error) => {
        throw error;
      });
      return response.data;
    };

    export const postAnggota = async (anggotaData) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const response = await Api.post("/api/user", anggotaData);
        return response.data.data;
      } catch (error) {
        throw error;
      }
    };

    export const updateAnggota = async (anggotaId, updatedAnggota) => {
      // eslint-disable-next-line no-useless-catch
      try {
        const response = await Api.post(
          `/api/user/${anggotaId}`,
          updatedAnggota
        );
        return response.data.data;
      } catch (error) {
        throw error;
      }
    };

    export const deleteAnggota = async (anggotaId) => {
      await Api.delete(`/api/user/${anggotaId}`).catch((error) => {
        throw error;
      });
    };