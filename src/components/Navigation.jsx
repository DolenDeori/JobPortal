import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { CustomButton } from "./CustomButton";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Recent Jobs", href: "#" },
  { name: "About Us", href: "#" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="inset-x-0 top-0 z-50 px-16 fixed bg-white border-b">
      <nav
        aria-label="Global"
        className="flex items-center justify-between py-4"
      >
        <div className="flex items-center gap-16">
          {/* Navigation Logo */}
          <div className="flex">
            <a href="#" className="-m-1.5 p-1.5 font-HostGroteskBold text-xl">
              <span className="sr-only">Your Company</span>
              Job
              <span className="text-blue-500"> Search</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex lg:gap-x-8 font-HostGroteskMedium">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 text-gray-500 hover:text-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Navigation CTA */}
        <div className="hidden lg:flex gap-2">
          <CustomButton title="Post Job +" bgVarient="secondary" />
          <CustomButton title="Login / Sign Up" bgVarient="primary" />
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 font-HostGroteskBold text-xl">
              <span className="sr-only">Your Company</span>
              Job
              <span className="text-blue-500"> Search</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50 font-HostGroteskMedium"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 flex gap-4">
                <CustomButton title="Post Job +" bgVarient="secondary" />
                <CustomButton title="Login / Sign Up" bgVarient="primary" />
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
