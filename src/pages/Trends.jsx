import React from 'react'
import Layout from '../Layout/Layout'
 import { Trending } from '../components/Trending'
const Trends = ({menuItems}) => {
    return (
      
        <>
          <Layout menuItems={menuItems}>
            <Trending />
        </Layout>
        </>
  )
}

export default Trends