import {Component} from 'react'
import {Link} from 'react-router-dom'
// import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import LatestMatch from '../LatestMatch'

// import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  //   state = {
  //     teamsData: [],
  //   }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    console.log(data)
  }

  render() {
    return (
      <Link to="/team-matches">
        <div className="blog-list-container">
          {/* <img src={teamImageUrl} alt={name} className="team-img" />
          <h1>{name}</h1> */}
          <h1>hello</h1>
        </div>
      </Link>
    )
  }
}

export default TeamMatches
