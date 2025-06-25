
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">
            My academic background and qualifications
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl">Bachelor's Degree in Network Engineering</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-2">
            <p className="text-lg font-medium">University of Benghazi</p>
            <p className="text-muted-foreground">2019 – 2024</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
