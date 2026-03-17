import { useEffect, useState } from 'react'
import '../style/components/Rankings.css'

function Rankings() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch(
          '/api/v4/competitions/PL/teams',
          {
            headers: {
              'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY
            }
          })

        if (!res.ok) throw new Error('Failed to fetch teams')

        const data = await res.json()
        setTeams(data.teams)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className="rankings">
      {teams.map(team => (
        <div key={team.id} className="team-row">
          <img src={team.crest} alt={team.name} width={40} />
          <span>{team.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Rankings