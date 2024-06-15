'use clinet'
import {
  useState,
  useEffect,
  type ReactNode,
  type ComponentPropsWithoutRef,
} from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/libs/utils'

type TabType = { name: string; value: string }

export type SPTTabsProps = {
  tabs: TabType[]
  renderTabContent: (_tab: TabType) => ReactNode
  className?: string
  onTabChange?: (_tab: TabType) => void
} & Pick<ComponentPropsWithoutRef<typeof Tabs>, 'defaultValue' | 'orientation'>

export const SPTTabs = ({
  defaultValue,
  orientation = 'vertical',
  onTabChange,
  className,
  tabs,
  renderTabContent,
}: SPTTabsProps) => {
  const [activeValue, setActiveValue] = useState(defaultValue || tabs[0].value)
  const onChange = (value: string) => setActiveValue(value)
  const activeTab = tabs.find(tab => tab.value === activeValue)
  useEffect(() => {
    if (!activeTab || !onTabChange) return
    onTabChange(activeTab)
  }, [activeTab, onTabChange])

  return (
    <Tabs
      className={cn(className)}
      orientation={orientation}
      value={activeValue}
      onValueChange={onChange}
    >
      <TabsList className='m-0 mb-5 flex list-none items-center justify-start rounded-none border-b border-zinc-200 bg-transparent p-0'>
        {tabs.map(tab => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              'transition-all duration-300 ease-in-out',
              'inline-flex items-center justify-center whitespace-nowrap rounded-none bg-transparent px-3 py-2 text-sm font-normal',
              'hover:text-blue-500',
              'disabled:pointer-events-none disabled:opacity-50',
              'data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none',
            )}
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map(tab => (
        <TabsContent key={tab.value} value={tab.value}>
          {renderTabContent(tab)}
        </TabsContent>
      ))}
    </Tabs>
  )
}
