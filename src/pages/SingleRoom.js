import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import defaultBcg from '../images/room-1.jpeg'
import { RoomContext } from '../Context'
import { useParams, useMatch } from 'react-router'
import { useContext } from 'react'
import StyledHero from '../components/StyledHero'

//for creating class based component 'rcc'
const SingleRoom = () => {
    const { id: slug } = useParams();
    const { getRoom } = useContext(RoomContext);
    const room = getRoom(slug);

    if (!room) {
        return <div className="error">
            <h3>
                no such room could be found...
            </h3>
            <Link to='/rooms' className='btn-primary'>back to rooms</Link>
        </div>
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
    const restOfImages=images.slice(1,images.length);
    //const [mainImg,...restofimages]=images; this will give rest of images all images except first image
    return (
        <>
        <StyledHero img={images[0] || defaultBcg}>
            <Banner title={`${name}`}>
                <Link to='/rooms' className='btn-primary'>
                    back to rooms
                </Link>
            </Banner>

        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
            {restOfImages.map((image,index)=>{
                return <img src={image} key={index} alt={name}/>
            })}


            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price:${price}</h6>
                    <h6>size:{size} sq.ft.</h6>
                    <h6>max capacity:
                        {
                            capacity>1?`${capacity} people`:`${capacity} person`
                        }
                    </h6>
                    <h6>
                        {
                            pets?"pets allowed":"no pets allowed"
                        }
                    </h6>
                    <h6>
                        {
                            breakfast &&    'free breakfast included'
                        }
                    </h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
                {
                    extras.map((extra,index)=>{
                        return <li key={index}>
                            {extra}
                        </li>
                    })
                }
            </ul>
        </section>
        </>
    )

}

export default SingleRoom;