import React from "react";
import Slideover from "@/components/slideover";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Search } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";


const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },

]
const TeamMembers = () => {

  const [open, setOpen] = useState<any>(false)

  const checkbox = useRef<any>()
  const [checked, setChecked] = useState<any>(false)
  const [indeterminate, setIndeterminate] = useState<any>(false)
  const [selectedPeople, setSelectedPeople] = useState<any>([])

  useLayoutEffect(() => {
    const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
    setChecked(selectedPeople.length === people.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedPeople])

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      {/* Title */}
      <div>
        <div className="mt-2 md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="flex text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight mb-3">
              <ChevronLeftIcon className="text-gray-800 -ml-1 mr-1 h-10 w-8 flex-shrink-0" />
              Team Management
            </h2>
          </div>
          <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">

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
                    Dashboard
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-1">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-900" aria-hidden="true" />
                  <a href="#" aria-current="page" className="ml-4 text-sm font-medium text-gray-800 hover:text-gray-200">
                    Team Management
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>


      {/* sub heading */}
      <div className="sm:flex items-center sm:items-center sm:justify-between my-5">
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="block w-full rounded-2xl border-0 py-1 pl-8 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-7"
          />
          <div className="absolute inset-y-0 left-0 flex py-1.5 pl-1.5">
            <Search className="pl-1 w-5 text-gray-500" />
          </div>
        </div>

        <div className="flex sm:ml-4 gap-0 bg-gray-200 rounded-2xl ring-1 ring-inset ring-gray-200 shadow-sm ">
          <button
            type="button"
            className="inline-flex items-center rounded-2xl bg-slate-900 px-[35px] py-2 text-sm font-semibold text-white hover:bg-slat-800"
          >
            Invited
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-2xl bg-gray-200 px-[35px] py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            Registered
          </button>

        </div>

        <div className="mt-3 flex sm:ml-4 sm:mt-0">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center rounded-xl bg-slate-800 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Open Drawer
          </button>
        </div>
      </div>


      {/* Table */}
      <div className="mt-8 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="relative">
              {selectedPeople.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person, index) => (
                    <tr key={index} className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={person.email}
                          checked={selectedPeople.includes(person)}
                          onChange={(e) =>
                            setSelectedPeople(
                              e.target.checked
                                ? [...selectedPeople, person]
                                : selectedPeople.filter((p: any) => p !== person)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                          selectedPeople.includes(person) ? 'text-indigo-600' : 'text-gray-900'
                        )}
                      >
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Slideover open={open} setOpen={setOpen} />
    </div>
  );
};

export default TeamMembers;
