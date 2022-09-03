/**
 * Size verilen javascript dosyasında halihazırda array
 * ve fonksiyon isimleri yer alıyor. Aşağıdaki fonksiyonların
 * içerisine aldığı parametrelere göre comment satırındaki istenileni yapabilecek kod yazmanız bekleniyor.
 */

 const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]


// move(17,6) // dosyayı klasöre taşıyacak
// copy(18,7) // kopyasını oluşturacak
// remove(17) // dosyayı silecek
// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
// parentFolderOf(17) // ==> 5

let destFolderAndFile = [];
const fs = require("fs");

function findFile(fileId) {
for (let i = 0; i < folders.length; i++) {
  for (let j = 0; j < folders[i].files?.length; j++) {
    if (folders[i].files[j].id == fileId) {
      destFolderAndFile.parentFolderId = folders[i].id;
      destFolderAndFile.fileName = folders[i].files[j].name;
      destFolderAndFile.fileFolderName = folders[i].name;
    }
  }
}
}

function findFolder(folderId) {
for (let i = 0; i < folders.length; i++) {
  if (folders[i].id == folderId)
    destFolderAndFile.destFolderName = folders[i].name;
}
}

function copy(fileId, folderId) {
findFile(fileId);
findFolder(folderId);
let filePath =
  destFolderAndFile.fileFolderName + "\\" + destFolderAndFile.fileName;
let destPath =
  destFolderAndFile.destFolderName + "\\" + destFolderAndFile.fileName;
fs.copyFile(filePath, destPath, (err) => {
  if (err) {
    console.log("Error Found:", err);
  } else {
    console.log(filePath + " -> " + destPath + " kopyalandı");
  }
});
}

function move(fileId, folderId) {
findFile(fileId);
findFolder(folderId);
let filePath =
  destFolderAndFile.fileFolderName + "\\" + destFolderAndFile.fileName;
let destPath =
  destFolderAndFile.destFolderName + "\\" + destFolderAndFile.fileName;
fs.rename(filePath, destPath, (err) => {
  if (err) {
    console.log("Hata Found:", err);
  } else {
    console.log(filePath + " -> " + destPath + " taşındı");
  }
});
}

function remove(fileId) {
findFile(fileId);
let filePath =
  destFolderAndFile.fileFolderName + "\\" + destFolderAndFile.fileName;
fs.unlink(filePath, (err) => {
  if (err) {
    console.log("Hata:", err);
  } else {
    console.log(filePath + " file silindi");
  }
});
}

function removeFolder(folderId) {
findFolder(folderId);
let folderPath = destFolderAndFile.destFolderName;
fs.rm(folderPath, { recursive: true }, (err) => {
  if (err) {
    console.log("Hata:", err);
  } else {
    console.log(folderPath + " folder silindi");
  }
});
}

function parentFolderOf(fileId) {
// findFile(fileId);
console.log(destFolderAndFile)
console.log("parentFolderOf Id: " + destFolderAndFile.parentFolderId);
}