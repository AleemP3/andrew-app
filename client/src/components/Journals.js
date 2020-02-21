import React, { useState, useEffect } from 'react';
import axios from "axios";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Link, withRouter } from "react-router-dom"; 
import "../css/journals.css";

const Journals = (props) => {

const [journals, setJournals] = useState([])

useEffect( () => {
  axios.get("/api/journals")
  .then(res => {
    setJournals(res.data) 
  })
},[])

//view journals 

const renderJournals = () => {
  return journals.map(journal => (
    <div className="journal-card-container">
      <h1>{journal.title}</h1>
      <p>{journal.description}</p>
      <p>{journal.body}</p>
    </div>
  ))
}


//add journal function 

//edit journal function 

//delete journal function 

const deleteJournal = (id) => {
  let newJournals = journals.filter(journal => {
    if (journal.id !== id) {
      return journal
    }
  })
  setJournals(newJournals)
}

  const renderViews = () => {
    const { auth: { user, handleLogout, }, location, } = props;
    if (user) {
      return(
      <>
        <Link to="/journals/new"><button>add</button></Link>
        <div>
          {renderJournals()}
        </div>
      </>
      )
    } else {
      return(
        <div className="render-journals-container">
          {renderJournals()}
        </div>
      )
    }
  }

  return(
    renderViews() 
  )
}

export class ConnectedJournals extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Journals { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}
export default withRouter(ConnectedJournals);