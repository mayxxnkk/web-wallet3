import React from "react";
import { ChevronDown, ChevronUp, Copy } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface MnemonicDisplayProps {
  showMnemonic: boolean;
  setShowMnemonic: (value: boolean) => void;
  mnemonicWords: string[];
  copyToClipboard: (content: string) => void;
}

const MnemonicDisplay = ({
  setShowMnemonic,
  showMnemonic,
  mnemonicWords,
  copyToClipboard,
}: MnemonicDisplayProps) => {
  return (
    <div
      className="animate-fadeInUp group flex flex-col items-center gap-4 cursor-pointer rounded-lg border border-primary/10 p-8 transition-transform duration-300 ease-in-out"
    >
      <div
        className="flex w-full justify-between items-center"
        onClick={() => setShowMnemonic(!showMnemonic)}
      >
        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
          Your Secret Phrase
        </h2>
        <Button onClick={() => setShowMnemonic(!showMnemonic)} variant="ghost">
          {showMnemonic ? (
            <ChevronUp className="size-4" />
          ) : (
            <ChevronDown className="size-4" />
          )}
        </Button>
      </div>

      {showMnemonic && (
        <div
          className="animate-fadeInUp flex flex-col w-full items-center justify-center transition-transform duration-300 ease-in-out"
          onClick={() => copyToClipboard(mnemonicWords.join(" "))}
        >
          <div
            className="animate-fadeInUp grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center w-full items-center mx-auto my-8 transition-opacity duration-300 ease-in-out"
          >
            {mnemonicWords.map((word, index) => (
              <p
                key={index}
                className="md:text-lg bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-lg p-4"
              >
                {word}
              </p>
            ))}
          </div>
          <div className="text-sm md:text-base text-primary/50 flex w-full gap-2 items-center group-hover:text-primary/80 transition-all duration-300">
            <Copy className="size-4" /> Click Anywhere To Copy
          </div>
        </div>
      )}
    </div>
  );
};

export default MnemonicDisplay;
