/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "user_types" AS ENUM ('user', 'admin', 'customer');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "type" "user_types" NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE "Post";
