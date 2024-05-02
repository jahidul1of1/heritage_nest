import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="bg-[#ECF5FF] px-7">
        <div className="mx-auto w-full max-w-[1600px] p-8 py-6">
          <div className="md:flex w-full  md:justify-between">
            <div className="mb-6 md:mb-0 md:min-w-[400px]">
              <Link href="https://flowbite.com/" className="flex items-center">
                <img src={logo} className="h-18 me-3" alt="FlowBite Logo" />
              </Link>
              <p className="max-w-[300px] mt-5">
                Design amazing digital experiences that create more happy in the
                world.
              </p>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-8 sm:gap-7 sm:grid-cols-5">
              <MenuLinks
                data={{
                  title: "Product",
                  links: [
                    { link: "", name: "Overview" },
                    { link: "", name: "Features" },
                    { link: "", name: "Solutions" },
                    { link: "", name: "Tutorials" },
                    { link: "", name: "Pricing" },
                    { link: "", name: "Releases" },
                  ],
                }}
              />
              <MenuLinks
                data={{
                  title: "Company",
                  links: [
                    { link: "", name: "About us" },
                    { link: "", name: "Features" },
                    { link: "", name: "Solutions" },
                    { link: "", name: "Tutorials" },
                    { link: "", name: "Pricing" },
                    { link: "", name: "Releases" },
                  ],
                }}
              />
              <MenuLinks
                data={{
                  title: "Company",
                  links: [
                    { link: "", name: "About us" },
                    { link: "", name: "Features" },
                    { link: "", name: "Solutions" },
                    { link: "", name: "Tutorials" },
                    { link: "", name: "Pricing" },
                    { link: "", name: "Releases" },
                  ],
                }}
              />
              <MenuLinks
                data={{
                  title: "Company",
                  links: [
                    { link: "", name: "About us" },
                    { link: "", name: "Features" },
                    { link: "", name: "Solutions" },
                    { link: "", name: "Tutorials" },
                    { link: "", name: "Pricing" },
                    { link: "", name: "Releases" },
                  ],
                }}
              />
              <MenuLinks
                data={{
                  title: "Company",
                  links: [
                    { link: "", name: "About us" },
                    { link: "", name: "Features" },
                    { link: "", name: "Solutions" },
                    { link: "", name: "Tutorials" },
                    { link: "", name: "Pricing" },
                    { link: "", name: "Releases" },
                  ],
                }}
              />
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center ">
              ©. 2024 Heritage- Nest . All rights reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link to="" className="text-blue-500 hover:text-gray-900 ">
                <FaTwitter />
              </Link>
              <Link to="" className="text-blue-500 hover:text-gray-900  ms-5">
                <FaLinkedin />
              </Link>
              <Link to="" className="text-blue-500 hover:text-gray-900  ms-5">
                <FaFacebook />
              </Link>
              <Link to="" className="text-blue-500 hover:text-gray-900  ms-5">
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link to="" className="text-blue-500 hover:text-gray-900  ms-5">
                <span className="sr-only">Dribbble account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

const MenuLinks = ({ data }) => {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
        {data?.title}
      </h2>
      <ul className="text-gray-500  font-medium">
        {data?.links?.map((link, index) => (
          <li key={index} className="mb-4">
            <Link href={link.link} className="hover:underline ">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
