import { useParams } from 'react-router-dom'

function RouterKeyword() {
  const { key, sec } = useParams()
  return (
    <>
      <div className="KeyWord">
        RouterKeyWord Page
        <div>first KeyWord : {key}</div>
        <div>second KeyWord : {sec}</div>
      </div>
    </>
  )
}

export default RouterKeyword
