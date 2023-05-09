import React, { FC, useEffect, useRef } from 'react'

import './TabsHeader.scss'
import { classNames } from '../../../../core/libs'

const TabsHeader: FC<any> = ({ tabs, activeIndex, onTabClick }) => {
  const indicatorRef = useRef(null)

  const handleTabClick = (index: number) => {
    onTabClick(index)
  }

  useEffect(() => {
    indicatorRef.current.style.left = `${activeIndex * (100 / tabs.length)}%`
  }, [activeIndex])

  useEffect(() => {
    indicatorRef.current.style.width = `${100 / tabs.length}%`
  }, [])

  return (
    <div className='bui-tab-header'>
      <div className='bui-tab-header__content'>
        {tabs.map((tab: any, index: number) => (
          <button
            style={{ width: `${100 / tabs.length}%` }}
            key={index}
            className={classNames(
              'bui-tab-header__item',
              {
                'bui-tab-header__item_active': index === activeIndex,
              },
              [],
            )}
            onClick={() => handleTabClick(index)}
          >
            {tab.text}
          </button>
        ))}
      </div>
      <div className='bui-tab-header__indicator'>
        <div className='bui-tab-header__indicator-item' ref={indicatorRef} />
      </div>
    </div>
  )
}

export default TabsHeader
