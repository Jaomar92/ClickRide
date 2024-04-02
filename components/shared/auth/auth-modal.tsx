"use client";

import * as React from "react";

import useMediaQuery from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";
import SignInForm from "./sign-in-modal";
import SignUpModal from "./sign-up-modal";

const AuthModal = () => {
  const isMd = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = React.useState(false);
  const [signIn, setSignIn] = React.useState(true);

  if (isMd) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="bg-transparent px-6 gap-3">
            <UserCircle2 />
            Login
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="flex items-center justify-between mr-5">
              <DialogTitle className="text-3xl font-bold text-center">
                Click<span className="text-lime-500">Ride</span>
              </DialogTitle>
              <DialogTitle>{!signIn ? "Register" : "Login"}</DialogTitle>
            </div>
            <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          {signIn ? <SignInForm /> : <SignUpModal />}
          <div className="flex flex-col items-center justify-center">
            <p> {signIn ? "Dont Have an Account?" : "Have an account?"}</p>
            <Button
              variant={"link"}
              onClick={() => {
                setSignIn(!signIn);
              }}
            >
              {signIn ? "Register" : "Login"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant={"outline"} className="bg-transparent px-6 gap-3">
          <UserCircle2 />
          {/* Sign Up */}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you are done.
          </DrawerDescription>
        </DrawerHeader>
        <SignInForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AuthModal;
