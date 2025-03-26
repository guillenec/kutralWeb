
type Props = {
  children: React.ReactNode
}

const Main = ({ children }:Props) => {
  return (
    <main className="w-full h-full bg-gray-900 flex flex-col justify-center items-center">
      principal no cambia
    {children}
    </main>
  )
}

export default Main