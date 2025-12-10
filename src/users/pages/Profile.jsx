import React from 'react'
import Header from '../components/Header'
import { Button } from 'flowbite-react'
import EditProfile from '../components/EditProfile'
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Card } from "flowbite-react";
import BookStoreFooter from '../../components/BookStoreFooter';
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
function Profile() {
  return (
    <div>
        <Header/>
        <div className='bg-amber-50 mt-40' >
          <div className='bg-amber-950 pt-32 pb-16 mt-40 relative'>
                <div className='absolute -top-24 left-24 p-2 bg-amber-50 border-2 border-amber-50 rounded-full'>
                 
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80" alt=""  className='rounded-full shadow-2xl ' width={'160px'}/>

                </div>
                <div className="flex flex-row justify-between">
  <div className="flex ">
     <h1 className='text-center ms-25 text-amber-50 font-bold text-3xl'>Bonnie Green</h1>
     <img src="https://static.vecteezy.com/system/resources/previews/022/935/713/original/blue-checkmark-icon-approved-free-png.png" width={'45px'} alt="" />
  </div>
  <div className="">
 <EditProfile/>
  </div>
</div>
                
          </div>
         

        </div>

        <section>
           <section className='px-30 py-5 h-screen '>
          <div className="overflow-x-auto bg-amber-950 p-5 text-amber-50 rounded shadow">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        <TabItem active title="Sell Book" icon={HiUserCircle}>
              <form>
      <div className="space-y-12">
       
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">Book Information</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
             
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
               
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
               
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
             
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
               <div className="col-span-full">
           
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
            </div>
              
            </div>

            <div className="sm:col-span-3">
             
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              
            
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
             
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
              <div className='ms-40 mt-4'>
                 <label htmlFor="imgfile" >
                <input id='imgfile' type="file" hidden />
                <img src="https://cdn1.iconfinder.com/data/icons/round-vol-4/512/uploading-512.png" width={'200px'} alt="" />
              </label>
              </div>
            </div>
           
             
         
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-white">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
        </TabItem>
        <TabItem title="Book Status" icon={MdDashboard} >
            <Card href="#" className=" w-full ">
              <div className='flex justify-evenly'> 
                <div>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>

      status 
              </div>
              <div>
     <img src="https://tse1.mm.bing.net/th/id/OIP.ntqPvGciO4KeXC1ve8cImgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" width={'200px'} alt="" />
              </div>
              </div>
              
      
     
    </Card>
        </TabItem>
        <TabItem title="Purchase History" icon={HiAdjustments}>
          <Card href="#" className=" w-full ">
              <div className='flex justify-evenly'> 
                <div>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>

      status 
              </div>
              <div>
     <img src="https://tse1.mm.bing.net/th/id/OIP.ntqPvGciO4KeXC1ve8cImgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" width={'200px'} alt="" />
              </div>
              </div>
              
      
     
    </Card>
        </TabItem>
       
      </Tabs>
    </div>
        {/* <div className="flex flex-row my-5">
  <div className="basis-2xs">
    <Button></Button>
  </div>
  <div className="basis-2xs">
     <Button></Button>
  </div>
  <div className="basis-2xs">
     <Button></Button>
  </div>

</div> */}
      </section>
        </section>
        <BookStoreFooter/>
    </div>
  )
}

export default Profile
