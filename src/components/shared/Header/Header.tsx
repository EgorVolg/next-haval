import React from "react";
import HeaderLogo from "../../../../public/logo.svg";
import Image from "next/image";
import "./Header.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Link href="/src/components/shared/Home">
          <Image src={HeaderLogo} alt="logo" className="header__logo" />
        </Link>

        <span className="header__text">Официальный дилер Максимум</span>
      </div>
    </header>
  );
};