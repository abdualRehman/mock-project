import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { CalendarSearch, ChevronLeftIcon, Search, X } from 'lucide-react';
import user1 from '@/assets/images/user1.png'

const Slideover = ({ open, setOpen }: any) => {

  const logsList = [
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet provident eaque possimus, omnis beatae quo nulla placeat voluptatum aspernatur temporibus commodi harum error libero, cupiditate animi earum fuga iste.',
      date: 'Aug 10 at 8:12 AM',
    },
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. temporibus commodi harum error libero, cupiditate animi earum fuga iste.',
      date: 'Aug 10 at 8:12 AM',
    },
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet provident eaque possimus, omnis beatae quo nulla placeat.',
      date: 'Aug 10 at 8:12 AM',
    },
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet provident eaque possimus, omnis beatae quo nulla placeat voluptatum aspernatur.',
      date: 'Aug 10 at 8:12 AM',
    },
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet ',
      date: 'Aug 10 at 8:12 AM',
    },
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet provident eaque possimus, omnis beatae quo nulla placeat voluptatum aspernatur temporibus commodi harum error libero, cupiditate animi earum fuga iste.',
      date: 'Aug 10 at 8:12 AM',
    },
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur.',
      date: 'Aug 10 at 8:12 AM',
    },
    {
      src: user1,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet provident eaque possimus, omnis beatae quo nulla placeat voluptatum aspernatur temporibus commodi harum error libero, cupiditate animi earum fuga iste.',
      date: 'Aug 10 at 8:12 AM',
    },
  ];

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xl">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Panel title
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-2 flex-1 px-4 sm:px-6">

                        {/* Title */}
                        <div>
                          <div className="md:flex md:items-center md:justify-between">
                            <div className="min-w-0 flex-1">
                              <h4 className="flex text-2xl font-bold leading-6 sm:truncate mb-3">
                                <ChevronLeftIcon className="text-gray-800 -ml-1 mr-1 h-7 w-5 flex-shrink-0" />
                                Logs
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* Subtitle */}
                        <div>
                          <div className="sm:flex items-center sm:items-center sm:justify-between my-5">
                            <div className="flex gap-0 bg-gray-200 rounded-lg ring-1 ring-inset ring-gray-200 shadow-sm ">
                              <div className="relative flex items-center justify-center">
                                <input
                                  type="text"
                                  name="search"
                                  id="search"
                                  placeholder="DD-MM-YYYY"
                                  className="block w-full rounded-lg border-0 py-1 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-7"
                                />
                                <div className="absolute inset-y-0 left-0 flex py-1.5 pl-1.5">
                                  <CalendarSearch className="pl-1 w-5 text-gray-500" />
                                </div>
                              </div>

                            </div>

                            <div className="mt-3 flex sm:ml-4 sm:mt-0">
                              <button
                                type="button"
                                className="inline-flex gap-1 items-center rounded-xl bg-gray-300 px-2 py-2 text-sm font-semibold text-black-800 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                              >
                                <X className='w-5 h-5 text-black-800 bg-gray-700 text-white rounded-xl p-1' />
                                Clear Filter
                              </button>
                            </div>
                          </div>

                          <div>
                            <div className="relative flex items-center justify-center">
                              <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search"
                                className="block w-full rounded-2xl border-0 py-1.5 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-7"
                              />
                              <div className="absolute inset-y-0 left-0 flex py-2 pl-1.5">
                                <Search className="pl-1 w-5 text-gray-500" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* content */}

                        {logsList.map((log, index) => (
                          <div key={index} className='flex gap-4 items-start justify-start p-2 py-3 border-b border-gray-200'  >
                            <img src={log.src} width={'35px'} className='mt-2' />
                            <div className='' >
                              <h2 className='text-[12px] leading-4 text-gray-700 font-semibold' >{log.content}</h2>
                              <h6 className='text-[10px] text-gray-700' >{log.date}</h6>
                            </div>
                          </div>
                        ))}

                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Slideover;
