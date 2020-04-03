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
      return(
        <tbody>
          {this.state.loading || !this.state.items ? (
            <tr><td>Loading...</td></tr>
          ) : (
            this.state.items.map((item) => (
              <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.ip_address}</td>
              </tr>
            ))
          )}
        </tbody>
      ) 
  }
}
