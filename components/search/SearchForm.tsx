"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchFormProps {
  initialValue?: string;
  onSearch: (q: string) => void;
}

export function SearchForm({ initialValue = "", onSearch }: SearchFormProps) {
  const [value, setValue] = useState(initialValue);
  const [prevInitial, setPrevInitial] = useState(initialValue);

  // ✅ Adjust state during render when the prop changes (no Effect).
  if (initialValue !== prevInitial) {
    setPrevInitial(initialValue);
    setValue(initialValue);
  }

  const submit = () => {
    if (value.trim()) onSearch(value.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit();
  };

  return (
    <div className="bg-white rounded-2xl p-2 max-w-4xl mx-auto flex items-center shadow-lg border border-border gap-2">
      <div className="flex-1 flex items-center gap-3 px-3">
        <FaSearch className="w-5 h-5 text-gray-400 shrink-0" />
        <Input
          className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 text-lg py-3 h-auto bg-transparent"
          placeholder="கோவில் பெயர், மாவட்டம், கடவுள்..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button
        onClick={submit}
        size="lg"
        variant="orange"
        className="rounded-xl px-8"
      >
        தேடுக
      </Button>
    </div>
  );
}