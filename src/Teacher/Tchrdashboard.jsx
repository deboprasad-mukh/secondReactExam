import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchTeacher} from '../redux/Redux'

export default function Tchrdashboard(props) {
    const {teachname} = props
    const state=useSelector((state)=>state)
    const {teacher}=state.teacher
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchTeacher())
    },[])
    console.log(teacher)
    
    return (
        <div className="container">
            <center><h1>{teachname} Welcome to Teacher Portal</h1></center>
            
        </div>
    )
}
