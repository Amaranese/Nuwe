import { useEffect, useState } from "react"
import { Wrapper } from "../styled-components/Wrapper"
import arrowDown from "../../assets/img/arrow-down.png"


const Table = ({headers, list}) => {
    const [changeList, setChangeList] = useState([...list])
    const [order, setOrder] = useState({index: -1, value: -1})

    useEffect(() => {
        console.log(list);
        const compareList = (l1, l2) => {  
            if(l1[Object.keys(l1)[order.index]] > l2[Object.keys(l2)[order.index]]) return 1
            if(l1[Object.keys(l1)[order.index]] < l2[Object.keys(l2)[order.index]]) return -1
            return 0
        }
        if(order.index === -1) setChangeList([...list])
        else{
            switch(order.value){
                case 0: setChangeList([...list].sort((l1,l2) => compareList(l1,l2))); break;
                case 1: setChangeList([...list].sort((l1,l2) => compareList(l2,l1))); break;
                default:setChangeList([...list]); break;
            }
        }
    }, [order, list])

    useEffect(()=>{}, [changeList])

    const handleHeaderClick = (i) => {
        if(i === order.index) setOrder({...order, value: order.value === 1 ?-1 : (order.value + 1)})
        else setOrder({index: i, value: 0})
    }
    

    return(
        <Wrapper c w = "50vw" h = "50vh"> {/*Table*/}
            <Wrapper>
                {headers?.map((c,i) => {
                    return (
                        <Wrapper 
                        w = {c.width} 
                        key = {i}
                        border = "1px black solid" 
                        justify align
                        bg = "grey"
                        onClick = {() => handleHeaderClick(i)}
                        pointer
                            >{c.value} {order.index === i ? 
                            (order.value !== -1 ? <img width = "10px" src = {arrowDown} alt = "arrowDown" style = {order.value === 1 ? {transform: "rotate(180deg)"} : null}/> : null) : null}
                        </Wrapper> 
                    )})}{/*Titles*/}
            </Wrapper>
            

            {changeList?.map((l, index) => {
                return (
                    <Wrapper key = {index}>
                        {headers?.map((c,i) => { 
                            return (
                                <Wrapper align  justify border = "1px black solid" w={c.width} key = {i}>
                                    {l[Object.keys(l)[i]]}
                                </Wrapper>
                            )})}{/*Row*/}
                    </Wrapper>
                )
            })}{/*List*/}
        </Wrapper>
    )
}

export default Table