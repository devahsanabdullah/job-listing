import React,{useEffect} from 'react'
import { cardData } from '../../constant/Constant'

export default function Card({addData,stateData,setDeepFilter,deepfilter,setAgainFilter,againfilter}) {
  
  // Filtering Object which have specific tags added onClick in stateData
  useEffect(() => {
    
    // code to get objects have tags in them
    const  filterResult =   cardData.filter((v)=>{
      let a=0
      for (let x of stateData) {
        if (v.tags.includes(x)) a++
      }
      if ((stateData.filter(e=>e)).length===a) return v;
    })
    setDeepFilter(filterResult);
  }, [stateData])

  //Adding Clicked Tag to an Array Named stateData
  const onClickAddTag = (p)=>{
    addData([...stateData,stateData.includes(p)?null:p])    
  }

  return (
    <div className=''>
      {/* Maping on Data in constant.js && Array of Objects having those tags which added onClick in stateData */}
      {(stateData.length===0?cardData:(deepfilter)).map((e,index)=>{
          return(
            <div key={index}>
            <div id={e.id} className={`tagbar w-4/5 flex flex-col lg:flex-row  justify-between items-start lg:items-center bg-[#fff] rounded px-8 py-5 mx-auto my-16 ${e.addOns?'border-l-[5px] border-l-cardborder':null}`}>
              <div className='flex flex-col md:flex-row justify-between md:items-center  w-full md:w-auto'>
                <img src={e.img} alt="" className='mr-4 w-16 md:w-auto translate-y-[-50%] md:translate-y-0'/>
                <div>
                  <div className='flex'>
                    <span className='text-cardborder text-lg font-bold mr-4'>{e.name}</span>
                    {e.addOns?.map((f,index)=>{
                      return(
                        <div key={index} className='animate-pulse'>
                          <span className='bg-cardborder text-[#fff] py-1 px-3 rounded-[14px] uppercase text-sm font-semibold mr-1'>{f.name}</span>
                          <span className='bg-featured text-[#fff] py-1 px-3 rounded-[14px] uppercase text-sm font-semibold '>{f.name2}</span>
                        </div>
                      )
                    })}
                  </div>
                  <p className='my-2 text-xl md:text-2xl font-semibold text-featured hover:text-cardborder'>{e.detail}</p>
                  <div  className='flex text-time text-lg font-medium border-b-2 border-time md:border-b-0'>
                    <span>{e.day}</span>
                    <ul className='inline-flex marker:text-sky-400 list-disc pl-5 space-x-5'>
                      <li className=''>{e.time}</li>
                      <li className=''>{e.location}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap md:flex-nowrap  '>
                {e.tags.map((i,index)=>{
                  return(
                    <div key={index} className='mt-5' onClick={()=> onClickAddTag(i)} >
                     <span className='bg-tag  text-cardborder p-[4px] md:p-3 rounded-sm align-middle text-xs md:text-lg font-bold hover:text-[#fff] hover:bg-cardborder cursor-pointer mr-2'>{i}</span>
                    </div>
                  )
                })} 
              </div>
          </div>
          </div>
          
          )
        })}
        </div>
      
  )
}
