import {Component} from 'react'
import {Link} from 'react-router-dom'
// import Loader from 'react-loader-spinner'

// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

// import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  //   state = {
  //     teamsData: [],
  //   }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {newData} = this.props

    const {params} = newData

    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/ipl/KKR`)

    const data = await response.json()

    console.log(data)
    // const updatedCardDetails= data.map((item=>{

    // }))
  }

  render() {
    return (
      <Link to="/team-matches">
        <div className="blog-list-container">
          <img src=" aa" alt="name" className="team-img" />
          <h1>name</h1>
          <h1>hello</h1>
        </div>
      </Link>
    )
  }
}

export default TeamMatches
