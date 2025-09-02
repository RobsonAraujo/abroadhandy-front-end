"use client";

import { Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return (
    <footer
      className={`${
        isHome ? "fixed" : "mt-8"
      }  w-full bottom-0 flex items-center justify-between px-[160px] max-md:px-4 border-t border-lightGrey h-[80px] bg-white max-md:flex-col-reverse max-md:justify-evenly`}
      aria-label="Rodapé do site Abroad Handy"
    >
      <Typography variant="body1" color="darkGrey">
        Abroad Handy © 2025 – Todos os direitos reservados.
      </Typography>

      <nav
        className="flex gap-4 items-center"
        aria-label="Links para redes sociais"
      >
        <span
          aria-hidden="true"
          title="Facebook indisponível"
          className="opacity-30 cursor-not-allowed"
        >
          <FacebookIcon />
        </span>
        <span
          aria-hidden="true"
          title="Instagram indisponível"
          className="opacity-30 cursor-not-allowed"
        >
          <InstagramIcon />
        </span>
        <Link
          href="https://www.linkedin.com/company/abroadhandy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ir para o LinkedIn da Abroad Handy"
        >
          <LinkedInIcon className="cursor-pointer" />
        </Link>
      </nav>
    </footer>
  );
}
