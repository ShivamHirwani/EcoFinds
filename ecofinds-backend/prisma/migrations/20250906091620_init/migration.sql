/*
  Warnings:

  - You are about to drop the column `addedAt` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."CartItem" DROP COLUMN "addedAt";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "createdAt";
