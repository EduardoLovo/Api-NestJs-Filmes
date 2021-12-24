-- CreateTable
CREATE TABLE `Filme` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `capa` VARCHAR(191) NULL,
    `imagemView` VARCHAR(191) NULL,

    UNIQUE INDEX `Filme_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genero_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FilmeToGenero` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FilmeToGenero_AB_unique`(`A`, `B`),
    INDEX `_FilmeToGenero_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_FilmeToGenero` ADD FOREIGN KEY (`A`) REFERENCES `Filme`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FilmeToGenero` ADD FOREIGN KEY (`B`) REFERENCES `Genero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
