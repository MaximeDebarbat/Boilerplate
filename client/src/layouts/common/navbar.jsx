"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Logo from "@/components/common/Logo";
import Loading from "@/components/common/loading";
import { useAuth } from "@/context/AuthContext";
import { useUI } from "@/context/UIContext";
import { organization_name } from "@/config";

import LoginModal from "@/components/modals/login";
import RegisterModal from "@/components/modals/register";

const Navbar = () => {
  const { user, loading, logout } = useAuth();
  const { showModal, setModalContent, setModalOpen } = useUI();  // using context for showing the modal

  const [mode, setMode] = useState("login");

  const t = useTranslations("general");

  useEffect(() => {
    setModalContent({
      title: t(`authentication.${mode}.title`),
      content:
      <>
            {
              mode === "login" ? (
                <LoginModal />
              ) : (
                <RegisterModal />
              )
            }
            <div className="w-full text-center">
              <span className="text-sm">
                {t.rich(`authentication.${mode}.question`,{
                  response:(
                            <span key="response" className="btn-link cursor-pointer" onClick={() => setMode(mode == "login" ? "register" : "login")}>
                              {t(`authentication.${mode}.response`)}
                            </span>
                          )
                }
                )}
              </span>
            </div>
          </>
    });
  }, [mode]);

  return (
    <div className="w-full flex justify-center">
      <div className="navbar bg-base-100 max-w-[90vw] rounded-xl">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl flex flex-row" href="/">
            <Logo />
            {organization_name}
          </Link>
        </div>
        <div className="flex-none">
          {loading ? (
            <Loading />
          ) : user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    {t(`navbar.profile`)}
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li>
                  <a onClick={()=>logout()}>{t(`navbar.logout`)}</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="btn btn-primary" onClick={()=>setModalOpen(true)}>
              {t(`navbar.login`)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
