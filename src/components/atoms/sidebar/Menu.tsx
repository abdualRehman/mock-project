import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import { Briefcase, FileBarChart, FolderClosed, LayoutGrid, Lightbulb, Settings, Users } from 'lucide-react';
import { UsersIcon } from '@heroicons/react/24/outline';


const navigation = [
    { name: 'Businesses', href: '#', icon: Briefcase, current: false },
    { name: 'Clients', href: '#', icon: Users, current: false },
    { name: 'Team Management', href: '/team-members', icon: UsersIcon, current: false },
    { name: 'Subscription', href: '/subscription', icon: FileBarChart, current: false },
    { name: 'Payments', href: '#', icon: FolderClosed, current: false },
]
const teams = [
    { id: 1, name: 'Tickets', href: '/tickets', icon: Settings, current: false },
    { id: 2, name: 'Help & Support', href: '#', icon: Lightbulb, current: false },
]
interface MenuProps {
    customClass: string;
}

const Menu: React.FC<MenuProps> = ({ customClass }) => {

    const classNames = (...classes: string[]) => {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <>
            <div className={`flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 ${customClass}`}>
                <div className="flex h-16 shrink-0 items-center">
                    <img
                        className="h-8 w-auto m-auto"
                        src={logo}
                        alt="Your Company"
                    />
                </div>
                <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" className="-mx-2 space-y-1">
                                <li className='mb-5' >
                                    <Link
                                        to={'/'}
                                        className={classNames('bg-white text-slate-900', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold')}
                                    >
                                        <LayoutGrid
                                            className={classNames(
                                                'text-slate-900',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        Dashboard
                                    </Link>
                                </li>
                                <div className="text-md font-semibold leading-6 text-slate-500 mb-2 font-poppins">Relations</div>
                                {navigation.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'bg-white text-slate-900'
                                                    : 'text-indigo-200 hover:text-slate-900 hover:bg-white',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                            )}
                                        >
                                            <item.icon
                                                className={classNames(
                                                    item.current ? 'text-slate-900' : 'text-indigo-200 group-hover:text-slate-900',
                                                    'h-6 w-6 shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <div className="text-md font-semibold leading-6 text-slate-500 mb-2 font-poppins">Support</div>
                            <ul role="list" className="-mx-2 mt-2 space-y-1">
                                {teams.map((team) => (
                                    <li key={team.name}>
                                        <Link
                                            to={team.href}
                                            className={classNames(
                                                team.current
                                                    ? 'bg-white text-slate-900'
                                                    : 'text-indigo-200 hover:text-slate-900 hover:bg-white',
                                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                            )}
                                        >
                                            <team.icon
                                                className={classNames(
                                                    team.current ? 'text-slate-900' : 'text-indigo-200 group-hover:text-slate-900',
                                                    'h-6 w-6 shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                            <span className="truncate">{team.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Menu