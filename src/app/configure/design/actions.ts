"use server";

import { db } from "@/db";
import PrismaClient from "../../../../node_modules/.prisma/client";

export type SaveConfigArgs = {
  color: PrismaClient.CaseColor;
  finish: PrismaClient.CaseFinish;
  material: PrismaClient.CaseMaterial;
  model: PrismaClient.PhoneModel;
  configId: string;
};

export async function saveConfig({
  color,
  finish,
  configId,
  material,
  model,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model },
  });
}
