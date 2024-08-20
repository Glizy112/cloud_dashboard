import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import AddButton from './components/AddButton'
import { MoreVertOutlined, RefreshOutlined } from '@mui/icons-material'
import DateSelect from './components/DateSelect'
import data from './data.json';
import WidgetCard from './components/WidgetCard'
import ActionModal from './components/ActionModal'

function App() {
  const [count, setCount] = useState(0)
  const [addWidget, setAddWidget] = useState(data.categories)
  const [widgetId, setWidgetId] = useState(6);
  const [open, setOpen] = useState(false);

  const handleAddNew =(id)=> {
    const newWidget = {
      id: widgetId + 1,
      name: 'Custom Widget',
      text: 'New Custom Widget Text',
    };
    setWidgetId(prev=> prev+1);
    setAddWidget((prevArr)=> 
      prevArr.map(item=> 
        item.id===id ? {...item, widgets: item.widgets.concat(newWidget)} 
        : item
      )
    );
  }
  
  const handleRemove =(widgetId, itemId)=> {
    console.log("Widget id to remove-> ", widgetId, itemId);
    setAddWidget((prevArr)=> 
      prevArr.map(item=> 
        item.id===itemId ? {...item, widgets: item.widgets.filter(w=> w.id!==widgetId)} 
        : item
      )
    );
  }

  const handleOpen =()=> {
    setOpen(true);
  }

  const handleClose =()=> {
    setOpen(false);
  }

  return (
      <div className='w-[100%] h-[100%] items-center bg-slate-50'>
        <Navbar/>
        {/* Dashboard Heading Section Starts */}
        <div className='m-8 flex flex-row justify-between items-center'>
          <h1 className='text-2xl font-bold' onClick={()=> console.log(addWidget)}> CNAPP Dashboard </h1>
          <div className='flex flex-row items-center'>
            <AddButton handleClick={handleOpen}/>
            <ActionModal isOpen={open} onClose={handleClose} data={addWidget}/>
            <button className='p-1 ml-4 mr-2 rounded-md bg-white border border-gray-300 items-center'>
              <RefreshOutlined className='text-gray-500'/>
            </button>
            <button className='p-1 mx-2 rounded-md bg-white border border-gray-300 items-center'>
              <MoreVertOutlined className='text-gray-500'/>
            </button>
            <button className='p-1 mx-2 rounded-md bg-white border border-black items-center'>
              <DateSelect/>
            </button>
          </div>
        </div>
        {/* Dashboard Heading Section Ends */}
        {/* Categories Section Starts */}
        <div className='m-8 pb-4 px-2'>
          {
            addWidget.map(item=> (
              <div className='mb-8'>
                <h1 className='text-lg font-bold'> {item.title} </h1>
                <div key={item.id} className='grid grid-cols-3 gap-4'>
                  {
                    item.widgets.map(widget=> (
                      <WidgetCard item={widget} handleDelete={()=> handleRemove(widget.id, item.id)}/>
                    ))
                  }
                  <WidgetCard 
                    addItem={true} 
                    idx={item.id} 
                    handleClick={()=> handleAddNew(item.id)}
                  />
                </div>
              </div>
            ))
          }
        </div>
        {/* Categories Section Ends */}
      </div>
  )
}

export default App
