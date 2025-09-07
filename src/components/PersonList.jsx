import React from 'react'
import RoundProgress from '../ui/RoundProgress'
import PersonCard from './PersonCard'

const PersonList = ({ trending }) => {
    console.log(trending);
    return(
        <div className='flex flex-row overflow-x-auto p-4 gap-3 bg-gray-300'>
            {trending.map(person => {
                return(
                    <PersonCard key={person.id} person={person} />
                )
            })}
        </div>
    )
}

export default PersonList

/*


<div className='w-64 flex-shrink-0 bg-white shadow-lg flex flex-col '>
                <div className=''>
                    <img className='w-full object-cover h-80' src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={`The Movive ${item.name} Album Pic`} />
                </div>
                <div className='h-30 flex justify-between p-3 items-center'>
                    <div className='overflow-hidden w-40'>
                        <div className='text-lg font-semibold overflow-hidden'><strong>{item.original_name}</strong></div>
                        <div className='text-sm text-gray-500'>{item.name}</div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='text-[10px]'>Popularity</div>
                        <RoundProgress value={(item.popularity / 10) * 100}/>
                    </div>
                </div>
            </div>


            */