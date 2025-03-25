import './App.css'

function App() {


  const navHover = 'hover:text-amber-300 hover:ease-in duration-200'
  
  return (
    <>
      <body className='flex flex-col h-screen w-screen justify-start items-center'>
        <header className='flex justify-between w-full p-4 bg-slate-900 text-white'>
          <nav className='flex'>
            <a href="#" className={`mr-4 ${navHover}`}>Home</a>
            <a href="#" className={`mr-4 ${navHover}`}>About</a>
            <a href="#" className={`mr-4 ${navHover}`}>Contact</a>
          </nav>
        </header>

        <main className='flex w-full h-full flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold'>KutralBeer</h1>
          <input
            className="bg-[#222630] px-4 py-3 outline-none w-[280px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
            name="text"
            placeholder="Enter email or username"
            type="text"
          />

        </main>
      </body>
    </>
  )
}

export default App
