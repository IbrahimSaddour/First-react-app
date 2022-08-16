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
                        <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card2.svg"} title={"1er bootcamp en France"} parag={"4500 alumni formés depuis 2012"} />
                    </li>
                    <li>
                        <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card8.svg"} title={"Enseignées par des professionnels"} parag={"qui partagent plus qu'une passion !"} />
                    </li>
                    <li>
                        <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card4.svg"} title={"Certifiées et reconnues"} parag={"par l'état, le secteur et les entreprises"} />
                    </li>
                    <li>
                        <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card6.svg"} title={"Testez nos cours gratuitement"} parag={"depuis chez vous et dès maintenant !"} />
                    </li>
                    <li>
                        <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card5.svg"} title={"Osez la reconversion professionnelle"} parag={"car l'ambition est le seul pré-requis"} />
                    </li>
                    <li>
                        <Card img={"https://3wa.fr/wp-content/uploads/2020/03/card9.svg"} title={"Spécialisez vous davantage"} parag={"avec des programmes pour tous niveaux"} />
                    </li>
                </ul>
            </div>
        </div>
    )
}
