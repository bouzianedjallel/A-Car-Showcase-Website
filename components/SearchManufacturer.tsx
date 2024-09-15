import { manufacturers } from '@/constants'
import { manufacturerProps } from '@/types'
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment, useState } from 'react'

const SearchManufacturer = ({manufacturer,setManufacturer}: manufacturerProps) => {
 
  const [query , setQuery] = useState('');
   
  const filtredManufacturers = query === "" ? manufacturers : manufacturers.filter((item) => {
    item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  });

  return (
    <div className='manufacturer'>
      <Combobox> 
        <div className='relative'>
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt='carlogo'
              width={20}
              height={40}
              className='ml-4'
            />
          </ComboboxButton>

          <ComboboxInput
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='Volkswagen...'
          />

          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions  className='search-manufacturer__options'>
               {filtredManufacturers.length === 0 && query !== "" ? (
                 <ComboboxOption
                   value={query}
                   className='search-manufacturer__option'
                 >
                  Create {query}
                 </ComboboxOption> 
               ) : (
                 filtredManufacturers.map((item) => (
                  <ComboboxOption
                     key={item}
                     className={({active}) => 
                     `realtive search-manufacturers__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900" 
                     }`
                    } 
                    value={item}
                  >
                    {({selected, active}) => (
                     <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                     </>
                    )}
                  </ComboboxOption>
                 ))
               )
               }
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer

//1.12
