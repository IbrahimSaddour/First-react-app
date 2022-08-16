import React from 'react'
import "../styles/home.css"
import Card from './card'

// import card1 from "../assets/imgs/card1.svg"
// import card2 from "../assets/imgs/card2.svg"
// import card3 from "../assets/imgs/card3.svg"
// import card4 from "../assets/imgs/card4.svg"
// import card5 from "../assets/imgs/card5.svg"
// import card6 from "../assets/imgs/card6.svg"

export default function Home() {
    return (
        <div className='information_section'>
            <div className='inforamation_titles'>
                <p>Devenir développeur web et réaliser ses projets professionnels</p>
                <h1>Des formations diplômantes faites par des experts plus que passionnés<br />pour vous mener au succès professionnel.</h1>
            </div>
            <div className='cards_container'>
                <ul className='cards_list'>
                    <li>
                        <Card></Card>
                    </li>
                    <li>
                        <Card></Card>
                    </li>
                    <li>
                        <Card></Card>
                    </li>
                    <li>
                        <Card></Card>
                    </li>
                    <li>
                        <Card></Card>
                    </li>
                    <li>
                        <Card></Card>
                    </li>
                </ul>
            </div>
        </div>
    )
}
