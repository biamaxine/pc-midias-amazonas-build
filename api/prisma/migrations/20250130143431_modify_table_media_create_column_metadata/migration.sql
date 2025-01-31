/*
  Warnings:

  - Added the required column `metadata` to the `media` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "media" ADD COLUMN     "metadata" VARCHAR(255) NOT NULL;
