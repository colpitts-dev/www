"use client";

import { useAuthSession } from "@/app/client/hooks/useAuthSession";

import "./Header.styles.scss";

export const Header = () => {
  const { data: auth } = useAuthSession();

  async function handleLogout() {
    await fetch("/api/v1/auth/logout");
    window.location.reload();
  }

  return (
    <header role="banner" className="cd-header">
      <div className="cd-header__logo">{/* LOGO GOES HERE */}</div>
      {auth && (
        <button className="cd-header__account-menu" onClick={handleLogout}>
          Log Out
        </button>
      )}
    </header>
  );
};
