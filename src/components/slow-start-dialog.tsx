import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "./ui/dialog";

interface SlowStartDialogProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export function SlowStartDialog(props: SlowStartDialogProps) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Experience Slow Actions?</DialogTitle>
          <DialogDescription>
            This small project uses an on-demand server, so on the first
            interaction it might take some time to boot it up. Sorry for the
            inconvenience.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button>I understand</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
