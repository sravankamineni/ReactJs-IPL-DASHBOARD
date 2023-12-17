// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="match-details-card">
      <div className="top-cont">
        <div className="top-text-cont">
          <p className="opp-team">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="text-para">{venue}</p>
          <p className="text-para">{result}</p>
        </div>
        <img
          className="opp-team-logo-sm"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <img
        className="opp-team-logo-lg"
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
      />

      <hr className="sep" />

      <div className="bottom-cont">
        <p className="bottom-head">First Innings</p>
        <p className="bottom-para">{firstInnings}</p>
        <p className="bottom-head">Second Innings</p>
        <p className="bottom-para">{secondInnings}</p>
        <p className="bottom-head">Man of the Match</p>
        <p className="bottom-para">{manOfTheMatch}</p>
        <p className="bottom-head">Umpires</p>
        <p className="bottom-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
