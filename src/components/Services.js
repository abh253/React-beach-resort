import React from 'react'
import Title from './Title'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from 'react-icons/fa'

const Services = () => {
    const [services,setServices]=React.useState([
        {
            icon:<FaCocktail/>,
            title:'free cocktails',
            info:"Now is the winter of our discontent Made glorious summer by this sun of York And all the clouds that lourd upon our house."
        }
        ,{
            icon:<FaHiking/>,
            title:'endless hiking',
            info:"Now is the winter of our discontent Made glorious summer by this sun of York And all the clouds that lourd upon our house."
        }
        ,{
            icon:<FaShuttleVan/>,
            title:'free shuttle',
            info:"Now is the winter of our discontent Made glorious summer by this sun of York And all the clouds that lourd upon our house."
        }
        ,{
            icon:<FaBeer/>,
            title:'strongest beer',
            info:"Now is the winter of our discontent Made glorious summer by this sun of York And all the clouds that lourd upon our house."
        }
   ])
    
    return (
        <section className='services'>
            <Title title='services'/>
            <div className='services-center'>
                {
                    services.map((service,index)=>{
                        const {icon,title,info}=service;
                        return (
                            <div key={index} className='service'>
                                <span>{icon}</span>
                                <h6>{title}</h6>
                                <p>{info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Services
