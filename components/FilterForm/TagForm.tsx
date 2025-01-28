"use client"
import React from 'react'
import { Input } from '../ui/input'

function TagForm() {
    const [tags, setTags] = React.useState<string[]>([]);
    const [value, setValue] = React.useState<string>('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTags([...tags, value]);
        setValue('');
    }
    const handleCancel = (index: number) => {
        const newTags = tags.filter((_, i) => i !== index);
        setTags(newTags);
    }
  return (
    <div className='border flex gap-2 px-2 bg-white rounded-md'>
        <div className='flex items-center gap-2'>
            {tags.map((tag, index) => (
                <div key={index} className='border flex items-center justify-center h-fit bg-[#FF9501] text-white rounded-md px-2'>
                    {tag}
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