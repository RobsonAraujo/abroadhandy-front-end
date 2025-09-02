"use client";

import logo from "../../../../public/logo.png";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import { Typography } from "@mui/material";
import Ray from "@/app/icons/Ray";
import Link from "next/link";
import BlogMenuItem from "../blogMenuItem/BlogMenuItem";
import SearchBar from "../search-bar/SearchBar";
import MobileNavigation from "../mobileNavigation/MobileNavigation";
import { usePathname } from "next/navigation";
import HideOnMobile from "../hideOnMobile/HideOnMobile";
import Space from "../space/Space";
import HideOnDesktop from "../hideOnDesktop/HideOnDesktop";

export default function Header() {
  const onHandleSearch = (query: string) => {
    console.log("enviou", query);
  };
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header
      className={`flex items-center px-[160px] max-md:px-4 justify-between  border-b border-lightGrey  h-[72px] "
      }`}
    >
      <div className="flex items-center justify-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Abroad Handy logotipo"
            width={140}
            className="cursor-pointer"
          />
        </Link>
        <Space right={10} />
        <HideOnMobile>
          <BlogMenuItem />
        </HideOnMobile>
        <Space right={4} />
      </div>

      <HideOnMobile>
        {!isHome && (
          <SearchBar onSearch={onHandleSearch} width="448px" height="44px" />
        )}
      </HideOnMobile>

      <HideOnMobile>
        <Button
          variant="contained"
          aria-label="Seja um mentor"
          disabled
          sx={{
            height: {
              sm: "32px",
              lg: "44px",
            },
          }}
        >
          <Ray
            width="20px"
            fill="white"
            style={{ paddingRight: 6 }}
            aria-hidden="true"
          />
          <Typography
            variant="body1"
            fontWeight="700"
            textTransform="capitalize"
            color="white"
          >
            Seja um Mentor
          </Typography>
        </Button>
      </HideOnMobile>

      <HideOnDesktop>
        <MobileNavigation />
      </HideOnDesktop>
    </header>
  );
}
