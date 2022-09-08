import React from 'react'
import SectionBenefits from './section/SectionBenefits'
import SectionContact from './section/SectionContact'
import SectionCottages from './section/SectionCottages'
import SectionFormsPay from './section/SectionFormsPay'
import SectionLocation from './section/SectionLocation'
import SectionMain from './section/SectionMain'
import SectionRecommend from './section/SectionRecommend'
import SectionTechnology from './section/SectionTechnology'

const Main = () => {
  return (
    <main className='page'>
        <SectionMain/>
        <SectionCottages/>
        <SectionLocation/>
        <SectionBenefits/>
        <SectionRecommend/>
        <SectionTechnology/>
        <SectionFormsPay/>
        <SectionContact/>
    </main>
  )
}

export default Main