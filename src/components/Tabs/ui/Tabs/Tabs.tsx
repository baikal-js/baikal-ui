import React, { FC, useState } from 'react'
import { TabsHeader } from '../../index'
import './Tabs.scss'

export interface ITabs {
  tabs: TabsType[]
}

type TabsType = {
  text: string
  renderContent: () => JSX.Element
}

const Tabs: FC<ITabs> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div className='bui-tabs'>
      <TabsHeader activeIndex={activeIndex} tabs={tabs} onTabClick={handleTabClick} />
      <div className='bui-tabs__content'>{tabs[activeIndex].renderContent()}</div>
    </div>
  )
}

export default Tabs
