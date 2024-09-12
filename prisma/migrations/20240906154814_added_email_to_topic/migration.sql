/*
  Warnings:

  - The `type` column on the `Topic` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `email` to the `Topic` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ETopic" AS ENUM ('draft', 'denied', 'publish');

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "email" TEXT NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "ETopic" NOT NULL DEFAULT 'draft';

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
