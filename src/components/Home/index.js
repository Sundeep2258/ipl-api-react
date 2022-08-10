// import {Link} from 'react-router-dom'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'
// import TeamMatches from '../TeamMatches'

class Home extends Component {
  state = {
    teamsData: [],
  }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')

    const data = await response.json()

    console.log(data)
    const updatedData = data.map(item => ({
      id: item.team.id,
      name: item.team.name,
      teamImageUrl: item.team.team_image_url,
    }))
    console.log(updatedData)
    // this.setState({teamsData: updatedData})
  }

  render() {
    const {teamsData} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="logo"
            className="logo"
          />
          <h1 className="ipl-title">IPL Dashboard</h1>
        </div>
        <div className="menu-section">
          <ul className="ipl-menu">
            <li>
              {teamsData.map(item => (
                <TeamCard teamData={item} key={item.id} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Home
