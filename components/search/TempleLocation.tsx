import {
  FiMapPin,
  FiNavigation,
} from "react-icons/fi";

interface Props {
  district?: string;
  address?: string;
}

export function TempleLocation({
  district,
  address,
}: Props) {
  return (
    <div className="flex items-start gap-2">
      <FiMapPin className="mt-0.5 h-4 w-4 shrink-0" />

      <div>
        <p className="text-sm font-medium">
          {district}
        </p>

        {address && (
          <p className="text-xs text-muted-foreground">
            {address}
          </p>
        )}
      </div>

      <button
        type="button"
        className="ml-auto"
        aria-label="Get directions"
      >
        <FiNavigation className="h-4 w-4" />
      </button>
    </div>
  );
}