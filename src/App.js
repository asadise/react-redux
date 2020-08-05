import React, { Component } from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro';


import './App.css'
import environment from './Environment'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <QueryRenderer
              environment={environment}
              query={graphql`
                    query AppQuery {
                      countries {
                        name
                        native
                        phone
                        capital
                        currency
                        emoji
                        languages{  
                          name
                        }
                        states{
                          name
                        }
                      }
                    }
                    `}
              variables={{
                pageId: '1'
              }}
              render={({ error, props }) => {
                if (error)
                  return <div>Error!</div>

                if (!props)
                  return <div style={{ textAlign: "center" }}>Loading...</div>

                return <div>
                  {props.countries.map((c, i) =>
                    <div>
                      <h3>{i}.{c.name}<sup>[{c.emoji}]</sup> {(c.name === c.native) ? '' : '(' + c.native + ')'}</h3>
                      <ul>
                        <li><b>capital:</b> {c.capital}</li>
                        <li><b>phone:</b> +{c.phone}</li>
                        <li><b>languages:</b> {c.languages.map((l) => <span>{l.name}, </span>)}</li>
                      </ul>
                      <hr />
                    </div>)}
                </div>
              }}
            />
          </p>
        </header>
      </div>
    )
  }
}

export default App;