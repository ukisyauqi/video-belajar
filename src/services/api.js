const apiUrl = import.meta.env.VITE_API_URL;

export async function fetchCourses() {
  const response = await fetch(
    apiUrl
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return (await response.json()).reverse()
}

export async function fetchCourseById(courseId) {
  const response = await fetch(
    `${apiUrl}/${courseId}`
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}

export async function createCourse(course) {
  const response = await fetch(
    apiUrl,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    }
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}

export async function editCourse(courseId, course) {
  const response = await fetch(
    `${apiUrl}/${courseId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    }
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}

export async function deleteCourse(courseId) {
  const response = await fetch(
    `${apiUrl}/${courseId}`,
    {
      method: "DELETE",
    }
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}