import React from 'react'
import Layout from '../Layout/Layout'
import FlashCardGenerator from '../components/FlashCardGenerator'

const Summarize = ({menuItems}) => {
  return (
    <>
    <Layout menuItems={menuItems}>
    <FlashCardGenerator/>
  </Layout>
  </>
  )
}

export default Summarize