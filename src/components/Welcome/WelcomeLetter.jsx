import WelcomeLetter from './WelcomeLetter.css';

const Welcome = ({onClick}) => {
  return (
    <div className="body" onClick={onClick}>
    <h1 className='h1'>
  <span>Welcome</span>
  <div class="message">
    <div class="word1">Live</div>
    <div class="word2">Travel</div>
    <div class="word3">Resfeber</div>
  </div>
</h1>
</div>
  );
}

export default Welcome;