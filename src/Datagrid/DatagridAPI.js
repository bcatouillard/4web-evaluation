import React from "react";

export default class DatagridAPI extends React.Component {
   state = {
     loading: true,
     items: null,
   }
  
    async componentDidMount() {
      const url = "https://my.api.mockaroo.com/4web-evaluation.json?key=d8a971b0";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ items: data, loading: false });
    }

    render(){
      const items = this.state.items
      return(
        items
      );
    }
}