import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/jumbotron";
import Wrapper from "./components/Wrapper";
import Card from './components/Card';
import Images from './images.json';
import Footer from "./components/Footer";
import './App.css';


class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    Images,
    Clicked: [],
    banner: "",
    style: "navbar-text title"
}

componentDidMount() {
    this.setState({ banner: "Click an image to begin!" });
}


handleIncrement = ({target:{id}}) => {

    if (this.state.Clicked.includes(id)) {
        this.setState({ currentScore: 0 });
        this.setState({ Clicked: [] });
        this.handleIncorrect();
    }
    else {

        this.setState({ currentScore: this.state.currentScore + 1 });
        this.setState({ value: true })
        this.handleHighScore();
        this.handleRandom();
        this.handleState(id);
        this.handleCorrect();
    }

};

handleHighScore = () => {
    if (this.state.highScore <= this.state.currentScore && this.state.highScore < 12) {
        this.setState({ highScore: this.state.highScore + 1 })
    }

}

handleRandom = () => {
    let image = this.state.Images;
    for (let i = image.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = image[i]
        image[i] = image[j]
        image[j] = temp
    }
    this.setState({ Images: image })
}

handleState = (id) => {
    let newArray = this.state.Clicked;
    newArray.push(id);
    this.setState({ Clicked: newArray })
}

handleCorrect = () => {
    this.setState({ banner: "You guessed correctly!" })
    this.setState({ style: "navbar-text correct" })
}

handleIncorrect = () => {
    this.setState({ banner: "You guessed incorrectly!" })
    this.setState({ style: "navbar-text incorrect" })
}



render() {
    const images = Images.map((image) =>
        <Card key={image.id.toString()}
              image={image.image}
              id={image.id}
              handleIncrement={this.handleIncrement}
            
        />
    )
  
  return (
    <div>
      <span className = "text-center">
      <Nav style={this.state.style} current={this.state.currentScore} high={this.state.highScore} banner={this.state.banner} />
      <Jumbotron />
      </span>
      <Wrapper>
        {images}
      </Wrapper>
      <Footer />
    </div>
  );
 }
}
export default App;
