import Image from 'next/image'

const SearchBar = () => {
  return (
    <section className='flex h-10 w-full items-center justify-center'>
      <label
        htmlFor='search-button'
        className='flex h-full w-full items-center gap-x-2 rounded-full border border-solid border-[#E4E4E7] px-3 py-2'
      >
        <Image
          src='/homepage/search.svg'
          alt='search-button'
          width={20}
          height={20}
        />
        <input
          type='text'
          placeholder='關鍵字搜尋專案'
          className='h-full w-full'
        />
      </label>
    </section>
  )
}

export default SearchBar
