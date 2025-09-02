import { default as MUICard } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Image from "next/image";
import defaultImage from "../../../../public/company-image-default.png";
import { Typography } from "@mui/material";
import Space from "../space/Space";
import Link from "next/link";
import { formatCNPJ } from "@/app/utils/formatCNPJ";
import { ROUTE } from "@/app/types/generic";

interface ICard {
  name?: string;
  nationalRegistry?: string;
  websiteUrl?: string;
  slug?: string;
  imageSrc?: string;
  width?: string;
  height?: string;
}

export default function Card({
  name,
  nationalRegistry,
  websiteUrl,
  imageSrc,
  slug,
  width,
  height,
}: ICard) {
  return (
    <article className="max-md:w-full max-md:flex max-md:justify-center">
      <MUICard
        sx={{
          marginBottom: { md: 2 },
          marginTop: { md: 2 },
          marginRight: { md: 4 },
          boxShadow: "none",
          border: "1px solid #DDD",
          width: {
            md: "inherit",
            xs: "100%",
          },
          margin: {
            xs: "8px 0",
          },
        }}
      >
        <CardActionArea
          sx={{
            width: { lg: width || "256px", sm: width || "100%" },
            minHeight: height || "80px",
            padding: 1,
          }}
        >
          <Link href={`${ROUTE.BUSCAR_EMPRESA}/${slug}`}>
            <div className="flex">
              <div className="border border-gray-300 rounded">
                <Image
                  className="rounded"
                  src={imageSrc || defaultImage}
                  alt={`Logo da empresa ${name || "sem nome"}`}
                  width={64}
                  height={64}
                />
              </div>
              <Space right={3} />
              <div className="flex flex-col justify-around">
                <Typography component="h3" fontWeight="bold">
                  {name || "Empresa sem nome"}
                </Typography>
                <Typography component="p">
                  {formatCNPJ(nationalRegistry) || "CNPJ não informado"}
                </Typography>
                {websiteUrl ? (
                  <Link
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 text-xs"
                  >
                    {websiteUrl}
                  </Link>
                ) : (
                  <Typography variant="overline" color="#007E50">
                    Website não disponível
                  </Typography>
                )}
              </div>
            </div>
          </Link>
        </CardActionArea>
      </MUICard>
    </article>
  );
}
