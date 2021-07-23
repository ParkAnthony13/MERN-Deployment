import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Router, Link, navigate } from '@reach/router'

import ListComponent from './List.component'
import EditComponent from './Edit.component'
import AddComponent from './Add.component'
import SingleComponent from './Single.component'

const Home = props => {



    return(
        <div>
            <Router>
                <ListComponent path='/'/>
                <AddComponent path='/pets/new'/>
                <EditComponent path='/pets/:id/edit'/>
                <SingleComponent path='/pets/:id'/>
            </Router>
        </div>
    )
}

export default Home