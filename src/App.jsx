import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="bg-gray-100 min-h-screen font-sans">
        <header className="bg-white shadow py-6 px-4">
          <h1 className="text-2xl font-bold text-indigo-600">Lufias.dev</h1>
        </header>

        <main className="text-center py-20">
          <h2 className="text-4xl font-bold mb-4">Selamat datang ke <span className="text-indigo-600">lufias.dev</span> 🚀</h2>
          <p className="text-gray-600 mb-6">Ini laman rasmi saya sebagai developer, trader dan pembina projek digital.</p>
          <a href="#projek" className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">Lihat Projek</a>
        </main>

        <footer className="bg-gray-800 text-white text-center py-6 mt-10">
          <p>&copy; 2025 Lufiasfarza. Dibina guna Tailwind CSS ❤️</p>
        </footer>
      </div>
    </>
  );
}

export default App;
