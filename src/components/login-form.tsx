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

const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(64),
});

export function LoginForm() {
  const navigator = useNavigate();
  const {
    data,
    isPending,
    isSuccess,
    isError,
    error,
    mutateAsync: login,
  } = useFetchLogin();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    await login(values);
    if (isError || error) {
      alert(error);
    }

    if (isSuccess) {
      console.log("Ok it went that way");
      console.log(data);
      navigator({ to: "/" });
    }
    loginForm.reset();
  }

  return (
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
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input placeholder="Senha" type="password" {...field} />
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
          Entrar
        </Button>
      </form>
    </Form>
  );
}
