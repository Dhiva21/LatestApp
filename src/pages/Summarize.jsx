import React from 'react'
import Layout from '../Layout/Layout'
import  SummarizeNews from '../components/SummarizeNews'

const Summarize = ({menuItems}) => {
  return (
    <>
    <Layout menuItems={menuItems}>
    <SummarizeNews/>
  </Layout>
  </>
  )
}

export default Summarize