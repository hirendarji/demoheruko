import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Demo = ()=>
{
    const [add,setadd]=useState(    );
    const [Array,setArray]=useState([]);
    function change(event)
    {
        console.log(event.target.value);
        setadd(event.target.value);
       // console.log(add)
       
        
        
    }
    
    function submitdata(event)
    {
        console.log(add)
        setArray((pdata)=>
        {
       
            return [...pdata,add]
        });
         console.log(Array)
        event.preventDefault();
        
    };

    var remove=()=>
    {
        console.log("remove call")
    }
    

    return (
        <div style={{backgroundColor:"pink"}}>
            <h3>its demo par</h3>
            <form onSubmit={submitdata}>
                <input type='text'  name="items" defaultValue="" placeholder="addd data" onChange={change}/>
                <button type="submit">add data</button>

                <ol>
                    {
                        Array.map((i)=>
                        {
                        return <div>
                            <button onClick={remove}> cancle</button>
                            <li>{add}</li>
                            <br/>
                            <AccountCircleIcon/>
                            
                        </div>
                        })
                    }
                </ol>
            </form>
        </div>

    )
}
export default Demo;