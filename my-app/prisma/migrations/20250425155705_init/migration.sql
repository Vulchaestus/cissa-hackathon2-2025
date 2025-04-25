-- CreateTable
CREATE TABLE "User" (
    "userName" TEXT NOT NULL PRIMARY KEY,
    "displayName" TEXT,
    "picture" TEXT,
    "password" TEXT NOT NULL,
    "friendIds" TEXT,
    "playlistIds" TEXT,
    "songIds" TEXT,
    "albumIds" TEXT,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "Playlist" (
    "playlistId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "description" TEXT,
    "songIds" TEXT NOT NULL,
    "playlistType" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    CONSTRAINT "Playlist_userName_fkey" FOREIGN KEY ("userName") REFERENCES "User" ("userName") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "albumId" INTEGER NOT NULL,
    "streams" INTEGER NOT NULL,
    "lyrics" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "shareCount" INTEGER NOT NULL,
    "songObj" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    CONSTRAINT "Song_artistName_fkey" FOREIGN KEY ("artistName") REFERENCES "User" ("userName") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Playlist" ("playlistId") ON DELETE RESTRICT ON UPDATE CASCADE
);
