"use client"
import React from 'react'
import { Input } from '../ui/input'
import { Query } from '../Home/HomeTypes';

function TagForm({query, setQuery}:{query:Query, setQuery:Function}) {
    const [value, setValue] = React.useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery({...query, tags: [...query.tags, value]});
        setValue('');
    }
    const handleCancel = (index: number) => {
        const newTags = query.tags.filter((_:string, i:number) => i !== index);
        setQuery({...query, tags: newTags});
    }
  return (
    <div className='border flex bg-white rounded-md'>
        <div className='flex items-center gap-2'>
            {query.tags.map((tag:string, index:number) => (
                <div key={index} className='flex items-center justify-center ml-2 h-fit bg-[#FF9501] text-white rounded-md px-2'>
                    <span className='whitespace-nowrap flex w-fit'>{tag}</span>
                    <span className='ml-2 cursor-pointer' onClick={()=>handleCancel(index)}>x</span>
                </div>
            ))}
        </div>
        <form className='w-full' onSubmit={handleSubmit}>
            <Input type="text" className='w-full border-none' value={value} placeholder="Keyword" onChange={handleChange} />
        </form>
    </div>
  )
}

export default TagForm