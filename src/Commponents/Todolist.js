import React, { useState } from 'react';
import Card from './Card';

const Todolist = (props) => {
    const { title, name, age, gender } = props;
    const [tryuse, setTryuser] = useState({});
    const dataUsers = [{ title: 'Wabi-sabi', name: 'dres', age: 24, gender: 'female' }, { title: 'Hakuundai', name: 'jun', age: 25, gender: 'male' }, { title: 'Hakuundai', name: 'nel', age: 24, gender: 'male' },];
    // console.log(dataUser, 'user');
    const save = (index) => {
        const user = [...dataUsers];
        const n = user[index].name;
        const a = user[index].age;
        const g = user[index].gender;
        setTryuser({ name: n, age: a, gender: g });
    }
    const [card, setCard] = useState({ arrival_time: 0, barst_time: 0, waiting_time: 0 });
    const [fcfs, setFcfs] = useState([]);
    const [jobtestorder, setJobtestorder] = useState([]);
    const [roundrobin, setRoundrobin] = useState([]);
    const [arrayCard, setArrayCard] = useState([]);
    const [wTime, setWTime] = useState({});

    const [selectButton, setSelectButton] = useState('');


    const [averageTurnArround, setAverageTurnAround] = useState(0);

    const handleChange = (event) => {
        const val = event.target.value;
        setCard({ ...card, [event.target.name]: val });

        // console.log('value is:', [event.target.name]);
    };
    const handleAddCard = (e) => {
        // const fcfs = [...card];
        const data = { ...card };
        // const p = data.barst_time;
        // const r = data.waiting_time;
        //console.log(p, r, 'arrayCard')
        setArrayCard([...arrayCard, { ...card }])
        // console.log(card, 'arrayCard')
    }
    let total = 0;
    arrayCard.map((val, i) => {
        if (i) {
            total = 1;
        }
    })
    const handleFirstComeFirstServe = () => {
        setSelectButton('first_come_first_serve');
        const getburst = [...arrayCard];
        const getburstArray = [];
        let burstTime = [];
        let arrivalTime = [];
        let objArrivalTimeValue = [];
        let objBurstTime = [];
        let obj2WaitingTime = [];


        getburst.map((val, i) => {
            burstTime[i] = Number(val.barst_time);
            arrivalTime[i] = Number(val.arrival_time)
            //getburstArray.push(Number(val.barst_time));
        });
        console.log(burstTime, 'burst');
        const wt = [0];

        for (let i = 0; i < burstTime.length; i++) {
            wt[i] = 0;
            for (let j = 0; j < i; j++) {
                wt[i] += burstTime[j] ;
            }
        }


        //   console.log(wt,'wt');
        //   for (let i = 0; i < wt.length; i++) {
        //     // console.log({'name': wt[i]})
        //     
        //   }
        arrivalTime.forEach(function (arrivalTimeValue) {
            objArrivalTimeValue.push({ 'arrival_time': arrivalTimeValue });
        })
        burstTime.forEach(function (burstTimeValue) {
            objBurstTime.push({ 'burst_time': burstTimeValue });
        })
        wt.forEach(function (waitingTimeValue) {
            console.log(waitingTimeValue)
            obj2WaitingTime.push({ 'waiting_time': waitingTimeValue });
        });

        let arr3 = objArrivalTimeValue.map((item, i) => Object.assign({}, item, objBurstTime[i], obj2WaitingTime[i]));
        let total_tat = 0;
        let total_tat_index = 0;
        for (let i = 0; i < arr3.length; i++) {
            const addOne = i + 1;
            total_tat_index = addOne;
            total_tat += arr3[i].waiting_time + arr3[i].burst_time;

        }
        setAverageTurnAround(total_tat / total_tat_index);
        setFcfs(arr3);

        console.log(arr3, 'arr3');
        

    }
    console.log(selectButton,'button');
    let totalWait = 0;

    fcfs.map((val, i) => {
        if (i) {
            totalWait = 1;
        }
    });

    const handleRoundRobin = () => {
        setSelectButton('round_robin');
        const getburst = [...arrayCard];
        let burstTime = [];
        let arrivalTime = [];
        let objArrivalTimeValue = [];
        let objBurstTime = [];
        let obj2WaitingTime = [];
        let objTurnArroundvalue = [];

        getburst.map((val, i) => {
            burstTime[i] = Number(val.barst_time);
            arrivalTime[i] = Number(val.arrival_time)
        });
        const wt = [];

        for (let i = 0; i < burstTime.length; i++) {
            wt.push(burstTime[i]);
        }
        arrivalTime.forEach(function (arrivalTimeValue) {
            objArrivalTimeValue.push({ 'arrival_time': arrivalTimeValue });
        })
        burstTime.forEach(function (burstTimeValue) {
            objBurstTime.push({ 'burst_time': burstTimeValue });
        })

        console.log(wt,'wtt');
        const trt_value = [0];

        for (let i = 0; i < burstTime.length; i++) {
            trt_value[i] = burstTime[i];
            for (let j = 0; j < i; j++) {
                trt_value[i] -= burstTime[j] ;
            }
        }
        trt_value.forEach(function (turnArroundValue) {
            objTurnArroundvalue.push({ 'turn_arround_time': turnArroundValue });
        })
        const waiting_value = [0];
        for (let i = 0; i < trt_value.length; i++) {
            waiting_value[i] = trt_value[i];
            for (let j = 0; j < burstTime[i]; j++) {
                waiting_value[i] -= trt_value[i] - burstTime[j] ;
            }
        }
        waiting_value.forEach(function (waitingTimeValue) {
            console.log(waitingTimeValue)
            obj2WaitingTime.push({ 'waiting_time': waitingTimeValue });
        });
        // let arr3 = objArrivalTimeValue.map((item, i) => Object.assign({}, item, objBurstTime[i], objArrivalTimeValue[i],objTurnArroundvalue[i]));

        // setRoundrobin();
        // console.log(waiting_value,'wtt');
       
    }
    const handleShortestJobFirst = () => {
        setSelectButton('shirtest_job_first');
        const getburst = [...arrayCard];
        let burstTime = [];
        let arrivalTime = [];
        let objArrivalTimeValue = [];
        let objBurstTime = [];
        let obj2WaitingTime = [];
        let objTurnArroundvalue = [];
        getburst.map((val, i) => {
            burstTime[i] = Number(val.barst_time);
            arrivalTime[i] = Number(val.arrival_time)
        });
        const wt = [];

        for (let i = 0; i < burstTime.length; i++) {
            wt.push(burstTime[i]);
        }
        // wt.sort((a, b) => (a.qty > b.qty) ? 1 : -1)
        console.log(wt,'wtt');
        const sort = wt.sort()
        const trt_value = [0];

        for (let i = 0; i < burstTime.length; i++) {
            trt_value[i] = burstTime[i];
            for (let j = 0; j < i; j++) {
                trt_value[i] += burstTime[j] ;
            }
        }
      
        arrivalTime.forEach(function (arrivalTimeValue) {
            objArrivalTimeValue.push({ 'arrival_time': arrivalTimeValue });
        })
        burstTime.forEach(function (burstTimeValue) {
            objBurstTime.push({ 'burst_time': burstTimeValue });
        })
        wt.forEach(function (waitingTimeValue) {
            console.log(waitingTimeValue)
            obj2WaitingTime.push({ 'waiting_time': waitingTimeValue });
        });
        trt_value.forEach(function (turnArroundValue) {
            objTurnArroundvalue.push({ 'turn_arround_time': turnArroundValue });
        })
        let arr3 = objArrivalTimeValue.map((item, i) => Object.assign({}, item, objBurstTime[i], obj2WaitingTime[i],objTurnArroundvalue[i]));

        setJobtestorder(arr3);
    }
    // console.log(jobtestorder, 'sort')


    
    // console.log(wTime, 'addCard')
    return (
        <>
            <div className='b-1-red'>
                <label> Arrival Time</label>
                <input
                    type="number"
                    id="arrival_time"
                    name="arrival_time"
                    onChange={handleChange}
                    value={card.arrival_time}
                    autoComplete="off"
                />
                <label> Burst Time</label>
                <input
                    type="number"
                    id="barst_time"
                    name="barst_time"
                    onChange={handleChange}
                    value={card.barst_time}
                    autoComplete="off"
                />


                <button onClick={handleAddCard}><h4>Add Card</h4></button>

                {/* <button onClick={handleFirstComeFirstServe}><h4>First Come First Serve</h4></button>
                <button onClick={handleRoundRobin}><h4>Round Robin</h4></button>
                <button onClick={handleShortestJobFirst}><h4>Shortest Job First</h4></button> */}

                { //Check if message failed
                    (total > 0)
                        ? <><button onClick={handleFirstComeFirstServe}><h4>First Come First Serve</h4></button>
                            <button onClick={handleRoundRobin}><h4>Round Robin</h4></button>
                            <button onClick={handleShortestJobFirst}><h4>Shortest Job First</h4></button></>
                        : ''
                }
            </div>
            {/* <div className='' style={{ width: "100%", display: "flex", flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {dataUsers.map((val, index) => (
                    <Card key={index} title={val.title} name={val.name} age={val.age} gender={val.gender} onClick={() => { save(index) }} />
                ))}
            </div> */}
            <div className='' style={{ width: "100%", display: "flex", flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                <table className='b-1-red' style={{ width: "100%" }}>
                    <tr>
                        <th>Processes</th>
                        <th>Arrival Time</th>
                        <th>Burst Time</th>
                        <th>Waiting Time</th>
                        <th>Turn Arround Time</th>
                    </tr>

                    {
                        (selectButton === 'shirtest_job_first') 
                        ?
                        jobtestorder.map((val, index) => (
                            <tr key={index} style={{ textAlign: "center" }}>
                                <td >P{index + 1}</td>
                                <td>{val.arrival_time}</td>
                                <td>{val.burst_time}</td>
                                <td>{val.waiting_time}</td>
                                <td>{val.turn_arround_time}</td>

                            </tr>
                        ))
                        : ''
                    }
                    {
                        (selectButton === 'first_come_first_serve') 
                        ?
                        fcfs.map((val, index) => (
                            <tr key={index} style={{ textAlign: "center" }}>
                                <td >P{index + 1}</td>
                                <td>{val.arrival_time}</td>
                                <td>{val.burst_time}</td>
                                <td>{val.waiting_time}</td>
                                <td>{val.waiting_time} + {val.burst_time} = {val.waiting_time + val.burst_time}</td>

                            </tr>
                        ))
                        : ''
                    }
                    {
                        (selectButton === '') 
                        ?
                        arrayCard.map((val, index) => (
                            <tr key={index} style={{ textAlign: "center" }}>
                                <td >P{index + 1}</td>
                                <td>{val.arrival_time}</td>
                                <td>{val.burst_time}</td>
                                <td>{val.waiting_time}</td>
                                <td>0</td>

                            </tr>
                        ))
                        : ''
                    }
                </table>
                {/* <div style={{ width: "100%", display: "flex", flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    {fcfs.map((val, index) => (
                        <>

                            <div key={index} style={{ width: '10%', display: "flex", flexWrap: 'wrap', }} >
                                <div style={{ width: "100%", height: "15px", border: '1px solid red' }}>
                                    P{index + 1}
                                </div>
                                <p>{val.waiting_time}</p>

                            </div><br />

                        </>

                    ))}

                </div>
                <h4>Average turn-around time = {averageTurnArround}</h4> */}
            </div>

        </>
    );
}
export default Todolist;