import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData'
import { useContext, useEffect, useState } from 'react'

const Quiz = () =>{

    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoice] = useState('')
    const {score, setScore} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice !== ''){
            if(selectChoice === QuestionsData[current].answer){
                console.log("ตอบถูกและได้คะแนน");
                setScore(score+1)
            } else {
                console.log("ตอบผิด");
            }
        }
    }

    return(
        <div className='quiz'>
            <h1>{QuestionsData[current].question}</h1>
            <div className='choices'>
                <button onClick={()=>setSelectChoice('A')}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice('B')}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice('C')}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice('D')}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz