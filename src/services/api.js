export async function fetchCourses() {
  const response = await fetch(
    "https://667f8471f2cb59c38dc91606.mockapi.io/api/v1/courses"
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return (await response.json()).reverse()
}

export async function fetchCourseById(courseId) {
  const response = await fetch(
    `https://667f8471f2cb59c38dc91606.mockapi.io/api/v1/courses/${courseId}`
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}

export async function createCourse(course) {
  const response = await fetch(
    "https://667f8471f2cb59c38dc91606.mockapi.io/api/v1/courses",
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
    `https://667f8471f2cb59c38dc91606.mockapi.io/api/v1/courses/${courseId}`,
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
    `https://667f8471f2cb59c38dc91606.mockapi.io/api/v1/courses/${courseId}`,
    {
      method: "DELETE",
    }
  )
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  return await response.json()
}