// Homework 1.1 and 1.2
const Header = (props) => {
  return (
      <div>
        <h1>{props.course}</h1>
      </div>
  )
}

const Content = (props) => {
  return (
      <div>
        {/* # 1.1 */}
        {/* <p>"{props.part1}" part includes {props.exercises1} exercises.</p>
        <p>"{props.part2}" part includes {props.exercises2} exercises.</p>
        <p>"{props.part3}" part includes {props.exercises3} exercises.</p> */}
        
        {/* # 1.2 */}
        <p>"{props.part}" part includes {props.exercises} exercises.</p>
      </div>
  )
}

const Total = (props) => {
  return (
      <div>
        <p>Total number of exercises is {props.exercises}.</p>
      </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>

      {/* # 1.1 */}
      {/* <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} 
               part3={part3} exercises3={exercises3} /> */}

      {/* # 1.2 */}
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} /> 

      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App;

