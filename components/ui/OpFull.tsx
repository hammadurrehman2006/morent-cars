import {Button} from "@/components/ui/button";
import Options from "@/components/ui/option";
import { UpDownArrowIcon } from "@/components/ui/icons";
import classNames from "classnames";

const OptionsFull = ({ className }: { className?: string }) => {
  return (
    <div
      className={classNames(
        "flex flex-col md:flex-row justify-between items-center",
        className
      )}
    >
      <Options title="Pick - Up" />
      <div className="flex items-center mx-4 -my-4 z-10">
        <Button size="lg">
          <UpDownArrowIcon />
        </Button>
      </div>
      <Options title="Drop - Off" />
    </div>
  );
};
export default OptionsFull;