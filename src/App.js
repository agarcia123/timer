import './App.css';
import React, {Component} from 'react';






class App extends Component {

  //const d = new Date();
  //let time = d.getTime();

  state = {
    minutes: 1,
    seconds: 0
  }

  timer() {
          this.pija = setInterval(() => {
              const { seconds, minutes } = this.state

              if (seconds > 0) {
                  this.setState( ({ seconds }) => ({
                      seconds: seconds - 1
                  })
                )
              }
              if (seconds === 0) {
                  if (minutes === 0) {
                      clearInterval(this.pija)
                  } else {
                      this.setState(({ minutes }) => ({
                          minutes: minutes - 1,
                          seconds: 59
                      }))
                  }
              }
          }, 1000)
      }

      reset() {
          clearInterval()
          this.setState( () => (
            {
              minutes: 0,
              seconds: 0
            }
          )
        )
      }

      add(){
            let min = this.state.minutes
            this.setState( () => (
          {
            minutes: min +1
          }
        ))
      }
      substract(){
            let min = this.state.minutes
            if (min > 1){
            this.setState( () => (
             {
               minutes: min -1
             })
            )
        }
      }


  render () {
     const { minutes, seconds } = this.state



    return (
      <div className="App">

          <div>

            <button onClick={() => this.reset() } >reset</button>
            <button onClick={() => this.timer()} >start</button>
            <button onClick={() => this.add()} >+</button>
            <button onClick={() => this.substract()} >-</button>
            <button onClick={() =>clearInterval(this.pija) }>stop</button>
          </div>

          <div>
          <h1>Time Remaining: { minutes }:{ seconds < 10 ? `0${ seconds }` : seconds }</h1>
        </div>
    </div>
  );
 }
}

export default App;
