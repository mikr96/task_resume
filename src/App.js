import Header from './components/Header/Header'
import styled from 'styled-components'
import soloImage from './assets/irsyad.png'
import { SocialIcon } from 'react-social-icons';
import './index.css';

const BoxContext = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 100%;
  box-shadow: 0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%);
  background: white;
  overflow-y: scroll;
  overflow-x: hidden;
  `

function App() {

  const items = ["EXPERIENCE", "EDUCATION", "PORTFOLIO", "SKILLS"]

  return (
    <div className="m-20">
      <BoxContext>
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <img className="image" src={soloImage} alt="Irsyad"/>
          </div>
          <div className="col-md-7 col-sm-12">
            <div className="mt-5 mobile">
              <h1>IRSYAD KAMIL</h1>
              <h4>POSTGRADUATE STUDENT</h4>
              <p>I am currently pursuing a Master’s degree in Software Engineering at
              Universiti Teknologi Malaysia. I am a person with great enthusiasm and a
              motivated team player. I believe an opportunity to work with you would
              highly influence and enhance my career skills. Lastly, I believe I can be of
              great value to your team.</p>
              <div>
                <SocialIcon url="https://twitter.com/MIKR96" className="mr-5 mt-2" bgColor="#2c2c2c" style={{ height: 30, width: 30 }}/>
                <SocialIcon url="https://facebook.com/MIKR5045" className="mr-5 mt-2" bgColor="#2c2c2c" style={{ height: 30, width: 30 }}/>
                <SocialIcon url="https://github.com/mikr96" className="mr-5 mt-2" bgColor="#2c2c2c" style={{ height: 30, width: 30 }}/>
              </div>
            </div>
          </div>
        </div>
        <Header subs={items} />
      </BoxContext>
    </div>
  );
}

export default App;
