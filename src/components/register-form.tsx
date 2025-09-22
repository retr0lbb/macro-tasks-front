import z from "zod/v4";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRegister } from "@/hooks/useRegister";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SlowStartDialog } from "./slow-start-dialog";

const registerSchema = z.object({
  userName: z.string().min(3),
  email: z.email(),
  password: z.string().min(6).max(64),
});

export function RegisterForm() {
  const loginForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });
  const navigator = useNavigate();
  const { isPending, mutateAsync: register } = useRegister();
  const [isModalOpen, setModalOpen] = useState(false);

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setModalOpen(true);

    toast.promise(register({ ...values }), {
      loading: "Creating your account ...",
      success: (data) => {
        loginForm.reset();
        navigator({ to: "/" });
        setModalOpen(false);
        return data.message || "Account created with success!";
      },
      error: (err) => {
        setModalOpen(false);
        console.log(err);
        return "An un expected Error Occured";
      },
    });
  }

  return (
    <>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={loginForm.control}
            name="userName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isPending} variant="default" className="rounded-md">
            Sing Up Now
          </Button>
        </form>
      </Form>

      <SlowStartDialog
        isOpen={isModalOpen}
        setIsOpen={() => {
          setModalOpen(false);
        }}
      />
    </>
  );
}
