import React from 'react';
import ReactMarkdown from 'react-markdown';

const Clauderecipe = (props) => {
  return (
    <>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </>
  )
}

export default Clauderecipe