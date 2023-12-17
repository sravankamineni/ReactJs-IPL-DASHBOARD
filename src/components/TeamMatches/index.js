import './index.css'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchList: [],
    recentMatchesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const teamBanner = data.team_banner_url
    const latestMatch = data.latest_match_details
    const recentMatch = data.recent_matches

    const updateLatestMatchDetails = {
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      date: latestMatch.date,
      firstInnings: latestMatch.first_innings,
      id: latestMatch.id,
      manOfTheMatch: latestMatch.man_of_the_match,
      matchStatus: latestMatch.match_status,
      result: latestMatch.result,
      secondInnings: latestMatch.second_innings,
      umpires: latestMatch.umpires,
      venue: latestMatch.venue,
    }

    const updatedRecentMatches = recentMatch.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      id: eachMatch.id,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      teamBannerUrl: teamBanner,
      latestMatchList: updateLatestMatchDetails,
      recentMatchesList: updatedRecentMatches,
      isLoading: false,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'DC':
        return 'dc'
      case 'SRH':
        return 'srh'
      default:
        return ''
    }
  }

  render() {
    const {teamBannerUrl, isLoading, latestMatchList, recentMatchesList} =
      this.state

    const bgColor = this.getRouteClassName()

    return (
      <div className={`bg-container ${bgColor}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="res-container">
            <img
              className="team-banner"
              src={teamBannerUrl}
              alt="team banner"
            />
            <h1 className="mathes-head">Latest Matches</h1>
            <LatestMatch
              key={latestMatchList.id}
              latestMatchDetails={latestMatchList}
            />

            <ul className="recent-matches-list">
              {recentMatchesList.map(eachRecentMatch => (
                <MatchCard
                  key={eachRecentMatch.id}
                  recentMatchDetails={eachRecentMatch}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
