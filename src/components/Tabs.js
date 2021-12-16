import React from 'react'
import styles from '../styles/Tabs.module.css'

const Tabs = ({ slct, setSlct, toDoList, setToDoList }) => {

    const slctHandler = (e) => {
        const selected = e.target.innerText.toLowerCase();
        if (selected === "clear completed") {
            clearCompleted();
        }
        else if (selected === "active" || selected === "completed") {
            setSlct(selected);
        }
        else {
            setSlct("all");
        }
    };

    const clearCompleted = () => {
        setToDoList(toDoList.filter((el) => el.completed === false));
        setSlct('all');
    }

    return (
        <div>
            <ul className={styles['tabs-container']} onClick={slctHandler}>
                <div className={styles.tabs}>
                    <li className={`${styles.tab} ${styles[`${slct === "all" ? "clicked-tab" : ""}`]}`}>All</li>
                    <li className={`${styles.tab} ${styles[`${slct === "active" ? "clicked-tab" : ""}`]}`}>
                        Active
                    </li>
                    <li className={`${styles.tab} ${styles[`${slct === "completed" ? "clicked-tab" : ""}`]}`}>
                        Completed
                    </li>
                </div>
                <i className={styles.clear}>Clear Completed</i>
            </ul>
        </div>
    )
}

export default Tabs
