export async function fetchCoursesAtPage(pageNumber = 1) {
  const url = new URL(
    "https://667f8471f2cb59c38dc91606.mockapi.io/api/v1/courses"
  )
  url.searchParams.append("page", pageNumber)
  url.searchParams.append("limit", 9)

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}
