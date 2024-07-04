export const Loading = () => {
  return (
    <div className="flex space-x-2 justify-center items-center h-[50vh]">
      <div className="size-3 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="size-3 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="size-3 bg-gray-400 rounded-full animate-bounce"></div>
    </div>
  )
}
