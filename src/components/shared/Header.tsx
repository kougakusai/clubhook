import { Fragment } from 'react';
import type { ReactNode, VFC } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  BellIcon,
  MenuIcon,
  XIcon,
  PlusCircleIcon,
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  MoonIcon,
} from '@heroicons/react/outline';

import { ChevronDownIcon } from '@heroicons/react/solid';

const navigation = [
  { title: 'ホーム', href: '#', icon: HomeIcon },
  { title: 'メンバー', href: '#', icon: UsersIcon },
  { title: 'カレンダー', href: '#', icon: CalendarIcon },
];
const club = [
  {
    title: 'マイページ',
    href: '#',
    src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    title: 'こうがく祭実行委員会',
    href: '#',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEylgd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    title: '日本一つながる学食',
    href: '#',
    src: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];
const profile = ['Your Profile', 'Settings', 'Sign out'];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header: VFC = () => {
  return (
    <div>
      <header className="fixed z-40 w-screen bg-snow-900 border-[#4C566A] border-b border-opacity-10">
        <div className="items-center px-4 md:px-6 lg:px-8 mx-auto max-w-7xl h-header">
          <div className="flex justify-between items-center ">
            <div className="flex items-center h-header">
              <div className="flex lg:hidden flex-shrink-0 items-center h-header">
                <Menu as="div" className="relative ml-3">
                  {({ open }) => {
                    return (
                      <>
                        <Menu.Button className="flex items-center">
                          <div className="flex items-center max-w-xs text-lg bg-snow-800 rounded-full focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand focus:outline-none">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEylgd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center px-1 sm:px-2">
                            <div className="hidden sm:block font-semibold whitespace-nowrap">こうがく祭実行委員会</div>
                            <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                          </div>
                        </Menu.Button>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="absolute left-0 py-1 mt-2 w-80 bg-snow-900 rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right focus:outline-none"
                          >
                            {profile.map((item) => {
                              return (
                                <Menu.Item key={item}>
                                  {({ active }) => {
                                    return (
                                      <a
                                        className={classNames(
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-lg text-night-900'
                                        )}
                                      >
                                        {item}
                                      </a>
                                    );
                                  }}
                                </Menu.Item>
                              );
                            })}
                          </Menu.Items>
                        </Transition>
                      </>
                    );
                  }}
                </Menu>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {/* {navigation.map((item, itemIdx) => {
                    return itemIdx === 0 ? (
                      <Fragment key={item}>
                        <a href="#" className="py-2 px-3 text-lg font-medium text-white bg-gray-900 rounded-lg">
                          {item}
                        </a>
                      </Fragment>
                    ) : (
                      <a
                        key={item.title}
                        href="#"
                        className="py-2 px-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-lg"
                      >
                        {item}
                      </a>
                    );
                  })} */}
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center ml-4 lg:ml-6">
                <button className="p-1 mr-6 text-night-900 hover:text-brand bg-snow-900 rounded-full focus:outline-none">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
                <button className="p-1 text-night-900 hover:text-brand bg-snow-900 rounded-full focus:outline-none">
                  <span className="sr-only">Dark mode</span>
                  <MoonIcon className="w-6 h-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
              </div>
            </div>
            <div className="flex lg:hidden -mr-2">
              <button className="p-1 mr-3 text-night-900 hover:text-brand bg-snow-900 rounded-full focus:outline-none">
                <span className="sr-only">View notifications</span>
                <BellIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              <button className="p-1 text-night-900 hover:text-brand bg-snow-900 rounded-full focus:outline-none">
                <span className="sr-only">View notifications</span>
                <MoonIcon className="w-6 h-6" aria-hidden="true" />
              </button>
              {/* Mobile menu button */}
              {/* <Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-white bg-snow-800 hover:bg-gray-700 rounded-lg focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button> */}
            </div>
          </div>
        </div>
      </header>

      <div>
        <nav className="flex fixed top-0 items-center mt-header h-[54px] lg:h-menu shadow">
          <div className="hidden lg:flex flex-col py-5 w-[72px] lg:h-full bg-snow-900 ">
            <div className="mx-auto">
              {club.map((item) => {
                return (
                  <div key={item.title} className="mb-6">
                    <a href={item.href}>
                      <img className="w-12 h-12 rounded-full " src={item.src} alt="" />
                    </a>
                  </div>
                );
              })}
              <PlusCircleIcon className="w-12 h-12 text-brand" />
            </div>
          </div>
          <div className="flex lg:block justify-evenly lg:py-6 lg:mx-auto w-screen lg:w-[270px] max-w-7xl lg:h-menu bg-snow-800">
            {navigation.map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex flex-col lg:flex-row items-center pt-2 pb-1 lg:pl-[16px] w-[60px] lg:w-auto hover:bg-[#66C9D9] hover:bg-opacity-30"
                >
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                  <a
                    href={item.href}
                    className="lg:py-2 px-3 text-xs lg:text-lg font-medium text-night-900 whitespace-nowrap"
                  >
                    {item.title}
                  </a>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
