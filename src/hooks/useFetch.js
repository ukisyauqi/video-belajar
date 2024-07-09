import { useState, useEffect } from "react"

const useFetch = (fetchFunction) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [reFetchState, setReFetchState] = useState(true)
  // lakukan fetch ulang jika reFetchState berubah
  const reFetch = () => {
    setReFetchState(!reFetchState)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await fetchFunction()
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [fetchFunction, reFetchState])

  return { data, loading, error, reFetch }
}

export default useFetch
