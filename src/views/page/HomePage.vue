<template>
  <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-100">
  <body class="h-full">
  ```
-->
  <div>
    <router-link to="/commodity">Go to Commodity</router-link>
  </div>
  <Navbar>
    <div class="min-h-full">
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4">
          <div class="flex h-16 items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  class="h-8 w-8"
                  src="data:image/png;base64,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"
                  alt="Your Company"
                />
              </div>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                  <a
                    href="#CardSection"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    >Dashboard</a
                  >
                  <a
                    href="#home"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Home</a
                  >
                  <a
                    href="#introduction"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Projects</a
                  >

                  <a
                    href="#footer"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Contact us</a
                  >
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>

                <!-- Profile dropdown -->

                <div class="relative" @click="toggleDropdown">
                  <div>
                    <button
                      type="button"
                      class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="absolute -inset-1.5"></span>
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fotojet-2-1672132671.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*"
                        alt=""
                      />
                    </button>
                    <div
                      v-show="showDropdown"
                      class="dropdown-content absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      tabindex="-1"
                    >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-0"
                        >Your Profile</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-1"
                        >Settings</a
                      >
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabindex="-1"
                        id="user-menu-item-2"
                        >Sign out</a
                      >
                    </div>
                  </div>
                </div>

                <div class="-mr-2 flex md:hidden">
                  <!-- Mobile menu button -->
                  <button
                    type="button"
                    class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span class="absolute -inset-0.5"></span>
                    <span class="sr-only">Open main menu</span>
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg
                      class="block h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                    <!-- Menu open: "block", Menu closed: "hidden" -->
                    <svg
                      class="hidden h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a
              href="#CardSection"
              class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
              >Dashboard</a
            >
            <a
              href="#home"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >Home</a
            >
            <a
              href="#introduction"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >Projects</a
            >

            <a
              href="#footer"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >Reports</a
            >
          </div>
          <div class="border-t border-gray-700 pb-3 pt-4">
            <div class="flex items-center px-5">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fotojet-2-1672132671.jpg?crop=0.500xw:1.00xh;0.500xw,0&resize=640:*"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div class="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
              <button
                type="button"
                class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span class="absolute -inset-1.5"></span>
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-3 space-y-1 px-2">
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >Your Profile</a
              >
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >Settings</a
              >
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
    </div>
  </Navbar>

  <cardsection class="CardSection" id="CardSection">
    <!--part1 Card Section -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Grid -->
      <div
        class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        <!-- Card -->
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="h-[2.375rem] w-[2.375rem] rounded-full"
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
                <div class="ml-3">
                  <h3
                    class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
                  >
                    London, UK
                  </h3>
                </div>
              </div>
              <div class="pl-3">
                <svg
                  class="w-3.5 h-3.5 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="h-[2.375rem] w-[2.375rem] rounded-full"
                  src="https://images.unsplash.com/photo-1612046264803-6d6b67fdee80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
                <div class="ml-3">
                  <h3
                    class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
                  >
                    Bristol, UK
                  </h3>
                </div>
              </div>
              <div class="pl-3">
                <svg
                  class="w-3.5 h-3.5 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="h-[2.375rem] w-[2.375rem] rounded-full"
                  src="https://images.unsplash.com/photo-1582542021865-bde52fd7c3cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
                <div class="ml-3">
                  <h3
                    class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
                  >
                    Oxford, UK
                  </h3>
                </div>
              </div>
              <div class="pl-3">
                <svg
                  class="w-3.5 h-3.5 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="h-[2.375rem] w-[2.375rem] rounded-full"
                  src="https://images.unsplash.com/photo-1571044880241-95d4c9aa06f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
                <div class="ml-3">
                  <h3
                    class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
                  >
                    Edinburgh, UK
                  </h3>
                </div>
              </div>
              <div class="pl-3">
                <svg
                  class="w-3.5 h-3.5 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="h-[2.375rem] w-[2.375rem] rounded-full"
                  src="https://images.unsplash.com/photo-1598964356161-754cc07fcd36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
                <div class="ml-3">
                  <h3
                    class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
                  >
                    Newcastle, UK
                  </h3>
                </div>
              </div>
              <div class="pl-3">
                <svg
                  class="w-3.5 h-3.5 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <img
                  class="h-[2.375rem] w-[2.375rem] rounded-full"
                  src="https://images.unsplash.com/photo-1566328386401-b2980125f6c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
                <div class="ml-3">
                  <h3
                    class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
                  >
                    Liverpool, UK
                  </h3>
                </div>
              </div>
              <div class="pl-3">
                <svg
                  class="w-3.5 h-3.5 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <!-- End Card -->

        <!-- Card -->
        <a
          class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
          href="#"
        >
          <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <router-link to="/commodity">
                  <img
                    class="h-[2.375rem] w-[2.375rem] rounded-full"
                    src="https://images.unsplash.com/photo-1597740049284-388659a41286?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                  <div class="ml-3">
                    <h3
                      class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200"
                    >
                      Manchester, UK
                    </h3>
                  </div>
                </router-link>
              </div>
              <div class="pl-3">
                <svg
                  class="w-3.5 h-3.5 text-gray-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <!-- End Card -->
      </div>
      <!-- End Grid -->
    </div>
  </cardsection>
  <!-- part1 End Card Section -->
  <!-- part2  home -->
  <div class="home bg-slate-700" id="home">
    <div class="bg-gradient-to-b from-violet-600/[.15] via-transparent">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
        <!-- Announcement Banner
      <div class="flex justify-center">
        <a class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" href="../figma.html">
          <p class="mr-2 inline-block text-white text-sm">
            Preline UI Figma is live.
          </p>
          <span class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
            <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </span>
        </a>
      </div>
      End Announcement Banner -->

        <!-- Title -->
        <div class="max-w-3xl text-center mx-auto">
          <h1
            class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            My products
          </h1>
        </div>
        <!-- End Title -->

        <div class="max-w-3xl text-center mx-auto">
          <p class="text-lg text-gray-400">探索新世界</p>
        </div>

        <!-- Buttons -->
        <div class="text-center">
          <a
            class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
            href="#"
          >
            Get started
            <svg
              class="w-2.5 h-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>
        <!-- End Buttons -->
      </div>
    </div>
  </div>
  <!-- End home -->
  <!-- part2   end home -->
  <!--  part3   introduction -->
  <section id="introduction" class="introduction wrapper py-20 bg-gray-100">
    <div
      class="container mx-auto flex flex-col lg:flex-row justify-between items-center"
    >
      <div class="w-full lg:w-1/2 px-6 mb-10 lg:mb-0">
        <h2 class="text-4xl font-bold mb-4">Magna feugiat adipiscing</h2>
        <p class="text-gray-700 mb-4">
          Lorem ipsum nisl sed cursus magna et amet veroeros. Sed phasellus
          aliquam et tempus lorem feugiat adipiscing lorem. Morbi pharetra vitae
          felis placerat pharetra. Nulla risus orci, dapibus id malesuada et
          nec, malesuada quis orci. Pellentesque eget consequat.
        </p>
        <a
          href="#"
          class="bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
          >Learn more</a
        >
      </div>
      <div class="w-full lg:w-1/2 px-6">
        <ul class="checklist list-disc text-gray-700">
          <li class="mb-2">Ipsum nisl sed cursus magna</li>
          <li class="mb-2">Amet veroeros sed aliquam consequat</li>
          <li class="mb-2">Tempus lorem adipiscing et lorem</li>
          <li class="mb-2">Morbi pharetra vitae felis placerat</li>
          <li>Pharetra nulla risus orci dapibus</li>
        </ul>
      </div>
    </div>
  </section>

  <!--  part3   introduction end -->
  <!-- part4 footer -->

  <footer class="footer bg-gray-900" id="footer">
    <div class="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
      <!-- Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div class="col-span-full lg:col-span-1">
          <a
            class="flex-none text-xl font-semibold text-white"
            href="#"
            aria-label="Brand"
            >Brand</a
          >
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <h4 class="font-semibold text-gray-100">Product</h4>

          <div class="mt-3 grid space-y-3">
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                href="#"
                >Pricing</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                href="#"
                >Changelog</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                href="#"
                >Docs</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <h4 class="font-semibold text-gray-100">Company</h4>

          <div class="mt-3 grid space-y-3">
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                href="#"
                >About us</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                href="#"
                >Blog</a
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                href="#"
                >Careers</a
              >
              <span
                class="inline ml-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-md"
                >We're hiring</span
              >
            </p>
            <p>
              <a
                class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                href="#"
                >Customers</a
              >
            </p>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-2">
          <h4 class="font-semibold text-gray-100">Stay up to date</h4>

          <form>
            <div
              class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2"
            >
              <div class="w-full">
                <label for="hero-input" class="sr-only">Search</label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  class="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <a
                class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                href="#"
              >
                Subscribe
              </a>
            </div>
            <p class="mt-3 text-sm text-gray-400">
              New UI kits or big discounts. Never spam.
            </p>
          </form>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <div
        class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center"
      >
        <div class="flex justify-between items-center">
          <p class="text-sm text-gray-400">
            © 2022 Preline. All rights reserved.
          </p>
        </div>
        <!-- End Col -->

        <!-- Social Brands -->
        <div>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
          </a>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
              />
            </svg>
          </a>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
          </a>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
          <a
            class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
            href="#"
          >
            <svg
              class="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"
              />
            </svg>
          </a>
        </div>
        <!-- End Social Brands -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>


<style scoped></style>
