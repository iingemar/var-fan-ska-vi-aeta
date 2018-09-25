import React from 'react';
import InputField from './components/InputField';
import Header from './components/Header';
import Footer from './components/Footer';
import GoogleMap from "./components/GoogleMap";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <InputField/>
                <GoogleMap/>
                <Footer/>
            </div>
        );
    }
}

export default App;