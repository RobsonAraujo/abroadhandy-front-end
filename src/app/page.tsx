"use client";

import Image from "next/image";
import hero from "../../public/hero.png";
import { Stack, Typography } from "@mui/material";
import SearchBar from "./components/search-bar/SearchBar";
import Space from "./components/space/Space";
import { useRouter } from "next/navigation";
import { ROUTE } from "@/app/types/generic";
import HideOnMobile from "./components/hideOnMobile/HideOnMobile";
import HideOnDesktop from "./components/hideOnDesktop/HideOnDesktop";
import Button from "./components/button/Button";

export default function Home() {
  const router = useRouter();
  const handleSearch = (search: string) => {
    router.push(`/${ROUTE.BUSCAR_EMPRESA}?search=${search}`);
  };

  return (
    <section
      className="flex max-md:flex-col pt-32 max-md:pt-2 justify-around items-center"
      aria-label="Seção de destaque para mentoria universitária"
    >
      <div className="w-[468px] max-md:w-full mt-13">
        <Typography
          component="h1"
          variant="h3"
          fontWeight="bold"
          lineHeight="54px"
          gutterBottom
          sx={{
            fontSize: {
              xs: "26px",
            },
            lineHeight: {
              xs: "36px",
            },
          }}
        >
          Conecte-se com mentores experientes para suas aplicações
          universitárias
        </Typography>
        <Typography component="p" variant="body1" color="textSecondary">
          Receba orientação personalizada de estudantes que já foram aprovados
          nas melhores universidades do mundo.
        </Typography>
        <Space top={6} />
        <HideOnMobile>
          <SearchBar caption onSearch={handleSearch} />
        </HideOnMobile>
      </div>

      <div className="max-md:mt-8">
        <Image
          src={hero}
          alt="Ilustração de estudantes se conectando para mentoria universitária"
          width={543}
        />
      </div>
      <HideOnDesktop fullWidth>
        <Stack spacing={2} marginTop={6} marginBottom={16}>
          <SearchBar onSearch={handleSearch} />
          <Button
            onClick={() => {
              console.log("Need to create a context for search to use here");
              handleSearch("universidade");
            }}
            style={{ height: "44px" }}
            fullWidth
            variant="contained"
          >
            Encontrar Mentor
          </Button>
        </Stack>
      </HideOnDesktop>
    </section>
  );
}
