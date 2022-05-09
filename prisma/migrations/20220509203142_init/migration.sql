/*
  Warnings:

  - You are about to drop the `tipodos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tipodos";

-- CreateTable
CREATE TABLE "tipo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "mission" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tipo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tipo_name_key" ON "tipo"("name");
