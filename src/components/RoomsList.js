import React from 'react'
import { Room } from './Room'

const RoomsList = ({rooms}) => {
    if(rooms.length===0){
       return  <div className="empty-search">
            <h3>
                unfortunately no rooms matched your search paramaters
            </h3>
        </div>
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map((room)=>{
                        return <Room key={room.id} room={room}/>
                    })
                }
            </div>
        </section>
    )
}

export default RoomsList
