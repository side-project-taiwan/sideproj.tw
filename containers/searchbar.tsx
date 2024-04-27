import React from 'react'

export const SearchBar = () => {
  return (
    <section className='flex h-[2.5rem] w-full items-center justify-center'>
      {/* search-bar */}
      <label htmlFor='search-button' className='relative w-full'>
        <img
          src='/homepage/search.svg'
          alt='search-button'
          className='absolute top-1/2 -translate-y-1/2 translate-x-1/2'
        />
        <input
          type='text'
          placeholder='關鍵字搜尋專案'
          className='h-full w-full rounded-full border-[1px] border-[#E4E4E7] py-[0.625rem] pl-[2.625rem] pr-[0.75rem] text-[0.875rem] text-[#A1A1AA]'
        />
      </label>
    </section>
  )
}
