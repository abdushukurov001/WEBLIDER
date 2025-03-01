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
import { Mail, Phone, MapPin } from "lucide-react";

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

  const contactInfo = [
    {
      icon: MapPin,
      title: "contact.address.title",
      value: "contact.address.value"
    },
    {
      icon: Mail,
      title: "contact.email.title",
      value: "info@webagency.com"
    },
    {
      icon: Phone,
      title: "contact.phone.title",
      value: "+998 90 123 45 67"
    }
  ];

  return (
    <div className="pt-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-6">{t("contact.title")}</h1>
              <p className="text-xl text-muted-foreground">{t("contact.subtitle")}</p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300"
                  initial={fadeIn.initial}
                  animate={fadeIn.animate}
                  transition={{ ...fadeIn.transition, delay: index * 0.2 }}
                >
                  <info.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">{t(info.title)}</h3>
                    <p className="text-muted-foreground">{t(info.value)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="bg-card p-8 rounded-xl shadow-lg"
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
                        <Input className="bg-background" {...field} />
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
                        <Input type="email" className="bg-background" {...field} />
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
                        <Textarea className="bg-background min-h-[150px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full"
                  size="lg"
                >
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