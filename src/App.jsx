import { useState } from "react"
import "./App.css"

const cards = [
  {
    question: "If a plant develops yellow spots in the middle of leaves, what could cause it?",
    answer: "Overwatering or fungal infection.",
    color: "#F7E27D"
  },
  {
    question: "What process do plants use to convert sunlight into energy?",
    answer: "Photosynthesis.",
    color: "#BDE5A8"
  },
  {
    question: "Which part of the plant absorbs water and nutrients?",
    answer: "Roots.",
    color: "#A8D8EA"
  },
  {
    question: "What gas do plants absorb from the air?",
    answer: "Carbon dioxide.",
    color: "#F5B7B1"
  },
  {
    question: "Which plant structure makes seeds?",
    answer: "Flowers.",
    color: "#D7BDE2"
  },
  {
    question: "Why do plant leaves turn yellow?",
    answer: "Often due to nutrient deficiency or too much water.",
    color: "#FAD7A0"
  },
  {
    question: "What nutrient helps plants grow strong stems?",
    answer: "Nitrogen.",
    color: "#AED6F1"
  },
  {
    question: "What is the waxy coating on leaves called?",
    answer: "The cuticle.",
    color: "#ABEBC6"
  },
  {
    question: "What part of a plant transports water upward?",
    answer: "Xylem.",
    color: "#F9E79F"
  },
  {
    question: "What pigment makes plants green?",
    answer: "Chlorophyll.",
    color: "#82E0AA"
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