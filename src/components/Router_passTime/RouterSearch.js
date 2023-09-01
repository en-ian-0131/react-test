import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function RouterSearch() {
  const [keyWord, setKeyWord] = useState('')
  const [secondKeyWord, setsecondKeyWord] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${keyWord}/${secondKeyWord}`)
    // console.log('keyWord:', keyWord)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="search">RouterSearch</div>
        <input
          type="text"
          className="searchInput"
          value={keyWord}
          onChange={(e) => {
            setKeyWord(e.target.value)
          }}
        />
        <input
          type="text"
          className="searchInput"
          value={secondKeyWord}
          onChange={(e) => {
            setsecondKeyWord(e.target.value)
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <Outlet />
    </>
  )
}

export default RouterSearch
