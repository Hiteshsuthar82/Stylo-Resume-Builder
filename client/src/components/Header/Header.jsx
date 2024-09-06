import React from "react";
import Profile from "./Profile";
import { Logo, Container } from "../index";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAction } from "@reduxjs/toolkit";

function Header() {
  const navigate = useNavigate();
  const authstatus = useSelector((state) => state.auth.status);

  const navitems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authstatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      active: !authstatus,
    },
    {
      name: "Create Resume",
      slug: "/steps",
      active: authstatus,
    },
  ];

  return (
    <header>
      <Container>
        <nav className="flex gap-2 justify-between text-white/80 items-center px-5 py-3 text-md bg-[#9333ea] rounded-bl-md rounded-br-md">
          <Link to={"/"}>
            <Logo />
          </Link>
          <ul className="flex gap-5">
            {navitems.map((item) =>
              item.active ? (
                <li key={item.name} className="hover:text-white">
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      `${isActive ? "text-white" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ) : null
            )}
          </ul>
          <div>
            {authstatus ? (
              <Profile />
            ) : (
              <Link to='/allTemplates' className="px-4 py-2 bg-white text-[#9333ea] rounded-full font-semibold" onClick={() => navigate("getStarted")}>
                Get Started
              </Link>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
