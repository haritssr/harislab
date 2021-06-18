import Link from "next/link";
import { Menu } from "@headlessui/react";

const NavMobile = () => {
  return (
    <nav className="z-20 flex items-center justify-between md:hidden">
      {/* HarisLab */}
      <nav className="block w-3/4 ">
        <Link href="/">
          <a className="block w-full py-3 pl-5 text-xl font-semibold font-mw">
            <span>Haris</span>
            <span className="font-light">Lab</span>
          </a>
        </Link>
      </nav>

      {/* Menu */}
      <Menu as="div" className="static flex justify-end w-1/4 ">
        {({ open }) => (
          <>
            <Menu.Button className="z-50 flex justify-end w-full py-3 pr-5 focus:outline-none">
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Menu.Button>

            <Menu.Items className="absolute right-0 z-50 w-full p-5 origin-top-right bg-gray-800 mt-14">
              {/* Search */}
              <section className="mb-5  flex items-center  p-1.5 rounded-lg bg-gray-700  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={1}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  className="w-full ml-1 text-white placeholder-gray-300 bg-gray-700 focus:outline-none focus:placeholder-white "
                  placeholder="Search"
                />
              </section>

              <section className="grid grid-cols-2 gap-5 pt-5 border-t border-gray-500">
                {/* Alat */}
                <div className="flex flex-col p-2 space-y-3 ">
                  <div className="text-xs text-white">ALAT</div>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/materi">
                            <a>Materi</a>
                          </Link>
                        ) : (
                          <Link href="/materi">
                            <a>Materi</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/kartu">
                            <a>Kartu</a>
                          </Link>
                        ) : (
                          <Link href="/kartu">
                            <a>Kartu</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/kalkulator">
                            <a>Kalkulator</a>
                          </Link>
                        ) : (
                          <Link href="/kalkulator">
                            <a>Kalkulator</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/animasi">
                            <a>Animasi</a>
                          </Link>
                        ) : (
                          <Link href="/animasi">
                            <a>Animasi</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/scan">
                            <a>Scan</a>
                          </Link>
                        ) : (
                          <Link href="/scan">
                            <a>Scan</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/games">
                            <a>Games</a>
                          </Link>
                        ) : (
                          <Link href="/games">
                            <a>Games</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>

                {/* Lainnya */}
                <div className="flex flex-col p-2 space-y-3 ">
                  <div className="text-xs text-white">LAINNYA</div>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/blog">
                            <a>Blog</a>
                          </Link>
                        ) : (
                          <Link href="/blog">
                            <a>Blog</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/portofolio">
                            <a>Portofolio</a>
                          </Link>
                        ) : (
                          <Link href="/portofolio">
                            <a>Portofolio</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/bookingLes">
                            <a>Booking Les</a>
                          </Link>
                        ) : (
                          <Link href="/bookingLes">
                            <a>Booking Les</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/merchandise">
                            <a>Merchandise</a>
                          </Link>
                        ) : (
                          <Link href="/merchandise">
                            <a>Merchandise</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/login">
                            <a>Login</a>
                          </Link>
                        ) : (
                          <Link href="/login">
                            <a>Login</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button className="w-full text-left text-gray-400 rounded-lg">
                        {active ? (
                          <Link href="/signUp">
                            <a>Daftar</a>
                          </Link>
                        ) : (
                          <Link href="/signup">
                            <a>Daftar</a>
                          </Link>
                        )}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </section>
            </Menu.Items>
          </>
        )}
      </Menu>
    </nav>
  );
};

export default NavMobile;
