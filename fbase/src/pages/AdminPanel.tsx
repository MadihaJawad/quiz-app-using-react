import React, { useEffect, useState } from "react";
import SMButton from "../components/SMButton";

import { useNavigate } from "react-router-dom";
import { fbAdd } from "../config/firebase/firebase-methods";




export default function AdminPanel() {
    const navigate = useNavigate();
    const [quizList, setQuizList] = useState<any>([]);
    const [disable, setDisable] = useState(false);
    const [optionList, setoptionList] = useState<any>([]);
    const [correctOption, setCorrectOption] = useState<any>();
    const [option, setOption] = useState<any>("");
    const [questionModel, setQuestionModel] = useState<any>({});
    const [question, setQuestion] = useState<any>([]);
    const [quizModel, setquizModel] = useState<any>({
        quizName: "",
        quizDurationInMin: "",
        secretkey: "",
        quizOpen: "",
        description: "",
        questions: [],
    });



    const fillQuizModel = (key: string, val: any) => {
        quizModel[key] = val;
        setquizModel({ ...quizModel });
    };
    const fillQuestionModel = (key: string, val: any) => {
        questionModel[key] = val;
        setQuestionModel({ ...questionModel });

    };





    const addOption = () => {
        optionList.push(option);
        setoptionList([...optionList]);
        setOption("");
    };
    // const logOut = () => {
    //     fblogout().then(() => {
    //         navigate("/sign-in");
    //     });
    // };



    const AddQuiz = () => {
        quizModel.questions = [...question]
        console.log(quizModel)
        setDisable(false)
        fbAdd("quiz", quizModel)
            .then((res: any) => {
                console.log(res);
                setquizModel({
                    ...quizModel,
                    quizModel: "",
                    quizName: "",
                    quizDurationInmin: "",
                    secreteKey: "",
                    quizOpen: "",
                    description: "",
                    questions: [],

                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const addQuestion = () => {
        questionModel.option = [...optionList];
        questionModel.correctOption = correctOption;
        console.log(questionModel);
        question.push(questionModel);
        setQuestion([...question]);
        setQuestionModel({});
        setCorrectOption("");
        setoptionList([]);
        setOption("")
    };


    return (
        <>
            <div className="p-0 m-0 row">
                <div className="col-md-2 h-screen  bg-dark">
                    <div className="p-2">
                        <div className="p-2">
                            {/* <img className="rounded-circle" width={150} src={images.jpg}  alt="" /> */}
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="HTML"
                                disabled={true} />
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="CSS"
                                disabled={true} />
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="JS Quiz 1"
                                disabled={true} />
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="p-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="JS Quiz 2"
                                disabled={true} />
                        </div>
                    </div>
                    <div className="col-md-10 h-screen">
                        <div className="d-flex justify-content-between align-items-center p-2">
                            <button
                                // onClick={logOut}
                                className="btn btn-danger">Logout</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-10 h-screen">
                    <div className="d-flex justify-content-between align-items-center p-2">
                        <h3  style={{color: "white"}}> Quiz App</h3>
                        <button onClick={AddQuiz} className="btn btn-danger">Save Quiz</button>
                    </div>
                    <div className="p-2">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Quiz Name"
                                        value={quizModel.quizName || ""}
                                        onChange={(e: any) => fillQuizModel("quizName", e.target.value)}
                                        disabled={disable} />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Quiz duration in min"
                                        value={quizModel.quizDurationInmin || ""}
                                        onChange={(e: any) =>
                                            fillQuizModel("quizDurationInmin", e.target.value)}
                                        disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="secret-key"
                                        value={quizModel.secretKey || ""}
                                        onChange={(e: any) =>
                                            fillQuizModel("secretKey", e.target.value)}
                                        disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Quiz Open"

                                        value={quizModel.quizOpen || ""}
                                        onChange={(e: any) => fillQuizModel("quizOpen", e.target.value)}

                                        disabled={disable}
                                    />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        value={quizModel.description || ""}
                                        onChange={(e: any) =>
                                            fillQuizModel("description", e.target.value)
                                        }

                                        disabled={disable}

                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-2">
                                    <button onClick={() => setDisable(true)} className="btn btn-secondary"> Lock Quiz</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        className="form-control text-left"
                                        placeholder="Question"
                                        value={questionModel.question || ""}
                                        onChange={(e: any) =>
                                            fillQuestionModel("question", e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="p-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Option"
                                        value={option}
                                        onChange={(e: any) => {
                                            setOption(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="p-2">
                                    <button onClick={addOption} className="btn btn-secondary w-10"> + Option</button>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="p-2 ">
                                    {optionList.map((x: any, i: any) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setCorrectOption(x);
                                            }}
                                            className="btn btn-secondary w-100 my-2"
                                        >{x}</button>
                                    ))}
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="p-2">
                                {correctOption && <button className="btn btn-secondary" >{correctOption}</button>}
                                </div>
                            </div>
                            <div className="row m-0 p-0">
                                <div className="col-md-4">
                                <button
                                    className="btn btn-secondary ms-2"
                                    onClick={addQuestion}
                                    >save question</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
