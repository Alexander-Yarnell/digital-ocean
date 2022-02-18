import React from "react";
import axios from "axios";

import Card from "./Card";

function Fetch(props) {
  const [state, setState] = React.useState(null);
  const url = props.url;

  React.useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  if (state === null) {
    return <div>Loading...</div>;
  }

  if (state != null) {
    console.log(state.data[0].attributes.cover.data[0].attributes.url);
    for (let i = 0; i < state.data.length; i++) {
      return (
        <div>
          {state.data.map(book => {
            return(
            <Card
              key={book.id}
              title={book.attributes.title}
              author={book.attributes.author}
              img={book.attributes.cover.data[0].attributes.url}
              />)
          })}
        </div>
      );
    }
  }
}

export default Fetch;
