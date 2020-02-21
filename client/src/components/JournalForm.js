import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"; 
import "../css/journalForm.css";

const JournalForm = (props) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleBodyChange = (e) => {
    setBody(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post("/api/journals", {title, description, body})
    .then(res => {
      props.history.push("/journals")
    })
  }


  return(
    <>
    <div className="journal-form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" value={title} onChange={handleTitleChange} className="input"/>
        <br />
        <textarea name="description" placeholder="description" value={description} onChange={handleDescriptionChange} className="textarea"/>
        <br />
        <textarea name="body" placeholder="body" value={body} onChange={handleBodyChange} className="textarea"/> 
        <br />
        <button type="submit" value="Submit">Save</button>
      </form>
    </div>
    </>
  );
};

export default JournalForm; 