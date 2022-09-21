import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import DarkModeToggleButton from "../dark-mode-toggle/Dark-mode-toggle-button";

const Header = () => {
  const router = useRouter();
  const locale = router.locale;
  const { t } = useTranslation(["header"]);
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h1 className="ml-3 text-xl">{t("header:logoText")}</h1>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-900">{t("header:home")}</a>
            </Link>

            {/* "home": "홈",
  "project": "프로젝트",
  "contact me": "연락하기" */}
            <Link href="/projects">
              <a className="mr-5 hover:text-gray-900">{t("header:project")}</a>
            </Link>
            <Link href="/" locale={locale === "ko" ? "en" : "ko"}>
              <a className="mr-5 hover:text-gray-900">
                {t("header:changeTheLanguage")}
              </a>
            </Link>

            <a
              href="https://open.kakao.com/o/sSGWh3Be"
              className="mr-5 hover:text-gray-900"
            >
              {t("header:contactMe")}
            </a>
          </nav>
          <DarkModeToggleButton />
        </div>
      </header>
    </div>
  );
};

export default Header;
