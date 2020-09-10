import React from "react";

import "./card.css";

export default function Footer(props: any) {
  return (
    <div className='card'>
      <h4 className='text-center'>{props.title}</h4>
      <h3 className='text-center'>{props.body}</h3>
    </div>
  );
}
