import { useState } from 'react'
import './App.css'

function App() {
  const [userId, setUserId] = useState('')
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUser = async () => {
    if (!userId.trim()) {
      setError('Please enter a user ID')
      return
    }

    setLoading(true)
    setError(null)
    setUserData(null)

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      )
      
      if (!response.ok) {
        throw new Error(`User not found (Status: ${response.status})`)
      }
      
      const data = await response.json()
      setUserData(data)
    } catch (err) {
      setError(err.message || 'Failed to fetch user')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchUser()
    }
  }

  return (
    <div className="app-container">
      <h1>User Fetcher</h1>
      
      <div className="input-group">
        <input
          type="number"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value)
            setError(null)
          }}
          onKeyPress={handleKeyPress}
          placeholder="Enter user ID (1-10)"
          disabled={loading}
        />
        <button onClick={fetchUser} disabled={loading}>
          {loading ? 'Fetching...' : 'Fetch User'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <strong>Error:</strong> {error}
        </div>
      )}

      {loading && (
        <div className="loading-message">
          Loading user data...
        </div>
      )}

      {userData && !loading && (
        <div className="user-data">
          <h2>User: {userData.name}</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App
