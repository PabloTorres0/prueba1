import React,{Fragment}from 'react'

const P1 = () => {


    type formElement= React.FormEvent<HTMLFormElement>
    interface ITask {
        nombreTarea:string,
        done:Boolean
    }

    const [newTask,setNewTask]=React.useState<string>("")
    const [task, setTask]=React.useState<ITask[]>([])

    const handlerOnSubmit=(e: formElement)=>{
        e.preventDefault()
        agregarTarea(newTask)
        console.log(task)
        setNewTask("")
    }

    const agregarTarea=(nombreTarea:string)=>{
        const newTasks: ITask[]= [...task, {nombreTarea,done:false}]
        setTask(newTasks)
    }

  return (
    <Fragment>
        <form onSubmit={handlerOnSubmit}>
            <input type="text"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)
            }
            />   
            <button>Enviando</button>      
        </form>

        {
            task.map((item:ITask,index)=>{
                return (<h1 key={index}>{item.nombreTarea}</h1>)
            })
        }
    </Fragment>
  )

}

export default P1