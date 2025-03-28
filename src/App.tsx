import './App.css'
import Main from './layout/Main/Main'
import AppRoutes from './routes/AppRoutes'

function App() {

  
  return (
    <>
      <body className='flex flex-col h-screen w-screen justify-start items-start'>
        <Main>
          <AppRoutes />
        </Main>
      </body>
    </>
  )
}

export default App
