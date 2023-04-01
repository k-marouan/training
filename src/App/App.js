import React, { Fragment, useState } from "react";
import styles from "./App.module.css"
import CardList from "../components/CardList/CardList";
import Filter from "../components/Filter/Filter";
import Modal from "../components/Modal/Modal";
import Button from "../components/Layout/Button";
import AddUser from "../components/AddUser/AddUser";

const App = () => {
    const [familyNamesSate, familyNamesSetSate] = useState([
        {
            id: 1,
            name: "MAROUAN",
            age: 33,
            address: "Agadir",
            phone: "0312365479",
            type: "family",
        },
        {
            id: 2,
            name: "YOSRA",
            age: 8,
            address: "BENI MELLLAL",
            phone: "012378999",
            type: "family",
        },
        {
            id: 3,
            name: "BASMA",
            age: 4,
            address: "RABAT",
            phone: "0126557479",
            type: "family",
        },
        {
            id: 4,
            name: "AHMED",
            age: 4,
            address: "RABAT",
            phone: "0126557479",
            type: "friend",
        },
        {
            id: 5,
            name: "SAMI",
            age: 4,
            address: "RABAT",
            phone: "0126557479",
            type: "friend",
        },
    ]);

    const [filter, setFilter] = useState("");

    const [showCard, setShowCard] = useState(true);

    const [showModal, setShowModal] = useState(false);

    const deleteHandler = (clickedID) => {
        // const deleteOperation = familyNamesSate.filter((elt) => (elt.id !== clickedID));
        // familyNamesSetSate(deleteOperation);
        familyNamesSetSate((prevValOfState) => { 
            console.log("prev : ", prevValOfState);
            return prevValOfState.filter((elt) => (elt.id !== clickedID))
        });
        console.log("value of familyNamesSate inside : ", familyNamesSate);
    };

    console.log("value of familyNamesSate outside : ", familyNamesSate);

    const showCardHandler = () => {
        return setShowCard(!showCard);
        
    }

    const filterNames = (name) => {
        setFilter(name);
    }

    const namesHandler = () => {
        if(filter.length !== 0) {
            return familyNamesSate.filter((elt) => elt.name.includes(filter));
        }
        return familyNamesSate;
    }

    const showModalHandler = () => {
        return setShowModal(true);
    }

    const closeModalHandler = () => {
        return setShowModal(false);
    }

    return (
        <Fragment>
            <div className={ styles.mainContainer }>
            <h1>Family</h1>
            <Button onClick={ showCardHandler }>
                { showCard ? "show Card" : "hide Card" }
            </Button>
            <Button  onClick={ showModalHandler }>
               New Record
            </Button>
            <div className={ showCard ? styles.show : styles.hide }>
                <Filter filtration={ filterNames } />
                <CardList namesList={ namesHandler() } deleteElemnt={ deleteHandler } />
            </div>
            </div>
            <Modal show={ showModal } close={ closeModalHandler }>
                <AddUser />
            </Modal>
        </Fragment>
    );
};

export default App;