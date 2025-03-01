import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: t("contact.success.title"),
        description: t("contact.success.message")
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: t("contact.error.title"),
        description: t("contact.error.message")
      });
    }
  });

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-4xl font-bold mb-6">{t("contact.title")}</h1>
            <p className="text-xl text-muted-foreground mb-8">{t("contact.subtitle")}</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">{t("contact.address.title")}</h3>
                <p className="text-muted-foreground">{t("contact.address.value")}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("contact.email.title")}</h3>
                <p className="text-muted-foreground">info@webagency.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">{t("contact.phone.title")}</h3>
                <p className="text-muted-foreground">+998 90 123 45 67</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.email")}</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={mutation.isPending}>
                  {mutation.isPending ? t("contact.form.sending") : t("contact.form.submit")}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
