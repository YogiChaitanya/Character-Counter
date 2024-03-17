import './index.css'

const CounterValues = props => {
  const {countOfChar, charactersInput} = props

  return (
    <li className="list-card">
      <p className="value">
        {charactersInput} : {countOfChar}
      </p>
    </li>
  )
}

export default CounterValues
