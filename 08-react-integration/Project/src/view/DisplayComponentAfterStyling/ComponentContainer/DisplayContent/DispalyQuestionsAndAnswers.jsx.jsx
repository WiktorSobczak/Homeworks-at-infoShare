import { useState } from "react";
import arrow from "./icon-arrow-down.svg";
import styles from "./DisplayQuestionsAndAnswers.module.css";

export function DisplayQuestionsAndAnswers(props) {
	const [isAnswerVisible, setIsAnswerVisible] = useState(false);

	const { question, answer } = props;
	return (
		<div className={styles.displayAnswer}>
			<p
				className={isAnswerVisible && styles.questionBold}
				onClick={() => {
					setIsAnswerVisible(!isAnswerVisible);
				}}>
				{question} <img
						className={isAnswerVisible ? styles.arrow : styles.arrowInitial}
						src={arrow}
						alt="arrow"
					/></p>
				
					
				
			
			{isAnswerVisible && <p className={styles.answer}>{answer}</p>}
		</div>
	);
}
