"use client";
import Poster from "./poster";
import Presentation from "./presentation";

import * as React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectsForm() {
  return (
    <div className="flex justify-center w-full items-center">
      <Tabs
        defaultValue="account"
        className=" w-[90%] md:w-auto shadow-2xl border-2 mx-20  rounded-xl bg-white"
      >
        <TabsList className="flex grid-cols-2 mb-5 rounded-xl border-none h-10 justify-center my-4 bg-white">
          <TabsTrigger
            value="account"
            className="h-14 w-1/2 ml-5 rounded-xl border-[#014164] border-2 text-md "
          >
            Presentation
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="h-14 w-1/2 mr-5 rounded-xl border-[#014164] border-2 text-md "
          >
            Poster
          </TabsTrigger>
        </TabsList>
        <div className="present ">
          <TabsContent value="account" className=" w-[90%] md:w-auto">
            <Presentation />
          </TabsContent>
        </div>
        <TabsContent value="password" className=" w-[90%] md:w-auto">
          <Poster />
        </TabsContent>
      </Tabs>
    </div>
  );
}
