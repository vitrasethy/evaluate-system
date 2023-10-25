import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LinkButton from "./link-button";

export default function MobileProjForm() {
  return (
    <Tabs defaultValue="presentation" className="w-11/12 mt-4 m-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="presentation">Presentation</TabsTrigger>
        <TabsTrigger value="poster">Poster</TabsTrigger>
      </TabsList>
      <TabsContent value="presentation">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Smart Attendance Tracker</CardTitle>
            <CardDescription>ID: IG8-1</CardDescription>
            <CardDescription>Leader: Bruno Fernandez</CardDescription>
            <CardDescription>Judge: 4 teachers</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <LinkButton isEvaluated={false} />
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="poster">
        <Card className="w-full bg-green-200">
          <CardHeader>
            <CardTitle>Smart Attendance Tracker</CardTitle>
            <CardDescription>ID: IG8-1</CardDescription>
            <CardDescription>Leader: Bruno Fernandez</CardDescription>
            <CardDescription>Judge: 4 teachers</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <LinkButton isEvaluated={true} />
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
