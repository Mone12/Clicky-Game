import React, {Component}from 'react';
import Nav from "./components/nav";
import Header from "./components/header";

import Container from "./components/container";
import Column from "./components/column";
import Row from "./components/row";
import FriendCard from "./components/friendcard/";
import Footer from "./components/footer";
import friends from "./friends.json"
import './App.css';


// Random shuffle
function randomFriends(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set this.state
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "You guessed correctly!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ correctIncorrect: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "You guessed incorrectly!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledFriends = randomFriends(friends);
    this.setState({ friends: shuffledFriends });
  };

  render() {
  return (
  <>
    <Nav 
   title="Clicky Game"
    score={this.state.currentScore}
    topScore={this.state.topScore}
    correctIncorrect={this.state.correctIncorrect}
    />
    <Header />

   <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container> 



    
    <Footer />
</>
    );
  }
}


export default App;
