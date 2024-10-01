import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import "../Table.css"

const TodoData = () => {
    
    const [data,setTododata] = useState([])

    useEffect(()=>{
    const fetchtodo = ()=>{
      fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res)=>res.json())
      .then((tododata)=>setTododata(tododata))
    } 
    fetchtodo();
    },[])

    console.log('data=',data);

    const newArr = [];
  
    data.forEach(element => {
        console.log('element=',element);
        const newid = element.userId;
        console.log('newid=',newid);

        if(!newArr[newid]){
           newArr[newid]={
            id:0,
            task:0,
            completedtask:0,
            pendingtask:0
           }
        }

       const Task = newArr[newid].task+=1;
       console.log('task=',Task);
       newArr[newid].id = newid;
    
        if(element.completed === true){
            const completed = newArr[newid].completedtask+=1
            console.log('completed=',completed);
            
           }else if(element.completed === false){
            const pending = newArr[newid].pendingtask+=1
            console.log('pending=',pending);
            
           }  
    });

    const tempvar = newArr;
    console.log('tempvar=',tempvar);
  return (
    <Container fluid>
        <Row>
            <Col lg={12}>
                <h1 className='todo-head'>~ToDo Project~</h1>
            </Col>
            <Col lg={6} className='mx-auto'>
            <Table responsive className='p-5'>
                <thead>
                    <tr>
                    <th className='th-clr'>userId</th>
                    <th className='th-clr'>Task</th>
                    <th className='th-clr'>CompletedTask</th>
                    <th className='th-clr'>PendingTask</th>
                    </tr>
               </thead>
              {tempvar.map((ele)=>(
                 <tbody>
                        <tr>
                            <td className='tble'>{ele.id}</td>
                            <td className='tble'>{ele.task}</td>
                            <td className='tble'>{ele.completedtask}</td>
                            <td className='tble'>{ele.pendingtask}</td>
                        </tr>
                </tbody>
              ))}
            </Table>   
            </Col>
        </Row>
    </Container>
  )
}

export default TodoData