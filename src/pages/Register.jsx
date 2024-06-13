import Navbar from "../components/Navbar";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#fffdf3] flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center flex-1">
        {/* Login Form */}
        <div className="w-[38rem] flex flex-col justify-center bg-white border p-9 gap-9 mx-4 my-6">
          <div>
            <h1 className="font-semibold text-4xl text-center mb-2">
              Pendaftaran Akun
            </h1>
            <p className="text-gray-500 text-center">
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </div>

          <form className="mt-4 space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="block w-full rounded-md border shadow-sm px-3 py-3 text-gray-900 "
                />
              </div>
            </div>
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
                  className="block w-full rounded-md border shadow-sm px-3 py-3 text-gray-900 "
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">
                No. Hp <span className="text-red-500">*</span>
              </label>
              <div className="mt-1 flex gap-4">
                <select
                  name="phone-prefix"
                  id="phone-prefix"
                  className="block w-32 rounded-md border shadow-sm px-3 py-3 text-gray-900 "
                >
                  <option value="+62">+62</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+65">+65</option>
                  <option value="+46">+46</option>
                  <option value="+81">+81</option>
                  <option value="+82">+82</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border shadow-sm px-3 py-3 text-gray-900 "
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
                  className="block w-full rounded-md border shadow-sm px-3 py-3 text-gray-900 "
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block  text-gray-700">
                Konfirmasi Kata Sandi <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border shadow-sm px-3 py-3 text-gray-900 "
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
              Daftar
            </button>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 rounded-md shadow-sm font-medium text-primary bg-primary-100 hover:bg-primary-100/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Masuk
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
              <img src="/icon-google.png" alt="icon-google" />
              <span>Masuk dengan Google</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
