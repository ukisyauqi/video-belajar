import Navbar from "../components/Navbar";
import iconGoogle from "../assets/icon-google.png"

export default function Login() {
  return (
    <div className="min-h-screen bg-[#fffdf3] flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center flex-1">
        {/* Login Form */}
        <div className="w-[38rem] flex flex-col justify-center bg-white border p-9 gap-9 m-4">
          <div>
            <h1 className="font-semibold text-4xl text-center mb-2">
              Masuk ke Akun
            </h1>
            <p className="text-gray-500 text-center">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>

          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                E-Mail <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border shadow-sm px-3 py-3 text-gray-900"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block  text-gray-700">
                Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border shadow-sm px-3 py-3 text-gray-900"
                />
              </div>
            </div>

            <div className="text-right text-gray-700">
              <a href="#" className=" hover:text-indigo-500">
                Lupa Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm font-medium text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Masuk
            </button>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm font-medium text-primary bg-primary-100 hover:bg-primary-100/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Daftar
            </button>

            <div className="flex items-center gap-2">
              <div className="flex-1 border"></div>
              <p>atau</p>
              <div className="flex-1 border"></div>
            </div>
            <button
              type="submit"
              className="items-center gap-2 w-full flex justify-center py-3 px-4 border rounded-md shadow-sm font-medium bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <img src={iconGoogle} alt="icon-google" />
              <span>Masuk dengan Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
