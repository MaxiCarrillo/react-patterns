import { useState } from 'react'
import './App.css'
import { LikeButton } from './shared/components/like-button'

function App() {
  const [likes, setLikes] = useState(0)
  const handleLike = () => {
    setLikes(likes + 2)
  }

  return (
    <>
      <h4>Controlled</h4>
      <LikeButton
        value={likes}
        setValue={handleLike}
      />
      <hr />
      <LikeButton />
      <h4>Uncontrolled</h4>
    </>
  )
}

export default App
