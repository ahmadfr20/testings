import React from 'react'
import { useState } from 'react';

import { Disclosure } from "@headlessui/react";

export default function FAQs() {
    return (
        <section className="px-5 py-4 mt-20" id="FAQs">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="font-blueberry text-5xl max-xs:text-2xl font-bold mb-20 text-center">
                Masih penasaran?
                </h2>
                <Disclosure>
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberrymd px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberrymd text-xl'>Apa itu Dimulai?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberrymd text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Dimulai adalah platform khusus untukmu yang ingin selalu menambah wawasan setiap hari dengan mudah. Berbagai konten menarik dari buku-buku terkenal sudah terangkum sehingga mudah dipahami.
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>
                
                <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberrymd px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberrymd text-xl '>Dimana saya bisa mendapatkan akses ke aplikasi Dimulai?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberrymd font-thin text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Dimulai adalah platform khusus untukmu yang ingin selalu menambah wawasan setiap hari dengan mudah. Berbagai konten menarik dari buku-buku terkenal sudah terangkum sehingga mudah dipahami.
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>

                <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberrymd px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberrymd text-xl '>Apakah semua konten Dimulai gratis?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberrymd text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Dimulai adalah platform khusus untukmu yang ingin selalu menambah wawasan setiap hari dengan mudah. Berbagai konten menarik dari buku-buku terkenal sudah terangkum sehingga mudah dipahami.
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>

                <Disclosure as="div" className="mt-4">
                {({ open }) => (
                    <>
                    <div className="border rounded-lg font-blueberrymd px-4 py-4">
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className='font-blueberrymd text-xl '>Apa saja yang akan saya dapatkan saat berlangganan?</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  stroke="currentColor"
                                    className={`${
                                    open ? "rotate-180 transform" : ""
                                    } h-5 w-5 text-black`}  >
                                    <path strokeLinecap="round"  strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="font-blueberrymd text-xl px-4 mt-5 pt-0 dark:text-gray-900">
                            Dimulai adalah platform khusus untukmu yang ingin selalu menambah wawasan setiap hari dengan mudah. Berbagai konten menarik dari buku-buku terkenal sudah terangkum sehingga mudah dipahami.
                        </Disclosure.Panel>
                    </div>
                    </>
                )}
                </Disclosure>
                
                
            </div>
        </section>
    );
}