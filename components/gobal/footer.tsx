import Link from "next/link";


export const Footer = () => {
  return (
    <footer className="px-16 bg-white py-20 w-full border-t-2 dark:bg-[#1F1F1F]">
      <div className="flex justify-between mb-9 flex-wrap">
        <div className="mb-12 md:flex md:flex-col">
          <Link href="/" className="text-primary text-4xl font-bold">
            MORENT
          </Link>
          <p className="font-medium text-secondary-400 max-w-[292px] mt-4 dark:text-white">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex gap-[60px] flex-wrap">
          <div>
            <h3 className="mb-6 text-[#1A202C] text-xl font-semibold dark:text-secondary-300">
              About
            </h3>
            <ul className="flex flex-col gap-5 text-[#13131399] font-medium dark:text-white">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-secondary-500 text-xl font-semibold dark:text-secondary-300">
              Community
            </h3>
            <ul className="flex flex-col gap-5 text-[#13131399] font-medium dark:text-white">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 text-secondary-500 text-xl font-semibold dark:text-secondary-300">
              Socials
            </h3>
            <ul className="flex flex-col gap-5 text-[#13131399] font-medium dark:text-white">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-9 flex flex-col gap-5 md:flex-row md:justify-between">
        <h5 className="font-bold text-secondary-500 dark:text-secondary-300">
          ©{new Date().getFullYear()} MORENT. All rights reserved
        </h5>
        <div className="flex gap-[60px]">
          <Link
            href="/"
            className="font-bold text-secondary-500 hover:text-[#13131399] transition dark:text-secondary-300 dark:hover:text-[#F6F7F9]"
          >
            Privacy & Policy
          </Link>
          <Link
            href="/"
            className="font-bold text-secondary-500 hover:text-[#13131399] transition dark:text-secondary-300 dark:hover:text-[#F6F7F9]"
          >
            Terms & Condition
          </Link>
        </div>
      </div>
        <p className="font-bold text-secondary-500 hover:text-[#13131399] transition text-center dark:text-secondary-300 dark:hover:text-[#F6F7F9]">Created by Muhammad Hammad ur Rehman</p>
    </footer>
  );
};
