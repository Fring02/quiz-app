import { useParams, Link } from "react-router-dom";
import questions_file from './../questions.json';

export default function QuizPage(props) {
    const params = useParams();
    const quizId = params['id'];
    props.onSetSearchBarVisible(false);

    const quiz = questions_file[quizId];

    return (
        <div className=" card row container-fluid mt-5 text-white mx-auto">
            <div className="card-header"> <h3>{quiz['name']}</h3>
                <div className="card-body">
                    <h5 className="card-title">This quiz contains:</h5>
                    <p className="card-text">{quiz['questions'].length} questions.</p>
                    <Link to={"/"} className="btn btn-warning me-2"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg></Link>
                    <Link to={"/" + quizId} className="btn btn-success ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="23" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                        </svg></Link>
                    <br /><br />
                    <div>Quiz instructions:</div>
                    <div>For multiple choice questions, click the radio icon next to an answer choice to select that answer choice.</div>
                    <div>For fill-in-the-blank questions, type your answer in the "answer" input box.</div>
                    <div>Once all questions have been answered, you will be able to submit your quiz using the Submit button at the bottom of the quiz page.</div>
                </div>
            </div>
        </div>

    );
}