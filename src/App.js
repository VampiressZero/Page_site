import logo from './logo.svg';
import './App.css';
import React, { useState,useForm, useEffect,useRef } from 'react';

function App(props) {
    const [data, setData] = useState(props.data)
    const [dataEdit, setDataEdit] = useState(null)
    const [edit, setEdit] = useState(false);
    const [index, setIndex] = useState(null);
    // const { editForm, handleSubmit} = useForm();

    function Page() { //Стандартная страница
        return (
            <div>
                <h1>Страницы сайта</h1>
                <div className="page">
                        {data.map(function (item, i) { return (<Section key={i} data={item} index={i} />) })}
                </div>
            </div>
        )
    }
    function EditPage() {//Страница редактирования
        function handleChangeLink(event){
            setDataEdit({...dataEdit,["link"]: event.target.value})
        }
        const [name, setName] = useState(dataEdit.section); 
        const [link, setLink] = useState(dataEdit.link); 
        return (
            <div>
                <h1>Редактирование страницы</h1>
                <div className="blockEdit">
                    <span>Название</span>
                    <input defaultValue={name} onChange={event => {setName(event.target.value)}} type="text" name="name" />
                    <span>Ссылка</span>
                    <input defaultValue={link} onChange={event => {setLink(event.target.value)}} type="text" name="link"/>
                    <span className="spanText">Текст</span>
                    <textarea name="text" id=""></textarea>
                </div>
                <button onClick={() => saveEditSection(name, link)}>Сохранить</button>
            </div>
        )
    }       
    function editSection(dat, ind) { 
        setDataEdit(dat)
        setIndex(ind);
        setEdit(!edit);
    }
    function saveEditSection(name, link){ //Сохраняем изменения
        //Здесь нужно отправить изменения в БД
        let newState = dataEdit;
        newState["section"] = name;
        newState["link"] = link;
        setData(newState);
        newState = [...data];
        newState[index] = dataEdit;
        setData(newState);
        setEdit(!edit);
        setIndex(null);
        setDataEdit(null);
    }
    function Section(props) { //Вывод блока с заглавием
        let chapter;
        if (props.data.chapter !== null) {
            chapter = <div className="content">{props.data.chapter.map(function (item, i) { return (<Chapter key={i} data={item} sectionLink={props.data.link} />) })}</div>;
        }
        return (
            <div className="block">
                <div className="nameSection"><button onClick={() => editSection(props.data, props.index)}>{props.data.section}</button></div>
                {chapter}
            </div>
        );
    }
    function Chapter(props) { //Вывод элементов блока
        return (<div className="chapter"><a href={props.sectionLink + props.data.link}>{props.data.name}</a></div>)
    }
    return ( 
        !edit ? <Page data={props.data}/> : <EditPage />        

    )
}
export default App;
