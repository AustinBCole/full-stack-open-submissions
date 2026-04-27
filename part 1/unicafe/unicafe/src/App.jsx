import { useState } from 'react'

const StatisticsLine = ({text, value}) => {
  return (
    <>
    <p>{text} {value}</p>
    </>
  )
}

const NoStatsitics = () => {
  return (
    <>
    <StatisticsLine text='No feedback given'/>
    </>
  )
}

// const SomeStatistics = ({good, neutral, bad, all, average, positive}) => {
//   return (
//     <>
//     <h1>statistics</h1>
//     <StatisticsLine text='good' value={good}/>
//     <StatisticsLine text='neutral' value={neutral}/>
//     <StatisticsLine text='bad' value={bad}/>
//     <StatisticsLine text='all' value={all}/>
//     <StatisticsLine text='average' value={average}/>
//     <StatisticsLine text='positive' value={positive}/>
//     </>
//   )
// }

const StatisitcsTableRow = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const StatisticsTable = ({good, neutral, bad, all, average, positive}) => {
  return (
    <table>
      <StatisitcsTableRow text='good' value={good}/>
      <StatisitcsTableRow text='neutral' value={neutral}/>
      <StatisitcsTableRow text='bad' value={bad}/>
      <StatisitcsTableRow text='all' value={all}/>
      <StatisitcsTableRow text='average' value={average}/>
      <StatisitcsTableRow text='positive' value={positive}/>
    </table>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  let average = (good + (bad * -1)) / all
  let positive = (good / all) * 100

  if (good <= 0 && bad <= 0) {
    average = 0
  } 
  if (good === 0) {
    positive = 0
  }

  positive =+ ' %'

  let statisticsToDisplay
  if (good === 0 && neutral === 0 && bad === 0) {
    statisticsToDisplay = <NoStatsitics />
  } else {
    statisticsToDisplay = <StatisticsTable good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
  }

  return (
    <>
    {statisticsToDisplay}
    </>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      < Statistics good={good} bad={bad} neutral={neutral} />
      {/* <StatisticsTable good={good} neutral={neutral} bad={bad}/> */}
    </div>
  )
}

export default App