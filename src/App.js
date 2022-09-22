// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';


function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <Posts></Posts>
      <div>
        <h1>Here is My Blog!!</h1>
        <article className='blog'>
          <h2 style={titleStyle}>Title: Walk in the Dark</h2>
          <p style={{ backgroundColor: 'aqua', padding: '10px', margin: '20px', borderRadius: '10px' }}> Walk in the Dark is a one of its kind awareness initiative to creating awareness about the importance of eye care and the role played by Optometrists in eradiating preventableâ€™ blindness. The Walk involves walking blindfoldedâ€™ while being guided by a visually challenged local students. Local dignitaries and people from all walks of life join the walk to create awareness.</p>
        </article>
      </div>

      <Blog heading="First Heading" author="Author1"></Blog>
      <Blog heading="Second Heading" author="Author2"></Blog>
      <Blog heading="Third Heading" author="Author3"></Blog>
    </div>
  );
}

const titleStyle = {
  color: 'white',
  backgroundColor: 'crimson',
  padding: '10px',
  marginLeft: '80px',
  marginRight: '80px'
}

function Blog(props) {
  return (
    <div style={{ backgroundColor: 'gray', padding: '20px', margin: '20px', borderRadius: '10px' }}>
      <h2>Heading: {props.heading} </h2>
      <p>Author: {props.author}</p>
    </div>
  )
}


function Mobile() {
  const [charge, setCharge] = useState(100);
  const decreaseCharge = () => {
    const newCharge = charge - 10;
    setCharge(newCharge);
    if (charge <= 0) {
      setCharge(0);
      alert("Battery is Death");
    }
  }
  return (
    <div>
      <h2>Charge: {charge}</h2>
      <button onClick={decreaseCharge} style={{ color: 'white', backgroundColor: 'crimson', padding: '10px', borderRadius: '10px', fontSize: '20px' }}>Battery Down</button>
    </div>
  )
}

export default App;
