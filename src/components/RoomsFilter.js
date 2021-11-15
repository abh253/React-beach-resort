import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../Context'
import Title from './Title'
//get unique value
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}


const RoomsFilter = () => {
    const context = useContext(RoomContext);

    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, rooms } = context;

    //get unique types

    let types = getUnique(rooms, 'type');
    types = ['all', ...types];

    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms, 'capacity');
    people = people.map((person, index) => {
        return <option value={person} key={index}>{person}</option>
    })
    return (
        <section className='filter-container'>
            <Title title='search rooms'></Title>
            <form className='filter-form'>

                {/* select type */}
                <div className='form-group'>
                    <label htmlFor='type' >room type</label>
                    <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                        {types}

                    </select>

                </div>

                {/* end of select type */}
                {/* guest */}
                <div className='form-group'>
                    <label htmlFor='capacity' >guests</label>
                    <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                        {people}

                    </select>

                </div>

                {/* end of guest*/}
                {/* price */}
                <div className='form-group'>
                    <label htmlFor='price' >room price in ${price}</label>
                    <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control'></input>


                </div>

                {/* end of price*/}
                {/*size*/}
                <div className='form-group'>
                    <label htmlFor='size'>room size:</label>
                    <div className='size-inputs'>
                        <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
                        <input type='number' name='maxSize'           value={maxSize} onChange={handleChange} className='size-input' />
                    </div>

                </div>

                {/*end of size */}
                {/* extras */}
                <div className='form-group'>
                    <div className='single-extra'>
                        <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange}/>
                        <label htmlFor='breakfast'>breakfast</label>
                    </div>
                    <div className='single-extra'>
                        <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange}/>
                        <label htmlFor='pets'>pets</label>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default RoomsFilter
