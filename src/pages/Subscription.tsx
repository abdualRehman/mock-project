import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";

import p1 from '@/assets/images/p1.png'
import p2 from '@/assets/images/p2.png'
import p3 from '@/assets/images/p3.png'
import p4 from '@/assets/images/p4.png'
import s1 from '@/assets/images/s1.png'
import s2 from '@/assets/images/s2.png'
import user1 from '@/assets/images/user1.png'

const Subscription = () => {

  const stats = [
    { title: 'Joining', subTitle: "(This Month)", number: 120, src: p1, bgColor: 'bg-sky-50' },
    { title: 'Renewal', subTitle: "(This Month)", number: 80, src: p2, bgColor: 'bg-orange-50' },
    { title: 'Renewal', subTitle: "(Next Month)", number: 180, src: p3, bgColor: 'bg-red-50' },
    { title: 'Total', subTitle: "Subscribers", number: 1320, src: p4, bgColor: 'bg-green-50' },
  ]

  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
  }


  const tableList = [
    { user: user1, userName: 'Lindsay Walton', plan: 'Basic', services: '1', duration: '2 Months', start: '12/05/2023', end: '12/05/2023', amount: '$16.00', status: "Active", button: 'Cancel Plan' },
    { user: user1, userName: 'Jackson Smith', plan: 'Professional', services: '4', duration: '1 Year', start: '12/07/2023', end: '12/05/2024', amount: '$89.00', status: "Expired", button: 'Cancel Plan' },
  ]

  return (
    <div>
      {/* <button onClick={() => setOpen(true)} >Click</button> */}
      {/* <Slideover open={open} setOpen={setOpen} /> */}

      {/* Title */}
      <div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="flex text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight mb-3">
              <ChevronLeftIcon className="text-gray-800 -ml-1 mr-1 h-10 w-8 flex-shrink-0" />
              Subscribers
            </h2>
          </div>
          <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
            <button
              type="button"
              className="ml-3 inline-flex items-center rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              View Logs
            </button>
          </div>
        </div>
        <div>
          <nav className="sm:hidden" aria-label="Back">
            <a href="#" className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-200">
              <ChevronLeftIcon className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
              Back
            </a>
          </nav>
          <nav className="hidden sm:flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-1">
              <li>
                <div className="flex space-x-1">
                  <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-200">
                    Admin
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-1">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-500" aria-hidden="true" />
                  <a href="#" className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200">
                    Subscription
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-1">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-900" aria-hidden="true" />
                  <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-gray-800 hover:text-gray-200">
                    Subscribers
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {stats.map((item, ind) => (
          <li key={ind} className={classNames(
            item.bgColor,
            "col-span-1 flex rounded-md shadow-sm px-4 py-3"
          )}>
            <div
              className={'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'}
            >
              <img src={item.src} />
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <Link to="#">
                  <h3 className="font-medium text-gray-900 hover:text-gray-600" >
                    {item.title}
                  </h3>
                  <h3 className="font-medium text-gray-900 hover:text-gray-600" >
                    {item.subTitle}
                  </h3>
                </Link>
                <p className="text-lg font-bold text-black-500"> {item.number}</p>
              </div>
            </div>
          </li>

        ))}
      </ul>

      <div className="mt-3 grid grid-cols-5 gap-5" >
        <img className="col-span-3 flex h-[100%]" src={s1} />
        <img className="col-span-2 flex h-[100%]" src={s2} />
      </div>

      {/* table */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                  >
                    User
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Plan
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Services
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Plan Duration
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Start Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    End Date
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Plan Status
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Upgrade Plan
                  </th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {tableList.map((item, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      <div className="flex gap-3 items-center justify-center" >
                        <img src={item.user} width={'24px'} />
                        {item.userName}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.plan}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.services}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.duration}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.start}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.end}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {item.amount}
                    </td>
                    <td className={`whitespace-nowrap px-3 py-4 text-sm ${item.status == 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                      {item.status}
                    </td>

                    <td className="relative whitespace-nowrap py-3 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                      <a href="#" className="inline-flex items-center rounded-md bg-slate-800 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        {item.button}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* section 2 */}
          <div className="px-5 hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-purple-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  4
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Subscription;
