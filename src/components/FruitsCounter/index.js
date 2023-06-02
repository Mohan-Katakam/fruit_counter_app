// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  onEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="bg-layer">
          <h1 className="heading">
            Bob ate <span className="span">{mangoesCount}</span> mangoes{' '}
            <span className="span">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="set-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button type="button" className="btn" onClick={this.onEatMango}>
                Eat Mango
              </button>
            </div>
            <div className="set-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button type="button" className="btn" onClick={this.onEatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
