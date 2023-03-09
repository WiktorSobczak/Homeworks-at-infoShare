import {  DisplayQuestionsAndAnswers } from "./DispalyQuestionsAndAnswers.jsx"
import styles from "./DisplayContent.module.css";
import {Data} from "./Data/Data"


export function DisplayContent() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>FAQ</h1>
			<div>
				{Data.map(content => (
					<DisplayQuestionsAndAnswers
						key={content.question}
						question={content.question}
						answer={content.answer}
					/>
				))}
			</div>
		</div>
	);
}
