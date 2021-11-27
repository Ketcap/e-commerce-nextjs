/*
  Warnings:

  - You are about to drop the column `defaultVariantId` on the `Product` table. All the data in the column will be lost.
  - Changed the type of `price` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ProductVariant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_defaultVariantId_fkey";

-- DropIndex
DROP INDEX "Product_defaultVariantId_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "defaultVariantId",
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductVariant" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
