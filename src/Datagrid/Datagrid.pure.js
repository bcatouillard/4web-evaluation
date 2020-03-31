import React from "react";

class DatagridAPI extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://my.api.mockaroo.com/4web-evaluation.json?key=d8a971b0")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render(){
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading…</div>;
      } else {
        return (
            <tbody>
                {items.map((item) => (
                    <tr>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.ip_address}</td>
                    </tr>
                ))}
            </tbody>
        );
      }
    }
}

export default DatagridAPI;