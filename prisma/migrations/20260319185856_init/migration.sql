-- CreateTable
CREATE TABLE "console" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'no-image.png',
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "console_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "cover" TEXT NOT NULL DEFAULT 'no-image.png',
    "developer" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "genre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "console_id" INTEGER NOT NULL,

    CONSTRAINT "Games_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "console_name_key" ON "console"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Games_title_key" ON "Games"("title");

-- AddForeignKey
ALTER TABLE "Games" ADD CONSTRAINT "Games_console_id_fkey" FOREIGN KEY ("console_id") REFERENCES "console"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
