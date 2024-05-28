import blur from "../assets/blur.svg";
import blur1 from "../assets/blur1.svg";
import blur2 from "../assets/blur2.svg";
import book from "../assets/books_icon-removebg-preview 1.svg";
import { login } from "../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function loginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await login(email, password);

      Cookies.set("token", response.token);
      Cookies.set("user", JSON.stringify(response.user));
      Cookies.set("permissions", JSON.stringify(response.permissions));

      localStorage.setItem("role", response.role);
      localStorage.setItem("userId", response.user.id);
      console.log(response.user.id);

      if (response.role === "user") {
        navigate("/dashboard");
      } else {
        navigate("/dashboard-admin");
      }
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data);
      } else {
        console.error("error occurred: ", error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const back = async () => {
    navigate("/");
  };

  return (
    <>
      <section className="w-screen h-screen relative bg-[#AFA7D7]">
        <img src={blur} className="absolute scale-75 -top-24 -left-24" alt="" />
        <img src={blur1} className="absolute scale-75 top-64 -left-24" alt="" />
        <img src={blur2} className="absolute scale-75 top-0" alt="" />
        <img
          src={book}
          className="absolute scale-75 top-52 z-50 left-32"
          alt=""
        />
        <div className="rounded-tl-[3rem] rounded-bl-[3rem] h-full relative z-40 bg-white content-start w-2/3 ml-auto px-20">
          <form onSubmit={handleLogin}>
            <div className="grid py-24 gap-y-10">
              <h1 className="font-semibold text-4xl">Masuk</h1>
              <div>
                <label
                  htmlFor=""
                  className="mx-10 text-md bg-white absolute px-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border w-full px-2 h-12 my-4 rounded-lg text-xl outline-none border-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="mx-10 text-md bg-white absolute px-3"
                >
                  Password
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border w-full px-2 h-12 my-4 rounded-lg text-xl outline-none border-gray-500"
                />
              </div>
              <div>
                <button
                  className="w-full h-12 bg-[#7E96BD] text-white text-xl rounded-xl"
                  type="submit"
                  disabled={loading}
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
