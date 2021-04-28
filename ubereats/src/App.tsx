import React, { FunctionComponent } from 'react';
import Card from './Components/Card'
import content from './Content/restaurants'

const App: FunctionComponent = () => {
    return (
        <>
            {
                content.map((e, index) => 
                    <Card title={e.title} promo={e.promo} img={e.img} waitTime={e.waitTime} rating={e.rating} />)
            }
        </>
    )
}

export default App