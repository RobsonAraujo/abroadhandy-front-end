import { RocketLaunch } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@/app/components/button/Button";

export default function ComingSoonAlert({
  limitAlertOpen,
  handleClose,
}: {
  limitAlertOpen: boolean;
  handleClose: () => void;
}) {
  if (!limitAlertOpen) return null;

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-full max-w-xl px-4">
      <div className="flex items-start gap-4 rounded-xl bg-[#EBF6F2] p-5 shadow-md ring-1 ring-[#0AA86F]">
        <RocketLaunch
          sx={{ fontSize: 40, color: "#19D28F", marginTop: "2px" }}
        />
        <div className="flex-1 text-sm text-[#1E3C31]">
          <h3 className="text-base font-semibold mb-1 text-[#1E3C31]">
            Nova versão chegando!
          </h3>
          <p className="mb-1 text-[#1E3C31] font-medium">
            Você atingiu o limite de downloads nesta versão.
          </p>
          <p className="text-sm text-[#1E3C31]">
            Em breve você poderá baixar o quanto quiser para impulsionar o seu
            negócio.
          </p>
          <p className="text-xs italic text-[#666666] mt-1">
            E o melhor: você fará parte da comunidade desde o início. 😉
          </p>
        </div>
        <Button
          onClick={handleClose}
          className="text-[#1E3C31] hover:text-[#0AA86F] transition"
          aria-label="Fechar alerta"
        >
          <CloseIcon />
        </Button>
      </div>
    </div>
  );
}
