import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticlesViews from "../ArticlesView/ArticlesView";
import NotesViews from "../NotesView/NotesView";
import TwittersViews from "../TwittersView/TwittersView";
import './index.css'
import danAbramovImage from '../../assets/images/danabramov.jpg';
import ryanFlorenceImage from '../../assets/images/ryanflorence.jpg';
import michaelJacksonImage from '../../assets/images/michaeljackson.jpg';
import kentCDoddsImage from '../../assets/images/kentcdodds.jpg';

const initialStateItems = [
    {
        image: danAbramovImage,
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: ryanFlorenceImage,
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: michaelJacksonImage,
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: kentCDoddsImage,
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },

]

class Root extends React.Component {

    state = {
        items: [...initialStateItems],
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        };

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }))
        e.target.reset();
    }

    render() {
        return (
            <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<TwittersViews />} />
                        <Route path="/articles" element={<ArticlesViews />} />
                        <Route path="/notes" element={<NotesViews />} />
                    </Routes>
            </BrowserRouter>
        )
    }
};

export default Root;