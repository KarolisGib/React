import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('http://localhost:8080/mapping/get/employee/all')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (

                <div className="App">

                        <div style={{ textAlign: "center" }}>
                            <form>
                                <input type={"file"} accept={".csv"} />
                                <div class="upload" >
                                <button>Upload</button>
                                </div>
                            </form>
                        </div>

                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>

                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}
                    </table>

                </div>
            );
        }
    }
}

export default App;
