
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "slah0982@gmail.com",
    href: "mailto:slah0982@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(091) 015-3246",
    href: "tel:+218910153246"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(092) 890-5676",
    href: "tel:+218928905676"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/صلاح-خيري-95899b324",
    href: "https://linkedin.com/in/صلاح-خيري-95899b324"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/slah0982",
    href: "https://github.com/slah0982"
  }
];

export const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <IconComponent className="h-5 w-5 text-primary mr-3" />
                  <CardTitle className="text-lg">{contact.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="ghost" className="h-auto p-0 justify-start">
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {contact.value}
                      </span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
