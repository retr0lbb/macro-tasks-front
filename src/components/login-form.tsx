import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import z from "zod/v4";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useNavigate } from "@tanstack/react-router";
import { useFetchLogin } from "@/hooks/useFetchLogin";
import { toast } from "sonner";
import { SlowStartDialog } from "./slow-start-dialog";
import { useState } from "react";

const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(64),
});

export function LoginForm() {
  const navigator = useNavigate();
  const { isPending, error, mutateAsync: login } = useFetchLogin();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      setIsModalOpen(true);
      const data = await login(values);

      if (error) {
        throw error;
      }

      toast.success(data.message);
      loginForm.reset();
      return navigator({ to: "/" });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "An unexpected Error occurred",
      );
    } finally {
      setIsModalOpen(false);
    }
  }

  return (
    <>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-4">
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
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isPending}
            size={"lg"}
            variant="default"
            className="rounded-md"
          >
            Sign In
          </Button>
        </form>
      </Form>

      <SlowStartDialog
        setIsOpen={() => {
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
      />
    </>
  );
}
