export default function Modal({ children }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">
      <div className="w-[500px] bg-white rounded-xl p-10">{children}</div>
    </div>
  )
}
