import React from 'react'
import { RoomConsumer,RoomContext } from '../Context'
import { useContext } from 'react'
import { Loading } from './Loading'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'



export const RoomsContainer = () => {
    return (
        <RoomConsumer>
            {
                (value) => {
                    const { loading, sortedRooms, rooms } = value;
                    if (loading) {
                        return <Loading />
                    }
                    return <div>
                        <RoomsFilter rooms={rooms} />
                        <RoomsList rooms={sortedRooms} />
                    </div>
                }
            }
        </RoomConsumer> 

    )
}
