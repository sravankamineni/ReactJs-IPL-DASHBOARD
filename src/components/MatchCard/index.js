// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props

  const {competingTeam, competingTeamLogo, matchStatus, result} =
    recentMatchDetails

  const matchStatusClassName = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="recent-matches-card">
      <img
        className="recent-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="recent-team">{competingTeam}</p>
      <p className="recent-result">{result}</p>
      <p className={`result ${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
