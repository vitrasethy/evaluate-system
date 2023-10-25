"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

interface LinkButtonProps {
  isEvaluated: boolean;
}

export default function LinkButton({ isEvaluated }: LinkButtonProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className={isEvaluated ? "hidden" : ""}>
          <Link href="/e-day/1/1/evaluate" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Evaluate
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={isEvaluated ? "" : "hidden"}>
          <Link href="/e-day/1/1/evaluate" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Edit Evaluation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
