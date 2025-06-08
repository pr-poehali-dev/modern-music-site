import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([80]);
  const [progress, setProgress] = useState([30]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1F2C]/95 backdrop-blur-lg border-t border-purple-500/20 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Current track info */}
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <div className="w-14 h-14 bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] rounded-lg flex items-center justify-center">
            <Icon name="Music" className="text-white" size={24} />
          </div>
          <div className="min-w-0">
            <h4 className="text-white font-semibold truncate">Cosmic Dreams</h4>
            <p className="text-purple-300 text-sm truncate">Space Orchestra</p>
          </div>
        </div>

        {/* Player controls */}
        <div className="flex flex-col items-center space-y-2 flex-1">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#9b87f5]"
            >
              <Icon name="Shuffle" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#9b87f5]"
            >
              <Icon name="SkipBack" size={20} />
            </Button>
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white rounded-full w-12 h-12 p-0"
            >
              <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#9b87f5]"
            >
              <Icon name="SkipForward" size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-[#9b87f5]"
            >
              <Icon name="Repeat" size={20} />
            </Button>
          </div>

          {/* Progress bar */}
          <div className="flex items-center space-x-2 w-full max-w-md">
            <span className="text-purple-300 text-xs">2:30</span>
            <Slider
              value={progress}
              onValueChange={setProgress}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-purple-300 text-xs">4:15</span>
          </div>
        </div>

        {/* Volume control */}
        <div className="flex items-center space-x-2 flex-1 justify-end">
          <Icon name="Volume2" className="text-white" size={20} />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
