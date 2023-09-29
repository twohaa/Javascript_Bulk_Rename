const fs = require("fs");
const path = require("path");

const replaceThis = "twoha";
const replaceWith = "twohaa";
const preview = false;
const folder = __dirname;

try {
  fs.readdir(folder, (err, data) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      let oldFile = path.join(folder, item);
      let newFile = path.join(
        folder,
        item.replaceAll(replaceThis, replaceWith)
      );
      if (!preview) {
        fs.rename(oldFile, newFile, () => {
          console.log("Rename successful");
        });
      } else {
        if ("data/" + item !== newFile)
          console.log("data/" + item + "will be removed to " + newFile);
      }
    }
  });
} catch (err) {
  console.log(err);
}
