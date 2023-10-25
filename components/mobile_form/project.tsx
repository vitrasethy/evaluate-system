import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <Button asChild className="bg-[#194061]">
              <Link href="/e-day/1/1/evaluate">Evaluate</Link>
            </Button>
            <Button asChild className="bg-[#194061]">
              <Link href="/e-day/1/1/evaluate">Edit Evaluation</Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="poster">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Smart Attendance Tracker</CardTitle>
            <CardDescription>ID: IG8-1</CardDescription>
            <CardDescription>Leader: Bruno Fernandez</CardDescription>
            <CardDescription>Judge: 4 teachers</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            {/* <Button asChild className="bg-[#194061]">
              <Link href="/e-day/1/1/evaluate">Evaluate</Link>
            </Button>
            <Button asChild className="bg-[#194061]">
              <Link href="/e-day/1/1/evaluate">Edit Evaluation</Link>
            </Button> */}
            {/* <Link href="/e-day/1/1/evaluate">
              <Button asChild className="bg-[#194061]">
                Evaluate
              </Button>
            </Link>
            <Link href="/e-day/1/1/evaluate">
              <Button asChild className="bg-[#194061]">
                Edit Evaluation
              </Button>
            </Link> */}
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
