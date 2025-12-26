"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/app/utils/cn";
import { Button } from "@/app/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";

interface AutocompleteSelectProps {
  options: string[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  label: string;
  onOpenChange?: (open: boolean) => void;
}

export function AutocompleteSelect({
  options,
  value,
  onValueChange,
  placeholder,
  label,
  onOpenChange,
}: AutocompleteSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
    onOpenChange?.(newOpen);
  };

  React.useEffect(() => {
    if (!open) {
      onOpenChange?.(false);
    }
  }, [open, onOpenChange]);

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="h-14   text-base justify-between items-center border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full bg-white text-gray-900 hover:bg-gray-50 hover:text-gray-900"
          >
            <div className="flex items-center justify-around w-full ">
              <span className="text-sm font-normal flex items-center justify-between w-full">
                {value || placeholder}
                <ChevronsUpDown className="h-4 w-4  opacity-50" />
              </span>
              {/* <span> */}

              {/* </span> */}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0 bg-white border-gray-200"
          align="start"
          side="bottom"
          sideOffset={4}
        >
          <Command>
            <CommandInput
              placeholder={`Search ${label.toLowerCase()}...`}
              className="border-0 focus:ring-0 text-gray-900 placeholder:text-gray-500"
            />
            <CommandList>
              <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={(currentValue) => {
                      onValueChange(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
