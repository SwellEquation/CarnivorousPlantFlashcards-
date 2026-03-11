import { useState } from "react"
import "./App.css"

const cards = [
  {
    question: "What nutritious chemical do carnivorous plants get from their prey?",
    answer: "Nitrogen",
    color: "#F7E27D"
  },
  {
    question: "What is a carnivorous plants main source of energy?",
    answer: "Photosynthesis",
    color: "#BDE5A8"
  },
  {
    question: "What do temperate carnivorous plants such as American Pitchers and Flytraps do during the winter months?",
    answer: "They go into Winter dormancy",
    color: "#F7E27D"
  },
  {
    question: "What is the purpose of the lid that is on American pitcher plants and Nepenthes pitchers?",
    answer: "To keep rainwater out",
    color: "#F5B7B1"
  },
  {
    question: "What do Flytrap seeds look like?",
    answer: "Black teardrops",
    color: "#BDE5A8"
  },
  {
    question: "Do Nepenthes pitchers produce their own carnivorous fluid?",
    answer: "Yes, each pitcher on a healthy plant is 1/4 filled with fluid",
    color: "#BDE5A8"
  },
  {
    question: "Why did plants evolve to be carnivorous?",
    answer: "To make up for the lack of nutrients in their soil",
    color: "#F5B7B1"
  },
  {
    question: "Where does a Flytrap store all of its energy?",
    answer: "The rhizome",
    color: "#F7E27D"
  },
  {
    question: "Do all carnivorous pitcher plants produce their own fluid?",
    answer: "No, some species such as the Sarracenia Purpurea or Heliamphora get almost all of their fluid from rainfall",
    color: "#F7E27D"
  },
  {
    question: "What carnivorous plant ancestor did the Venus Flytrap evolve from?",
    answer: "The sundew",
    color: "#F5B7B1"
  }
]

function Flashcard({ card, flipped, onClick, index, total }) {
  return (
    <div
      className="flashcard"
      style={{ backgroundColor: card.color }}
      onClick={onClick}
    >
      <div className="card-number">
        {index + 1} / {total}
      </div>

      <div className="card-text">
        {flipped ? card.answer : card.question}
      </div>
    </div>
  )
}

function App() {

  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const nextCard = () => {
    setIndex((index + 1) % cards.length)
    setFlipped(false)
  }

  const prevCard = () => {
    setIndex((index - 1 + cards.length) % cards.length)
    setFlipped(false)
  }

  const flipCard = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="app">
      <div className="title">
        <h1>Carnivorous Plant Supremacy!</h1>
        <h3>How much do you know about carnivorous plants? Test your knowledge here!</h3>
        <p>Number of cards: {cards.length}</p>
      </div>
      <Flashcard
        card={cards[index]}
        flipped={flipped}
        onClick={flipCard}
        index={index}
        total={cards.length}
      />
      <div className="arrow-container">
        <button className="arrow" onClick={prevCard}>←</button>
        <button className="arrow" onClick={nextCard}>→</button>
      </div>
    </div>
  )
}

export default App